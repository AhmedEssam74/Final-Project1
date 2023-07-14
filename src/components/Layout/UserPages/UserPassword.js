import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateUserPassword } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const UserPassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const UpdatePasswordHandler = async (e) => {
        try {
            e.preventDefault();
            const res = await updateUserPassword(
                {
                    Password: currentPassword,
                    NewPassword: newPassword
                }
            );
            console.log(res);
            if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
                alert("Password Updated Successfully");
            }
        } catch (error) {
            console.log(error, 'error')
        }
    }


    return (
        <Col lg='8' md='8' sm='12' className='User_Dash_Bord'>
            <Row className='m-3 pt-5'>
                <Form onSubmit={UpdatePasswordHandler} >
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label className="ps-1 form_Label">Current Password</Form.Label>
                        <Form.Control className='rounded-4' type="password" placeholder="Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNewPassword">
                        <Form.Label className="ps-1 form_Label">New Password</Form.Label>
                        <Form.Control className='rounded-4' type="text" placeholder="new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label className="ps-1 form_Label">Confirm Password</Form.Label>
                        <Form.Control className='rounded-4' type="text" placeholder="confirm password" />
                    </Form.Group> */}
                    <Form.Group className="d-f justify-content-end" >
                        <Button className='save_btn' type="submit">
                            Save Changes
                        </Button>
                    </Form.Group>
                </Form>
            </Row>
        </Col>
    )
}

export default UserPassword
