import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { deleteUserById, getAllUsers } from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const AdminDashboard = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const res = await getAllUsers();
            setUsers(res.data.response)
            // console.log(res.data.response);
        } catch (error) {
            console.log(error, 'Error');
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await deleteUserById(id).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    getUsers()
                }
            })
            console.log(res);
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    const usersRender = users.map((user, index) => (
        <Row key={user.id} className='p-4 pb-0'>
            <Col lg='1' md='1' sm='1'>
                {index + 1}
            </Col>
            <Col lg='3' md='3' sm='3'>
                <Row>
                    <Col lg='3' md='3' sm='3'>
                        <img src={user.imageId} alt='img' style={{ borderRadius: "50%" }}></img>
                    </Col>
                    <Col lg='9' md='9' sm='9'>
                        <p>
                            {user.fristName}
                        </p>
                    </Col>
                </Row>
            </Col>
            <Col lg='3' md='3' sm='3'>
                <p>
                    {user.email}
                </p>
            </Col>
            <Col lg='2' md='2' sm='2'>
                <p>
                    {user.phone}
                </p>
            </Col>
            <Col lg='2' md='2' sm='2'>
                <p>
                    {user.createdAt}
                </p>
            </Col>
            <Col lg='1' md='1' sm='1'>
                <Button>
                    <FontAwesomeIcon icon={faTrash} onClick={() => { deleteUser(user.id) }} />
                </Button>
            </Col>
            <hr />
        </Row>
    ))



    return (
        <Row className='m-1 pt-3 d-flex justify-content-center'>
            <h5 className='mb-3'>
                Customers List
            </h5>
            <Col lg='12' md='12' sm='12' className='users_Blok'>
                <Row className='d-flex flex-wrap p-4 pb-0'>
                    <Col lg='1' md='1' sm='1'>
                        <h6>
                            id
                        </h6>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <h6>
                            Name
                        </h6>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <h6>
                            E-mail
                        </h6>
                    </Col>
                    <Col lg='2' md='2' sm='2'>
                        <h6>
                            Phone
                        </h6>
                    </Col>
                    <Col lg='2' md='2' sm='2'>
                        <h6>
                            Joined at
                        </h6>
                    </Col>
                    <Col lg='1' md='1' sm='1'>
                        <h6>
                            Action
                        </h6>
                    </Col>
                </Row>
                <hr />
                {usersRender}
            </Col>
        </Row>
    )
}

export default AdminDashboard
