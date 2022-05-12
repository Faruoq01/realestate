import React, { useState } from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';

const Home = () => {
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <div className="left-hero">
                        <div className="hero-text">
                            <h1 className="headText">Specialists in Kaduna apartments and housing investments</h1>
                            <div className="texts">Affordable real estate agent in Kaduna</div>
                            <div className="footerText">Nobody knows Kaduna like we do</div>
                            <div className="buttons-container">
                                <button className="buy">BUY</button>
                                <button className="buy">RENT</button>
                                <button className="buy">SELL</button>
                            </div>
                        </div>
                    </div>
                    <div className="right-hero">
                        <div className="card-right">
                            <div className="card-content">
                                <div className="property">FIND A PROPERTY</div>
                                <div className="select-div">
                                    <input style={searchInput} type="text" placeholder={'Keyword or ID'}/>
                                </div>
                                <div className="select-div">
                                    <select style={selects}>
                                        <option disabled selected hidden >Min price</option>
                                        <option>Abuja</option>
                                        <option>Lagos</option>
                                    </select>
                                </div>
                                <div className="select-div">
                                    <select style={selects}>
                                        <option disabled selected hidden >Max price</option>
                                        <option>Abuja</option>
                                        <option>Lagos</option>
                                    </select>
                                </div>
                                <div className="select-div">
                                    <select style={selects}>
                                        <option disabled selected hidden>Bedrooms</option>
                                        <option>Abuja</option>
                                        <option>Lagos</option>
                                    </select>
                                </div>
                                <button style={{borderRadius:'0px'}} className="search-button">SEARCH</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const selects = {
    width:'90%',
    height:'35px',
    border:'none',
    outline:'none',
    backgroundColor:'rgba(11, 69, 69, 0)',
    color:'#fff',
    marginLeft:'10px',
}

const searchInput = {
    width:'90%',
    height:'25px',
    backgroundColor:'rgba(11, 69, 69, 0)',
    outline:'none',
    border:'none',
    marginLeft:'10px',
    color:'#fff',
}

export default Home;