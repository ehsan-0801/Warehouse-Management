import React from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import Watches from '../Watches/Watches';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Watches></Watches>
            <Stats></Stats>
        </div>
    );
};

export default Home;