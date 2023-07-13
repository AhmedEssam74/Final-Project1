import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { getCard } from './services/api'
// import Image from './imags/Image 33.jpg'


const Cards = () => {
    const [cards, setCards] = useState([])

    const renderCards = cards.map((card) => (
        <Col key={card.id} lg='5' md='5' sm='12' className='card_item mt-5'>
            <Card className="card">
                <Card.Img src={card.imageUrl} className="card-img-top px-4 pt-2 " alt="Image_33.jpg" />
                <Card.Body className="card-body">
                    <h5 className="card-title text-center my-4">{card.name}</h5>
                    <p className="card-text">
                        {card.sectionText}
                    </p>
                </Card.Body>
            </Card>
        </Col>
    ))
    


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
        <>
            <Container>
                <Row className='row row_featuer mt-5'>
                    {renderCards}
                </Row>
            </Container>
            <hr />
        </>
    )
}

export default Cards
