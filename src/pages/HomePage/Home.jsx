/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ChefDetails from '../../components/ChefDetails/ChefDetails';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <ChefDetails></ChefDetails>
            <Footer></Footer>
        </div>
    );
};

export default Home;