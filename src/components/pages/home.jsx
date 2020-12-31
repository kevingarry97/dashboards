import React from 'react';
import Navbar from '../navbar';
import P1 from '../../assets/images/v1.svg';
import v1 from '../../assets/images/p1.jpg';
import C1 from '../../assets/images/c1.jpg';
import C3 from '../../assets/images/c3.jpg';
import P2 from '../../assets/images/p3.jpg';
import C2 from '../../assets/images/c2.jpg';
import P3 from '../../assets/images/products.jpg';
import '../css/navbar.css';
import { ArrowRightAlt } from '@material-ui/icons';

const DATA = [
    {
        img: C1,
        title: 'Rice',
        price: '400'
    },
    {
        img: v1,
        title: 'Flavour',
        price: '500'
    },
    {
        img: C3,
        title: 'Coffee',
        price: '800'
    },
    {
        img: P2,
        title: 'Beans',
        price: '1200'
    },
    {
        img: C2,
        title: 'Fruits',
        price: '900'
    },
    {
        img: P3,
        title: 'HandCraft',
        price: '1000'
    },
]

const Home = () => {
    return (
        <>
            <div className="bg-image"></div>
            <Navbar />
            <div className="pt-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-5 mt-2">
                            <img src={P1} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-6 offset-md-1 text-white mt-5">
                            <h1>Our Company</h1>
                            <p className="py-3">Sed officiis dolorum nihil saepe, atque facilis veritatis quas beatae fugit odio eius aliquid quisquam suscipit! Dolorem eaque eligendi laudantium molestias temporibus.</p>
                            <button className="btn font-weight-bold text-white py-1 border">
                                Get Started &nbsp;
                                <ArrowRightAlt />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className="text-center text-muted">Our Products</h2>
                <div className="row mt-5 pt-3">
                    {DATA.map(d => (
                        <div className="col-md-3 my-3">
                            <div className="card">
                                <img src={d.img} className="img-fluid" alt=""/>
                            </div>
                            <div className="text-center mt-2">
                                <h4 className="font-weight-bold text-muted">{d.title}</h4>
                                <small className="font-weight-bold" style={{ color: "#727CF5"}}>Rwf {d.price}</small>
                            </div>
                        </div>
                    ))}
                    
                </div>
                
            </div>
            <div className="footer mt-4 mb-2">
                <div className="container text-center">
                    <small className="text-muted">© All rights reserved. Made by 2020 - 2021</small> 
                </div>
            </div>
        </>
    );
}

export default Home;