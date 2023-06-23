import React from 'react'
import NavbarUser from '../../navbareHome/NavbarUser'
import { Container, Row } from 'react-bootstrap'
import UserDashbord from './UserDashbord'
import UserResult from './UserResult'

const UserLastResult = () => {
  return (
    <>
      <NavbarUser />
      <Container className='mt-5 justify-content-between'>
        <Row className='justify-content-around'>
          <UserDashbord />
          <UserResult />
        </Row>
      </Container>
    </>
  )
}

export default UserLastResult
