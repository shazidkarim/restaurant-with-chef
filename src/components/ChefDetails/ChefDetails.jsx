/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

const ChefDetails = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        const fetchChefs = async () => {
            try {
                const res = await fetch('http://localhost:5000/chef');
                const data = await res.json();
                setChefs(data?.chefs);
            } catch (error) {
                console.log(error);
            }
        };
        fetchChefs();
    }, []);

    console.log(chefs);
    return (
        <div>
            <h1>This is chef details</h1>
            {
                chefs && chefs.map(chef => <div key={chef.id}>
                    <Container>
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>)
            }
        </div>
    );
};

export default ChefDetails;
