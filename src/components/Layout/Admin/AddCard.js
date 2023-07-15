import React from 'react'
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../../services/api';

const AddCard = () => {
    const [name, setName] = useState('');
    // const [image, setImage] = useState('');
    const [SectionText, setSectionText] = useState('');
    const [image, setImage] = useState('');

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // handleUploadClick()
        console.log(name, image, SectionText);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('Image', image);
        formData.append('SectionText', SectionText);

        addCard(formData).then((res) => {
            if (res.status === 201 || res.status === 200) {
                navigate('/admin/editHome')
            }
        })
    }

    const handleFileInputChange = (e) => {
        setImage(e.target.files[0]);
    };

    // const handleUploadClick = () => {
    //     // Here you can make an API call to upload the selected file
    //     console.log(image);
    // };




    return (
        <Container className='mt-4'>
            <Row className='d-flex justify-content-center'>
                <Col lg='10' md='10' sm='10' className='p-3 users_Blok'>
                    <Form onSubmit={onSubmitHandler} >
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="discription">
                            <Form.Label>Discription</Form.Label>
                            <Form.Control type="text" placeholder="Enter discription"
                                value={SectionText}
                                onChange={(e) => setSectionText(e.target.value)} />
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
                            <input className='image_file' id="file-upload" type="file" accept='image/*' onChange={handleFileInputChange} />
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

export default AddCard