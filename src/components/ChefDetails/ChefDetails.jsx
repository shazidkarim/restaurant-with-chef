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
            <h1 className='text-center text-primary'>Meet our chefs</h1>
            {
                chefs && chefs.map(chef => <div key={chef.id}>
                    <Container>
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src={chef.picture} />
                                        <Card.Body>
                                            <Card.Title> <h1>Name : {chef.name}</h1></Card.Title>
                                            <Card.Text>
                                                <h6>experience:{chef.yearsOfExperience} year</h6>
                                                <h6>total receipt:{chef.numRecipes}</h6>
                                                <p>total likes:{chef.likes}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <button className='btn btn-primary'><Link to={`/recipe/${chef.id}`} className='btn btn-primary'>view recipe</Link>
                                            </button>
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
