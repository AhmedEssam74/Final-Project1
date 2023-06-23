import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getUserInfo } from '../../services/api';
import { useEffect, useState } from 'react';
const UserData = () => {

  const [userData, setUserData] = useState({
    fristName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the user data
  };


  const UserInfo = async () => {
    try {
      const res = await getUserInfo();
      setUserData(res.data.response);
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
                  value={userData.fristName}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setUserData((prevUserData) => ({
                      ...prevUserData,
                      [name]: value,
                    }));
                  }
                  }
                />
              </Form.Group>
            </Col>
            <Col lg='6' md='6' sm='12'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="ps-1 form_Label">Last Name</Form.Label>
                <Form.Control className='rounded-4' type="text" placeholder="last name"
                  value={userData.lastName}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setUserData((prevUserData) => ({
                      ...prevUserData,
                      [name]: value,
                    }));
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="ps-1 form_Label">E-mail</Form.Label>
            <Form.Control className='rounded-4' type="email" placeholder="Enter email"
              value={userData.email}
              onChange={(e) => {
                const { name, value } = e.target;
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  [name]: value,
                }))
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="ps-1 form_Label">Phone</Form.Label>
            <Form.Control className='rounded-4' type="text" placeholder="phone"
              value={userData.phone}
              onChange={(e) => {
                const { name, value } = e.target;
                setUserData((prevUserData) => ({
                  ...prevUserData,
                  [name]: value,
                }))
              }}
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
