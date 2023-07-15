import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { deleteresult, getResult, refreshToken } from '../../services/api'
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Rateing from './rateing';

const UserResult = () => {
    const [results, setResult] = useState([]);

    const getResultData = async () => {
        const res = await getResult();
        setResult(res.data.response)
        // console.log(res.data.response);
    }

    const DeleteResult = async (id) => {
        try {
            const res = await deleteresult(id).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    getResultData()
                }
            })
            console.log(res);
        } catch (error) {
            console.error('Error', error)
        }
    }

    const CallRefresh = async () => {
        const res = await refreshToken()
        console.log(res);
    }

    useEffect(() => {
        getResultData()
        setInterval(CallRefresh, 840000)
    }, [])

    const renderResult = results.map((result) => (
        <>
            <Row className='justify-content-between overflow-hidden' key={result.id} >
                <Col lg='3' md='3' sm='3' >
                    <h6>
                        {result.name}
                    </h6>
                </Col>
                <Col className='d-flex ustify-content-center' lg='2' md='2' sm='2'>
                    {/* <h6>
                        {result.rate}
                    </h6> */}
                    <Rateing value={3} />
                </Col>
                <Col lg='2' md='2' sm='2'>
                    <h6>
                        {result.createdAt}
                    </h6>
                </Col>
                <Col lg='2' md='2' sm='2' className='d-flex justify-content-start'>
                    <h6>
                        <Link to={result.pdfUrl} style={{ textDecoration: 'none' }} >
                            <FaFilePdf />
                            PDF
                        </Link>
                    </h6>
                </Col>
                <Col lg='2' md='2' sm='2' className='d-flex justify-content-start'>
                    <Button >
                        <FontAwesomeIcon icon={faTrash} onClick={() => { DeleteResult(result.id) }} />
                    </Button>
                </Col>
            </Row >
            <hr className='mt-3' />
        </>
    ))

    return (
        <>
            <Col lg='8' md='8' sm='12' className='User_Dash_Bord mb-4 '>
                <Row className='p-3 mt-4'>
                    <Row className='d-flex justify-content-between mb-2'>
                        <Col lg='3' md='3' sm='12'>
                            <h6>File Name</h6>
                        </Col>
                        <Col lg='2' md='2' sm='12'>
                            <h6>Rate</h6>
                        </Col>
                        <Col lg='2' md='2' sm='12'>
                            <h6>Date</h6>
                        </Col>
                        <Col lg='2' md='2' sm='12'>
                            <h6>
                                View
                            </h6>
                        </Col>
                        <Col lg='2' md='2' sm='12'>
                            <h6>
                                Action
                            </h6>
                        </Col>
                    </Row>
                    <hr />
                    {renderResult}
                </Row>
            </Col>
        </>
    )
}

export default UserResult
