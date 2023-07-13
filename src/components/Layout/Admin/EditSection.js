import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getCard } from '../../services/api';

const EditSection = () => {
    const { id } = useParams();
    // const [cards, setCards] = useState([])
    const nameRef = useRef()
    const sectionTextRef = useRef()
    const imageRef = useRef()

    const sendUserDataToApi = () => {
        console.log({
            name: nameRef.current.value,
            sectionText: sectionTextRef.current.value,
            image: imageRef.current.value,
        })
    }

    const getAll = async () => {
        try {
            const res = await getCard();
            console.log(res)
            nameRef.current.value = res.data.response.name
            sectionTextRef.current.value = res.data.response.sectionText
            imageRef.current.value = res.data.response.image

            // setCards(res.data.response)
        } catch {
            console.error("Erorr")
        }
    }

    useEffect(() => {
        console.log('card id:', id);
        getAll();
    }, [])

    return (
        <Container className='mt-4'>
            <Row className='d-flex justify-content-center'>
                <Col lg='10' md='10' sm='10' className='p-3 users_Blok'>
                    <Form onClick={() => { sendUserDataToApi() }}  >
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title"
                                ref={nameRef}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="discription">
                            <Form.Label>Discription</Form.Label>
                            <Form.Control type="text" placeholder="Enter discription"
                                ref={sectionTextRef}
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image Url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </Form.Group> */}
                        <Form.Group className='mb-3'>
                            <label htmlFor="file-upload" className="custom-file-upload">
                                Choose Image
                            </label>
                            <input className='image_file' id="file-upload" type="file" accept='image/*' ref={imageRef} />
                            {/* <button onClick={handleUploadClick}>Upload</button> */}
                        </Form.Group>
                        <Button style={{ backgroundColor: '#0d6ef', border: 'none' }} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditSection
