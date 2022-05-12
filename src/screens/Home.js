import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';

const Home = () => {
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <HeroArea />
            <div className="stat-section">
                <div className="briefing">
                    <div className="breif-container">

                    </div>
                </div>
                <div className="stats">
                    <div className="stats-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;