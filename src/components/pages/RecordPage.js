import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarUser from '../navbareHome/NavbarUser'
import { uploadRecord } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'

const RecordPage = () => {
  const navigat = useNavigate()
  const [recordFile, setRecordFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleFileChange = (e) => {
    setRecordFile(e.target.files[0]);
  };

  const handleRecordSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append('record', recordFile);
      setIsLoading(true);

      const res = await uploadRecord(formData);
      if ((res.status === 200 || res.status === 201) && res.statusText === "OK") {
        // console.log("res", res);
        setIsLoading(false);
        // alert('Record detected succefully')
        navigat('/userLastResult')
      }

    } catch (error) {
      console.log(error, "Error");
      setIsLoading(false);
    }
  };



  return (
    <>
      <NavbarUser />
      <Container>
        <Row>
          <Row className='my-5 d-flex justify-content-center'>
            <Col lg={8} md={8} xs={8}>
              <h3 className='text-center'>Upload Your Record Here</h3>
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
          {isLoading && (
            <div className='loading'>
              <Circles
                className='mb5'
                type="Puff"
                color="#00BFFF"
                height={'100%'}
                width={'100%'}
                visible={true}
              />
            </div>
          )}
          <Row className='d-flex justify-content-center'>
            <Col lg='6' md='6' sm='6'>
              <form onSubmit={handleRecordSubmit} className='d-flex justify-content-around'>
                <label htmlFor="file-upload" className="custom-file-uploaded  button-66">
                  Choose File
                </label>
                <input className='record_input' id="file-upload" type="file" accept="audio/*" onChange={handleFileChange} />
                <button className="button-66" type="submit">Upload</button>
              </form>
              {/* <Form.Group onSubmit={handleRecordSubmit} className='mb-3'>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Choose File
                </label>
                <input className='image_file' id="file-upload" type="file" onChange={handleFileChange} />
                <button class="button-29" type="submit">Upload</button>
              </Form.Group> */}
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default RecordPage
