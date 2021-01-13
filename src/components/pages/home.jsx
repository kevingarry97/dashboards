import React from 'react';
import Navbar from '../common/navbar';
import { Helmet } from 'react-helmet';
import Form from '../common/form';
import P1 from '../../assets/images/c3.jpg';
import HeroSection from '../../assets/images/section Hero-min.png';
import P2 from '../../assets/images/c2.jpg';
import '../css/navbar.css';

class Home extends Form {

    render() {
        return (
            <>
                <div style={{ backgroundColor: '#F7FAFF'}}>
                    <Helmet>
                        <title>HOME</title>
                        <meta name="description" content="Awesome description" />
                    </Helmet>
                    <section className="hero__section">
                        <Navbar />
                        <div className="container py-5">
                            <div className="row my-4">
                                <div className="col-lg-6 mt-5">
                                    <h4 className="hero__heading">TOKA TRADING <br/> INTERNATION Ltd</h4>
                                    <p className="text-muted mb-4">We import goods from nearly countries and distribute <br/> them to our different country stores</p>
                                    <button className="btn hero__button px-4" style={{ borderRadius: 50}}>Join Now</button>
                                </div>
                                <div className="col-lg-6">
                                    <img src={HeroSection} className="img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> 
            </>
        );
    }
}
 
export default Home;