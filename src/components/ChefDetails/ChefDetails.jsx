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
                const res = await fetch('https://b7a10-chef-recipe-hunter-server-side-shazidkarim-shazidkarim.vercel.app/chef');
                const data = await res.json();
                setChefs(data?.chefs);
            } catch (error) {
                console.log(error);
            }
        };
        fetchChefs();
    }, []);

    return (
        <div>
            <h1 className='text-center text-primary mt-5 mb-4'>Meet our chefs</h1>
            <Container>
  <Row xs={1} md={2} className="g-4">
    {chefs.map((chef) => (
      <Col key={chef.id}>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={chef.picture} />
            <Card.Body>
              <Card.Title>
                <h1>Name: {chef.name}</h1>
              </Card.Title>
              <Card.Text>
                <h6>Experience: {chef.yearsOfExperience} year</h6>
                <h6>Total Receipt: {chef.numRecipes}</h6>
                <p>Total Likes: {chef.likes}</p>
              </Card.Text>
              <button className="btn btn-primary">
                <Link
                  to={`/recipe/${chef.id}`}
                  className="btn btn-primary"
                >
                  View Recipe
                </Link>
              </button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    ))}
  </Row>
</Container>
        </div>
    );
};

export default ChefDetails;
