import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import Navbar from '../common/navbar';
import { Facebook, Instagram, LocationCity, Mail, Phone, Twitter } from '@material-ui/icons';

class Contact extends Form {
    state = {  
        data: { names: '', email: '', phone: '', message: ''},
        errors: {}
    }

    schema = {
        names: Joi.string().required().label('Names'),
        email: Joi.string().required().label('Email'),
        phone: Joi.string().required().label('Phone'),
        message: Joi.string().required().label('Message'),
    }

    doSubmit = () => {
        console.log(this.state.data);
        this.setState({names: '', email: '', phone: '', message: ''})
    }

    render() { 
        return (
            <div className="hero__section">
                <Navbar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h3 className="hero__heading">CONTACT US</h3>
                            <p className="text-muted">We will reply to you as soon as we possibly can. <br/> The average response time is 24 h.</p>
                            <ul class="nav flex-column mt-4">
                                <li class="nav-item">
                                    <h6 className="text-muted py-2">info@gmail.com</h6>
                                </li>
                                <li class="nav-item">
                                    <h6 className="text-muted py-2">(+250) 784 283 473</h6> 
                                </li>
                                <li class="nav-item">
                                    <h6 className="text-muted py-2" style={{ fontSize: 15}}>KK 564 St, Kigali-Rwanda</h6>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h5 className="text-muted mb-4">Fill up the form</h5>
                                    <form onSubmit={this.handleSubmit}>
                                        {this.renderInput('names', 'Full Names', '', 'Names')}
                                        {this.renderInput('email', 'Email', '', 'Email', 'email')}
                                        {this.renderInput('phone', 'Phone', '', 'Names')}
                                        {this.renderTextArea('message', 'Message')}
                                        {this.renderButton('CONTACT US')}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer mt-4">
                    <div style={{ backgroundColor: "#06265B"}}>
                        <div className="container text-white py-4 pt-5">
                            <div className="row">
                                <div className="col-md-7">
                                    <h5 className="font-weight-bold mb-2">TOKA TRANDING <br/>
                                        INTERNATIONAL Ltd
                                    </h5>
                                    <p className="font-weight-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Expedita possimus nihil, deleniti corporis earum architecto 
                                    consectetur vel dicta soluta cum est ipsa esse quae sint eum 
                                    ut reiciendis eos necessitatibus!</p>
                                    <div className="media my-2">
                                        <LocationCity />
                                        <div className="media-body pl-2">
                                            <small>KG 567 St, Nyarugenge, Kigali - Rwanda </small>
                                        </div>
                                    </div>
                                    <div className="media my-2">
                                        <Phone />
                                        <div className="media-body pl-2">
                                            <small>+250 782 385 784 </small>
                                        </div>
                                    </div>
                                    <div className="media my-2">
                                        <Mail />
                                        <div className="media-body pl-2">
                                            <small>tokaltd@trading.com </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <h5 className="font-weight-bold mb-2 pl-4">PAGES</h5>
                                    <ul class="list-group list-group-flush mb-3">
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>HOME</a>
                                        </li>
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>PRODUCTS</a>
                                        </li>
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>CONTACT US</a>
                                        </li>
                                    </ul>
                                    <Facebook style={{ fontSize: 25, marginLeft: 15}} />
                                    <Twitter style={{ fontSize: 25, marginLeft: 15}} />
                                    <Instagram style={{ fontSize: 25, marginLeft: 15}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{backgroundColor: '#042150'}}>
                        <small className="text-white">© All rights reserved. Made by 2020 - 2021</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;