import { Col } from "react-bootstrap"
import ImageUser from "../../imags/Image 24.jpg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/api";

const UserDashbord = () => {

  const [userData, setUserData] = useState({
    fristName: '',
  });

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
    <Col lg='3' md='3' sm='12' className='User_Dash_Bord mb-4' >
      <ul className='p-2'>
        <li className="p-4">
          <img className="imageUser" src={ImageUser} alt="ImageUser" />
          <h4 className='text-center pt-3'> {userData.fristName} </h4>
        </li>
        <hr />
        <li >
          <h5 className='text-center' > <Link to="/userinfo" className="text-decoration-none" style={{ color: 'black' }} >info</Link> </h5 >
        </li>
        <hr />
        <li>
          <h5 className='text-center'><Link to="/userEditPassword" className="text-decoration-none" style={{ color: 'black' }} >Edit Password</Link></h5 >
        </li>
        <hr />
        <li>
          <h5 className='text-center'><Link to="/userLastResult" className="text-decoration-none" style={{ color: 'black' }} >Result</Link> </h5 >
        </li>
      </ul>
    </Col>
  )
}

export default UserDashbord
