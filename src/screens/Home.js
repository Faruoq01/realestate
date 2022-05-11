import React from 'react';
import '../styles/Home.scss';
import hero from '../images/hero2.jpg';
//left: #d0601c and right #ed3535

const Home = () => {
    return(
        <div className="container">
            <div className="header">Home</div>
            <div className="hero">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Home;