import React from 'react'
import NavbarUser from '../../navbareHome/NavbarUser'
import { Container, Row } from 'react-bootstrap'
import UserDashbord from './UserDashbord'
import UserPassword from './UserPassword'

const UserEditPassword = () => {
  return (
    <>
      <NavbarUser />
      <Container className='mt-5 justify-content-between'>
        <Row className='justify-content-around'>
          <UserDashbord />
          <UserPassword />
        </Row>
      </Container>
    </>
  )
}

export default UserEditPassword
