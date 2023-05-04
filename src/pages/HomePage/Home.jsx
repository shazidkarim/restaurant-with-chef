/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import ChefDetails from '../../components/ChefDetails/ChefDetails';
import Footer from '../../components/Footer/Footer';
import OurJourney from '../../components/OurJourney/OurJourney';
import WelcomeBanner from '../../components/welcomeBanner/WelcomeBanner';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <WelcomeBanner></WelcomeBanner>
            <ChefDetails></ChefDetails>
            <OurJourney></OurJourney>
            <Footer></Footer>
        </div>
    );
};

export default Home;