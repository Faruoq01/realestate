import React from 'react';
import '../../styles/Home.scss';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import instagram from '../../images/instagram.png';
import youtube from '../../images/youtube.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className="header">
            <div className="social-row">
                <div className="row-container">
                    <div className="contents">
                        <div className="social-icon">
                            <div className="icons">
                                <img style={{width:'25px', height:'25px'}} src={facebook} alt="facebook" />
                                <img style={{width:'25px', height:'25px'}} src={twitter} alt="facebook" />
                                <img style={{width:'25px', height:'25px'}} src={linkedin} alt="facebook" />
                                <img style={{width:'25px', height:'25px'}} src={instagram} alt="facebook" />
                                <img style={{width:'25px', height:'25px'}} src={youtube} alt="facebook" />
                            </div>
                        </div>
                        <div className="logo">
                            <div style={{fontWeight:'bolder'}}>REAL ESTATE MANAGER</div>
                            <div style={{fontSize:'11px'}}>New real estate IT support company.</div>
                        </div>
                        <div className="phone-number">
                            <div>
                                +2347067462329
                            </div>
                        </div>
                    </div>
                    <div className="empty"></div>
                </div>
            </div>
            <div className="menu-row">
                <div className="menu-container">
                    <NavLink className="nav" to="/">
                        <div>Home</div>
                    </NavLink> 
                    <NavLink className="nav" to="/">
                        <div>Services</div>
                    </NavLink> 
                    <NavLink className="nav" to="/">
                        <div>AboutUs</div>
                    </NavLink> 
                    <NavLink className="nav" to="/">
                        <div>Gallery</div>
                    </NavLink> 
                    <NavLink className="nav" to="/">
                        <div>FAQ</div>
                    </NavLink> 
                    <NavLink className="nav" to="/">
                        <div>Contact</div>
                    </NavLink> 
                </div>
            </div>
        </div>
    )
}

export default Header;