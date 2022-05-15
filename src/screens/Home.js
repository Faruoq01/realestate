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
                <div style={{marginTop:'30px', border:'3px solid #fff'}}>
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
                <div className="estate-title">
                    <div className="first">RECENT</div>
                    <div className="second">PROPERTIES</div>
                </div>
            </div>
        </div>
    )
}

export default Home;