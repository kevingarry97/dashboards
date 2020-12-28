import React from 'react';
import Navbar from '../navbar';
import P1 from '../../assets/images/v1.svg';
import P2 from '../../assets/images/v2.svg';
import P3 from '../../assets/images/v3.svg';
import '../css/navbar.css';

const Home = () => {
    return (
        <>
            <div className="bg-image"></div>
            <Navbar />
            <div className="pt-5">
                <div className="container pt-5">
                    <div className="row pt-5">
                        <div className="col-md-5 mt-5">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="img-fluid" src={P1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src={P2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="img-fluid" src={P3} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                        <div className="col-md-7">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;