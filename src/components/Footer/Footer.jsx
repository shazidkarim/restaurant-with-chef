/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <footer className='bg-primary text-white py-3'>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Chef Recipe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed lacus vel mi fermentum feugiat. Fusce hendrerit elit elit, vel rutrum augue pulvinar vel.</p>
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className='list-unstyled'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Recipes</a></li>
              <li><a href='#'>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <p>123 Main Street<br />New York, NY 10001<br />Phone: (123) 456-7890<br />Email: info@chefrecipe.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
        </div>
    );
};

export default Footer;