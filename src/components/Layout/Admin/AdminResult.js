import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { adminResult, admindeleteresult } from '../../services/api';

const AdminResult = () => {
    const [results, setResult] = useState([]);

    const getResultData = async () => {
        const res = await adminResult();
        setResult(res.data.response)
        // console.log(res.data.response);
    }

    const DeleteResult = async (id) => {
        try {
            const res = await admindeleteresult(id).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    getResultData()
                }
                console.log(res);
            })
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        getResultData()
    }, [])

    const renderResult = results.map((result) => (
        <>
            <Row className='justify-content-between overflow-hidden p-4 pb-0 pt-0' key={result.id} >
                <Col lg='3' md='3' sm='3' >
                    <h6>
                        {result.name}
                    </h6>
                </Col>
                <Col className='d-flex ustify-content-center' lg='2' md='2' sm='2'>
                    <h6>
                        {result.rate}
                    </h6>
                </Col>
                <Col lg='2' md='2' sm='2'>
                    <h6>
                        {result.createdAt}
                    </h6>
                </Col>
                <Col lg='2' md='2' sm='2'>
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
            <hr />
        </>
    ))
    return (
        <Row className='m-1 pt-3 d-flex justify-content-center'>
            <h5 className='mb-3'>
                Rates
            </h5>
            <Col lg='12' md='12' sm='12' className='users_Blok'>
                <Row className='d-flex justify-content-between flex-wrap p-4 pb-0'>
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
            </Col>
        </Row>
    )
}

export default AdminResult
