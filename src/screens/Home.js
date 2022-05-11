import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';

const Home = () => {
    return(
        <div className="container">
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <h2>Affordable Luxury & Residential Homes </h2>
                    <div>
                        Create React App is an officially supported 
                        way to create single-page React applications. 
                        It offers a modern build setup with no configuration.
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder={"Search"} />
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;