import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import NumRecordAndUsers from './NumRecordAndUsers'
import { getStatusData } from '../../services/api'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const AdminStauts = () => {
  const [statusUserToday, setStatuseUserToday] = useState('')
  const [statusRecordsToday, setStatuseRecordsToday] = useState('')
  const percentageUser = statusUserToday.numberOfUsersCreatedToday ?? 0;
  const percentageRecord = statusRecordsToday.numberOfRcordsCreatedToday ?? 0;


  const AdminStatus = async () => {
    try {
      const res = await getStatusData();
      setStatuseUserToday(res.data.response)
      setStatuseRecordsToday(res.data.response)
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    AdminStatus()
  }, [])


  return (
    <Row className='m-1 pt-3 d-flex'>
      <h5 className='mb-3'>
        Analysis
      </h5>
      <Col lg='12' md='12' sm='12' className='users_Blok'>
        <Row className='d-flex justify-content-around p-4'>
          <Col lg='4' md='6' sm='5' className='text-center status_box p-3' >
            <h5>
              numberOfUsersCreatedToday
            </h5>
            <CircularProgressbar className='porgres' value={percentageUser} text={`${percentageUser}`} />
          </Col>
          <Col lg='4' md='6' sm='5' className='text-center status_box p-3' >
            <h5>
              numberOfRcordsCreatedToday
            </h5>
            <CircularProgressbar className='porgres' value={percentageRecord} text={`${percentageRecord}`} />
          </Col>
        </Row>
        <hr />
        <Row className='d-flex justify-content-start' >
          <Col lg='11' md='11' sm='11'>
            <NumRecordAndUsers />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AdminStauts
