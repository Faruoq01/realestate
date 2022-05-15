import React from 'react';
import '../styles/Home.scss';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroArea';
import ServiceSection from '../components/Home/ServiceSection';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    
    return(
        <div className="container">
            <div className="top-level"></div>
            <Header />
            <HeroArea />
            <ServiceSection />
            <div className="estate-section">
                <div className="estate-title">
                    <div className="first">RECENT</div>
                    <div className="second">PROPERTIES</div>
                </div>
                <div style={{marginTop:'20px', border:'3px solid #fff'}}>
                    <Carousel width={'1150px'} showThumbs={false} >
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1611094016919-36b65678f3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1611094016919-36b65678f3d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlYWwlMjBlc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJlYWwlMjBlc3RhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="icon" />
                                <p className="legend">Legend 3</p>
                            </div>
                    </Carousel>
                </div>
                <div className="estate-title2">
                    <div className="first2">POPULAR</div>
                    <div className="second2">PLACES</div>
                </div>
                <div className="thumbnails">
                    <div className="firstGrid">
                        <h2>Unguwar Rimi</h2>
                        <div>203 properties</div>
                    </div>
                    <div className="secondGrid">
                        <h2>Unguwar Sarki</h2>
                        <div>350 properties</div>
                    </div>
                    <div className="thirdGrid">
                        <h2>Isa Kaita</h2>
                        <div>130 properties</div>
                    </div>
                    <div className="fourthGrid">
                        <h2>Unguwar Dosa</h2>
                        <div>400 properties</div>
                    </div>
                </div>
            </div>
            <div className="why-us">

            </div>
            <div className= "why-details">
                <div className="details-container">
                    <div className="one">one</div>
                    <div className="two">two</div>
                    <div className="three">three</div>
                    <div className="four">four</div>
                </div>
            </div>
            <div className="agents-container">
                <div className="estate-title">
                    <div className="first">MEET OUR</div>
                    <div className="second">AGENTS</div>
                </div>
                <div className="agent-grid">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default Home;