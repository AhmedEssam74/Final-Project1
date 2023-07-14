import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editUserInfo, getUserInfo } from '../../services/api';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const UserData = () => {
  const fristNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const navigat = useNavigate()



  const sendUserDataToApi = async () => {
    const formData = new FormData();
    formData.append('fristname', fristNameRef.current.value);
    formData.append('lastname', lastNameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('phone', phoneRef.current.value);
    const res = await editUserInfo(formData)
    if ((res.data.status === true)) {
      navigat('/userinfo')
      console.log(res);
      console.log({
        first_name: fristNameRef.current.value,
        last_name: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendUserDataToApi()
  };


  const UserInfo = async () => {
    try {
      const res = await getUserInfo();
      // setUserData(res.data.response);
      fristNameRef.current.value = res.data.response.fristName
      lastNameRef.current.value = res.data.response.lastName
      emailRef.current.value = res.data.response.email
      phoneRef.current.value = res.data.response.phone
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    UserInfo();
  }, [])



  return (
    <Col lg='8' md='8' sm='12' className='User_Dash_Bord'>
      <Row className='m-3 pt-5'>
        <Form onSubmit={handleSubmit} >
          <Row className='justify-content-around'>
            <Col lg='6' md='6' sm='12'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="ps-1 form_Label">First Name</Form.Label>
                <Form.Control className="mb-3 rounded-4" type="text" placeholder="first name"
                  ref={fristNameRef}
                />
              </Form.Group>
            </Col>
            <Col lg='6' md='6' sm='12'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="ps-1 form_Label">Last Name</Form.Label>
                <Form.Control className='rounded-4' type="text" placeholder="last name"
                  ref={lastNameRef}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ps-1 form_Label">E-mail</Form.Label>
            <Form.Control className='rounded-4' type="email" placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="ps-1 form_Label">Phone</Form.Label>
            <Form.Control className='rounded-4' type="text" placeholder="phone"
              ref={phoneRef}
            />
          </Form.Group>
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

export default UserData
