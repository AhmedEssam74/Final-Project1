import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { adminLogout } from '../../services/api'


const AdminNavbar = () => {
    const navigat = useNavigate()
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

    return (
        <Container fluid>
            <Row className='mt-4'>
                <Col lg='6'>
                    <button className='search' type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='me-2' style={{ fontSize: '1.3rem', color: '#3282B8' }} />
                    </button>
                    <input type='text' placeholder='Search' className='search_btn' />
                </Col>
                <Col lg='6' className='d-flex justify-content-end' >
                    <Col lg='4'>
                        <Link style={{ color: '#3282B8' }} class="dropdown-item"><FontAwesomeIcon className='pe-2' icon={faRightFromBracket}
                            onClick={() => { UserLogout() }}
                        />Log out</Link>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminNavbar
