/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ChefDetails from '../../components/ChefDetails/ChefDetails';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <ChefDetails></ChefDetails>
        </div>
    );
};

export default Home;