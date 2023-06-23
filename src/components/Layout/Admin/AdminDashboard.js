import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg="2" style={{ backgroundColor: "#3282B8" }} >
                    <AdminSidebar />
                </Col>
                <Col lg="10">
                    <Row>
                        <Col>
                            <AdminNavbar />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminDashboard
