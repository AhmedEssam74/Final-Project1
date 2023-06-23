import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <>
      <Container fluid className='container_Auth'>
        <Row className='row_Auth'>
          <Col lg='4' md='6' sm='4' className='col_Auth p-4 bg-light rounded-4'>
            <h3 className='text-center mb-4'>Reset Password</h3>
            <p className='text-center mb-4'>Enter your email address and we'll send you an email with instructions to reset your password</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="ps-1 form_Label">E-mail or Phone Number</Form.Label>
                <Form.Control className='rounded-4' type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="d-f text-center" >
                <Button className='Auth_btn rounded-4 py-2 mt-3' type="submit">
                  Reset Password
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

export default ResetPassword
