/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from '../../assets/recipe 1.jpg';
import bannerImg2 from '../../assets/recipe2.jpg';
import bannerImg3 from '../../assets/recipe3.webp'
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
       <Container>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={bannerImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our first meal</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-100 img-fluid"
          src={bannerImg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Our delicious pizza</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 img-fluid"
          src={bannerImg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Most selling item</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </Container>
    );
};

export default Banner;