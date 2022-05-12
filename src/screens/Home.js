import React, { useState } from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';

const Home = () => {
    const options = [];
    const [values, setValues] = useState();
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <div className="hero">
                <div className="hero-content">
                    <div className="left-hero">first</div>
                    <div className="right-hero">
                        <div className="card-right">
                            <div className="card-content">
                                <div className="property">FIND A PROPERTY</div>
                                <div className="select-div">
                                    <select style={selects}>
                                        <option>Kaduna</option>
                                        <option>Abuja</option>
                                        <option>Lagos</option>
                                    </select>
                                </div>
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
    marginLeft:'10px'
}

export default Home;