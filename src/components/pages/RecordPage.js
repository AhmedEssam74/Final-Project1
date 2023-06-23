import { faCirclePlay, faCloudArrowUp, faMicrophone, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavbarUser from '../navbareHome/NavbarUser'
import axios from 'axios'
import { uploadRecord } from '../services/api'

const RecordPage = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleRecordSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('record', selectedFile);

      const res = await uploadRecord(formData);
      console.log("res", res);

      // axios.post('http://localhost:5000/api/result', formData)
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log(error, "Error");
      //   });

    } catch (error) {
      console.log(error, "Error");
    }
  };



  return (
    <>
      <NavbarUser />
      <Container>
        <Row>
          <Row className='my-5 d-flex justify-content-center'>
            <Col lg={8} md={8} xs={8}>
              <h3 className='text-center'>Record The voice or upload it</h3>
              <div className='text-center my-4'>
                <span >
                  <FontAwesomeIcon className='icone_record' icon={faMicrophone} />
                </span>
              </div>
            </Col>
          </Row>
          {/* <Row className='d-flex'>
            <Col lg={4} md={4} xs={4} className='text-center'>
              <FontAwesomeIcon className='user_icone_record' icon={faCloudArrowUp} />
            </Col>
            <Col lg={4} md={4} xs={4} className='text-center'>
              <FontAwesomeIcon className='user_icone_record' icon={faCirclePlay} />
            </Col>
            <Col lg={4} md={4} xs={4} className='text-center'>
              <FontAwesomeIcon className='user_icone_record' icon={faTrash} style={{ color: '#ec0909' }} />
            </Col>
          </Row> */}
          <Row className='d-flex justify-content-center'>
            <Col lg='5'>
              <form onSubmit={handleRecordSubmit}>
                <input className='record_input' type="file" accept="audio/*" onChange={handleFileChange} />
                <button class="button-29" type="submit">Upload</button>
              </form>
            </Col>
          </Row>

        </Row>
      </Container>
    </>
  )
}

export default RecordPage
