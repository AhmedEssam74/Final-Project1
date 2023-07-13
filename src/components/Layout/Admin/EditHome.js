import React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { deltecard, getCard } from '../../services/api'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const EditHome = () => {
    const [cards, setCards] = useState([])

    const renderCards = cards.map((card, index) => (
        <Row key={card.id} className='d-flex justify-content-between p-4' >
            <Col lg='1' md='1' sm='1'>
                <h6>
                    {index + 1}
                </h6>
            </Col>
            <Col lg='2' md='2' sm='2'>
                <Image style={{ width: '100px', height: '100px' }} className='rounded-circle' src={card.imageUrl} alt='image' />
            </Col>
            <Col lg='2' md='2' sm='2'>
                <h6>
                    {card.name}
                </h6>
            </Col>
            <Col lg='4' md='3' sm='3'>
                <h6>
                    {card.sectionText}
                </h6>
            </Col>
            <Col lg='2' md='2' sm='2'>
                <Row className='d-flex justify-content-between'>
                    <Col lg='3' md='3' sm='3'>
                        <Button as={Link} to={'/admin/addcard'}>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <Button>
                            <FontAwesomeIcon icon={faPen} />
                        </Button>
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <Button onClick={() => { DeletedCard(card.id) }}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    ))
    const DeletedCard = async (id) => {
        try {
            const res = await deltecard(id).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    getAll()
                }
                console.log(res);
            })
        } catch (error) {
            console.log(error, 'Error');
        }
    }

    const getAll = async () => {
        try {
            const res = await getCard();
            setCards(res.data.response)
        } catch {
            console.error("Erorr")
        }
    }

    useEffect(() => {
        getAll();
    }, [])


    return (
        <Container>
            <Row className='pt-4'>
                <h5 className='mb-3'>
                    Cards List
                </h5>
                <Col className='users_Blok'>
                    <Row className='d-flex justify-content-between p-4 pb-0'>
                        <Col lg='1' md='1' sm='1'>
                            <h6>
                                Id
                            </h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <h6>
                                Image
                            </h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <h6>
                                Title
                            </h6>
                        </Col>
                        <Col lg='4' md='3' sm='3'>
                            <h6>
                                Paragraph
                            </h6>
                        </Col>
                        <Col lg='2' md='2' sm='2'>
                            <h6>
                                Actions
                            </h6>
                        </Col>
                    </Row>
                    <hr />
                    {renderCards}
                </Col>
            </Row>
        </Container>
    )
}

export default EditHome
