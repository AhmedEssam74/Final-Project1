import { Alert, Col, Container, FormGroup, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { refreshToken, userLogin } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const navigat = useNavigate()

    function handleTogglePassword() {
        setShowPassword(!showPassword);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const CallRefresh = async () => {
        const res = await refreshToken()
        console.log(res);
    }


    const loginSubmitHundler = async (e) => {
        try {
            e.preventDefault();
            // console.log(email, password);
            const res = await userLogin(
                {
                    Email: email,
                    Password: password,
                }
            );
            if (res.data.response.role === "User" && (res.data.status === true)) {
                navigat('/home')
                setInterval(CallRefresh, 840000)
            } else {
                navigat('/admin/stauts')
                setInterval(CallRefresh, 840000)
            }
        } catch (error) {
            console.log(error, 'Error');
        }
    }

    return (
        <>
            <Container fluid className='container_Auth'>
                <Row className='row_Auth'>
                    <Col lg='4' md='6' sm='4' className='col_Auth p-4 bg-light rounded-4'>
                        <h3 className='text-center mb-4'>Welcome Back</h3>
                        <Form onSubmit={loginSubmitHundler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="ps-1 form_Label">E-mail</Form.Label>
                                <Form.Control className='rounded-4' type="email" placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                {email && !validateEmail(email) && (
                                    <Alert variant="danger">Please enter a valid email</Alert>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-1" controlId="formBasicPassword">
                                <Form.Label className="ps-1 form_Label">Password</Form.Label>
                                <InputGroup>
                                    <Form.Control className='rounded-4'
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} />
                                    <Button
                                        className='hidden_btn'
                                        variant="outline-secondary"
                                        onClick={handleTogglePassword}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                            {/* <FormGroup className='py-3 d-flex flex-row-reverse'>
                                <Link className='link_Auth me-3' to={'/reset-password'} >Forget Password?</Link>
                            </FormGroup> */}
                            <Form.Group className="d-f text-center" >
                                <Button className='Auth_btn rounded-4 py-2' type="submit">
                                    Log in
                                </Button>
                            </Form.Group>
                        </Form>
                        <p className='text-center my-3'>Don't have an account? <Link to={'/register'} style={{ textDecoration: 'none' }} >Sign up</Link> </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login
