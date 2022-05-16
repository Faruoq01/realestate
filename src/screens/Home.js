import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';
import ServiceSection from '../components/Home/ServiceSection';
import RealEstate from '../components/Home/RealEstate';
import face from '../images/face.png';
import twitt from '../images/twitt.png';
import insta from '../images/insta.png';
import linked from '../images/linked.png';
import home from '../images/home.png';
import trust from '../images/trust.png';
import finances from '../images/finances.png';
import supports from '../images/supports.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';

const Home = () => {

    const AgentCard = () => {
        return(
            <div className="agent-card">
                <div className="top">
                    <div className="social-media">
                        <div>
                            <img style={{width:'20px', height:'20px'}} src={face} alt="icon" />
                        </div>
                        <div>
                            <img style={{width:'25px', height:'25px'}} src={twitt} alt="icon" />
                        </div>
                        <div>
                            <img style={{width:'20px', height:'20px'}} src={insta} alt="icon" />
                        </div>
                        <div>
                            <img style={{width:'20px', height:'20px'}} src={linked} alt="icon" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="agent-name">Engr. Aminu Umar Faruk</div>
                    <div className="agent-title">Real Estate Agent</div> 
                </div>
            </div>
        )
    }
    
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <HeroArea />
            <ServiceSection />
            <RealEstate />
            <div className="why-us">
                <h1>Why Choose Us</h1>
                <div className="reason">We offer a perfect real estate services.</div>
            </div>
            <div className= "why-details">
                <div className="details-container">
                    <div className="one">
                        <img style={{width:'80px', height:'80px'}} src={home} alt="icon" />
                        <h3>Find your home</h3>
                        <div className="reason">We offer a perfect real estate services.</div>
                    </div>
                    <div className="two">
                        <img style={{width:'80px', height:'80px'}} src={trust} alt="icon" />
                        <h3>Find your home</h3>
                        <div className="reason">We offer a perfect real estate services.</div>
                    </div>
                    <div className="three">
                        <img style={{width:'80px', height:'80px'}} src={finances} alt="icon" />
                        <h3>Find your home</h3>
                        <div className="reason">We offer a perfect real estate services.</div>
                    </div>
                    <div className="four">
                        <img style={{width:'80px', height:'80px'}} src={supports} alt="icon" />
                        <h3>Find your home</h3>
                        <div className="reason">We offer a perfect real estate services.</div>
                    </div>
                </div>
            </div>
            <div className="agents-container">
                <div className="estate-title">
                    <div className="first">MEET OUR</div>
                    <div className="second">AGENTS</div>
                </div>
                <div className="agent-grid">
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                </div>
            </div>
            <div className="footer">
                <div className="footer-menu">
                    <div className="footer-menu-container">
                        <div>Home</div>
                        <div>Services</div>
                        <div>AboutUs</div>
                        <div>Galllery</div>
                        <div>FAQ</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className="email-contact">
                    <input type="email" placeholder="Email" className="email-input" />
                    <button className="email-button">SEND</button>
                </div>
                <div className="join">Join Us</div>
                <div className="footer-social" >
                    <img style={{width:'30px', height:'30px'}} src={facebook} alt="icon" />
                    <img style={{width:'30px', height:'30px'}} src={twitter} alt="icon" />
                    <img style={{width:'30px', height:'30px'}} src={linkedin} alt="icon" />
                    <img style={{width:'30px', height:'30px'}} src={instagram} alt="icon" />
                    <img style={{width:'30px', height:'30px'}} src={youtube} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Home;