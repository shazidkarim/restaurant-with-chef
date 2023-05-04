/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Container>
                <footer className='bg-primary text-white py-3'>
                    <Row>
                        <Col md={4}>
                            <h4 className='ms-2'>About Chef Recipe</h4>
                            <p className='ms-2'>The main factors that make our food so popular around the world are its quality, simplicity, health benefits, affordability, variety and taste</p>
                        </Col>
                        <Col md={4}>

                            <ul className='list-unstyled'>
                                <li><Link className='text-dark' to='/home'>Home</Link></li>
                                <li><Link className='text-dark' to='/home'>About Us</Link></li>
                                <li><Link className='text-dark' to='/home'>Recipes</Link></li>
                                <li><Link className='text-dark' to='/home'>Contact Us</Link></li>
                            </ul>

                        </Col>
                        <Col md={4}>
                            <h4>Contact Us</h4>
                            <p>123 Main Street<br />New York, NY 10001<br />Phone: (123) 456-7890<br />Email: info@chefrecipe.com</p>
                        </Col>
                    </Row>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;