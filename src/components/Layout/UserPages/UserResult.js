// import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getResult } from '../../services/api'


const UserResult = () => {

    const [results, setResult] = useState('');

    const renderResult = results.map((result) => (
        <Row className='justify-content-between' key={result.id}>
            <Col lg='3' md='3' sm='3' >
                <h6>
                    {result.name}
                </h6>
            </Col>
            <Col lg='2' md='2' sm='2'>
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
                    {result.pdfUrl}
                </h6>
            </Col>
        </Row>
    ))

    
    const getResultData = async () => {
        const res = await getResult();
        setResult(res.data.response)
        console.log(res.data.response);
    }
    useEffect(() => {
        getResultData()
    }, [])

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
                    </Row>
                    <hr />
                    <Row>
                        {renderResult}
                    </Row>
                    {/* <Row className='justify-content-between '>
                        <Col lg='3' md='3' sm='3'>
                            <h6>Proplem1</h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <h6>Rate</h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <h6>Date</h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <Row>
                                <Col>
                                    <span> <FontAwesomeIcon icon={faDownload} bounce className='fs-5' /> </span>
                                </Col>
                                <Col>
                                    <span><FontAwesomeIcon icon={faTrash} style={{ color: "#e71313" }} className='fs-5' /></span>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                </Row>
            </Col>
        </>
    )
}

export default UserResult
