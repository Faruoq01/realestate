import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';
import auction from '../images/auction.png';
import delivery from '../images/delivery.png';
import house from '../images/house.png';
import property from '../images/property.png';

const Home = () => {
    const ServiceCard = (props) => {
        return(
            <div className="main-cont">
                <div className="outer-container">
                    <img style={{width:'50px', height:'50px'}} src={props.img} alt="icon" />
                </div>
                <div className="content">
                    <div style={{fontSize:'12px', fontWeight:'bolder', color:'#0b4545'}}>{props.title}</div>
                    <div style={{fontSize:'10px', color:'#0b4545'}}>{props.content}</div>
                    <div style={{fontSize:'11px', fontWeight:'bolder', color:'#0b4545'}}>{props.view}</div>
                </div>
            </div>
        )
    }
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
                        <ServiceCard 
                            img={auction} 
                            title={"UPCOMING AUCTIONS"} 
                            content={"View our upcoming auction"} 
                            view={"VIEW AUCTIONS"}
                        />
                        <ServiceCard 
                            img={house} 
                            title={"UPCOMING AUCTIONS"} 
                            content={"View our upcoming auction"} 
                            view={"VIEW AUCTIONS"}
                        />
                        <ServiceCard 
                            img={property} 
                            title={"UPCOMING AUCTIONS"} 
                            content={"View our upcoming auction"} 
                            view={"VIEW AUCTIONS"}
                        />
                        <ServiceCard 
                            img={delivery} 
                            title={"UPCOMING AUCTIONS"} 
                            content={"View our upcoming auction"} 
                            view={"VIEW AUCTIONS"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;