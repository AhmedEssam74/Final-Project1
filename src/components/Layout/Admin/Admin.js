import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './AdminSidebar'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg="2" md='2' sm='10' style={{ backgroundColor: "#3282B8" }} >
                    <AdminSidebar />
                </Col>
                <Col lg="10" md='10' sm='10'>
                    {/* <Row>
                        <Col>
                            <AdminNavbar />
                        </Col>
                    </Row> */}
                    <Row className='m-0'>
                        <Outlet />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Admin
