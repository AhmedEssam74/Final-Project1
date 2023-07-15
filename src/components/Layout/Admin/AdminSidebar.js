import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faPen, faRankingStar, faRightFromBracket, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../imags/Logo (2).jpg'
import { adminLogout, refreshToken } from '../../services/api'

const AdminSidebar = () => {
    const navigat = useNavigate('')
    const UserLogout = async () => {
        try {
            const res = await adminLogout();
            // console.log(res);
            if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
                console.log(res);
                navigat('/')
            }
        } catch (error) {
            console.log("error", error);
        }
    }
    const CallRefresh = async () => {
        const res = await refreshToken()
        console.log(res);
    }
    useEffect(() => {
        setInterval(CallRefresh, 840000)
    }, [])

    return (
        <Row className='Admin_Sidebar'>
            <Col lg='12' md='12' sm='12' className='admin_logo'>
                <Link to={'/admin1'} >
                    <Image src={Logo} className="nav_Admin_Logo" />
                </Link>
                <hr />
                <Row>
                    <Col lg='12' md='12' sm='12'>
                        <h4>
                            Dashboard
                        </h4>
                        <ul className='sidebarMenu'>
                            <li>
                                <Link to={'/admin/dashboard'} style={{ textDecoration: 'none' }} >
                                    <Row className='d-flex align-items-center justify-content-around flex-nowrap hvr-grow'>
                                        <Col lg='1' md='1' sm='1' >
                                            <FontAwesomeIcon icon={faUserGroup} className='icon' />
                                        </Col>
                                        <Col lg='10' md='10' sm='10' className='d-flex align-items-end '>
                                            <h5>
                                                Users
                                            </h5>
                                        </Col>
                                    </Row>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/admin/stauts'} style={{ textDecoration: 'none' }}>
                                    <Row className='d-flex align-items-center justify-content-around flex-nowrap hvr-grow'>
                                        <Col lg='1' md='1' sm='1' >
                                            <FontAwesomeIcon icon={faRankingStar} className='icon' />
                                        </Col>
                                        <Col lg='10' md='10' sm='10' className='d-flex align-items-end'>
                                            <h5>
                                                Stauts
                                            </h5>
                                        </Col>
                                    </Row>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/admin/rate'} style={{ textDecoration: 'none' }}>
                                    <Row className='d-flex align-items-center justify-content-around flex-nowrap hvr-grow'>
                                        <Col lg='1' md='1' sm='1' >
                                            <FontAwesomeIcon icon={faStar} className='icon' />
                                        </Col>
                                        <Col lg='10' md='10' sm='10' className='d-flex align-items-end'>
                                            <h5>
                                                Resalts
                                            </h5>
                                        </Col>
                                    </Row>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/admin/editHome'} style={{ textDecoration: 'none' }}>
                                    <Row className='d-flex align-items-center justify-content-around flex-nowrap hvr-grow'>
                                        <Col lg='1' md='1' sm='1' >
                                            <FontAwesomeIcon icon={faPen} className='icon' />
                                        </Col>
                                        <Col lg='10' md='10' sm='10' className='d-flex align-items-end'>
                                            <h5>
                                                Edit Home
                                            </h5>
                                        </Col>
                                    </Row>
                                </Link>
                            </li>
                            <li>
                                <button className='dropdown-item dropdown_item_user' to={'/admin/editHome'} style={{ textDecoration: 'none' }}>
                                    <Row className='d-flex align-items-center justify-content-around flex-nowrap hvr-grow'
                                        onClick={() => { UserLogout() }}>
                                        <Col lg='1' md='1' sm='1' >
                                            <FontAwesomeIcon icon={faRightFromBracket} className='icon' />
                                        </Col>
                                        <Col lg='10' md='10' sm='10' className='d-flex align-items-end '>
                                            <h5>
                                                Log out
                                            </h5>
                                        </Col>
                                    </Row>
                                </button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default AdminSidebar
