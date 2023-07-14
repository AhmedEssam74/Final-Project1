import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../navbareHome/navbarHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Image, Row } from 'react-bootstrap';
import { getUserInfo, userLogout } from '../services/api';
import Logo from '../imags/Logo (2).jpg'


const NavbarUser = () => {
    const navigat = useNavigate()
    const UserLogout = async () => {
        try {
            const res = await userLogout();
            // console.log(res);
            if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
                console.log(res);
                navigat('/')
            }
        } catch (error) {
            console.log("error", error);
        }
    }

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
        <nav className="navbar navbar-expand-lg navbar-light navbar_user">
            <div className="container-fluid">
                <Link to={'/home'} >
                    <Image src={Logo} className="nav_Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                        <li className="nav-item">
                            <Link to="/home" style={{ color: 'white' }} className="nav-link me-4" aria-current="page" >
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-between">
                        <Row className='row' >
                            <Col>
                                <Link to='/userinfo' class="dropdown-item dropdown_item_user"><FontAwesomeIcon icon={faUser} className='icone icone_User' /> {userData.fristName} </Link>
                            </Col>
                            <Col onClick={() => { UserLogout() }} >
                                <Link class="dropdown-item dropdown_item_user"><FontAwesomeIcon icon={faRightFromBracket} className='icone icone_User' />Log out</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarUser
