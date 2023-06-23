import NavbarUser from '../../navbareHome/NavbarUser';
import { Container, Row } from 'react-bootstrap';
import './User.css';
import UserDashbord from './UserDashbord';
import UserData from './UserData';
import { Outlet } from 'react-router-dom';



const UserInfo = () => {
  return (
    <>
      <NavbarUser />
      <Outlet />
      <Container className='mt-5 justify-content-between'>
        <Row className='justify-content-around'>
          <UserDashbord />
          <UserData />
        </Row>
      </Container>
    </>
  )
}

export default UserInfo
