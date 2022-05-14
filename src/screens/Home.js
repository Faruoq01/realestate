import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';
import ServiceSection from '../components/Home/ServiceSection';

const Home = () => {
    
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <HeroArea />
            <ServiceSection />
            <div className="estate-section">
                
            </div>
        </div>
    )
}

export default Home;