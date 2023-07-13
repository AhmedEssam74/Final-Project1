import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import Image1 from '../components/imags/main-image.jpg'
import Image2 from '../components/imags/Image 33.jpg'
import Image3 from '../components/imags/Image 31.png'
import { Link } from 'react-router-dom'


const MainSection = () => {

  return (
    <Container fluid className='mt-1'>
      <Row>
        <Col lg='12' md='12' sm='12' >
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className='mb-3'>Started Your Record</h3>
                <Button as={Link} to={'/record'} className="button-6 btn_record" >Get Started</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className='mb-3'>Started Your Record</h3>
                <Button as={Link} to={'/record'} className="button-6 btn_record" >Get Started</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className='mb-3'>Started Your Record</h3>
                <Button as={Link} to={'/record'} className="button-6 btn_record" >Get Started</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default MainSection
