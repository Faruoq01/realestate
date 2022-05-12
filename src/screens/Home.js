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
                        <div className="brief-mid">
                            <div className="brief-title">Kaduna Metrapolis is our neighbourhood</div>
                            <div className="paragh1">
                                City sales was established in 1997 by prominent Kaduna real estate figure
                                Aminu Faruk. City sales was kadunas' leading specialist agent, providing
                                expert consultations and representations regarding apartment sales, property
                                management and housing investment.
                            </div>
                            <div className="paragh1">
                                City sales was established in 1997 by prominent Kaduna real estate figure
                                Aminu Faruk. City sales was kadunas' leading specialist agent, providing
                                expert consultations and representations regarding apartment sales, property
                                management and housing investment.
                            </div>
                            <div className="download">
                                DOWNLOAD THE CITY SALES APARTMENT REPORT 
                            </div>
                            <div className="download">
                                DOWNLOAD THE CITY SALES APARTMENT REPORT 
                            </div>
                        </div>
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