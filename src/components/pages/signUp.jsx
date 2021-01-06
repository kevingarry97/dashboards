import React from 'react';
import {Helmet} from 'react-helmet';
import { Email, LockOpen, Person, Phone } from '@material-ui/icons';
import SignUpIcon from '../../assets/images/signUp.svg';
import '../css/signIn.css'
import { Link } from 'react-router-dom';
import Form from '../common/form';
import Joi from 'joi-browser';
import { register } from '../../services/userService';
import SuccessMessage from '../common/successMessage';

class SignUp extends Form {
    state = {  
        data: {names: '', phone_no: '', email: '', password: '', password_confirmation: ''},
        errors: {},
        error: ''
    }

    schema = {
        names: Joi.string().required().label('Names'),
        phone_no: Joi.string().required().label('Phone'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
        password_confirmation: Joi.string().required().label('Confirm Password')
    }

    doSubmit = async () => {
        const {data} = await register(this.state.data);
        this.setState({error: data.message});
        this.setState({data: {names: '', phone_no: '', email: '', password: '', password_confirmation: ''}});
    }

    render() { 
        return (
            <>
            <Helmet>
                <title>Sign Up</title>
                <meta name="description" content="Awesome description" />
            </Helmet>
            <section className="signInSection">
                <div className="signUpCircle"></div>
                <div className="container pt-md-5">
                    <div className="row mt-md-5">
                        <div className="col-md-6 text-center mt-md-5">
                            <h2 className="text-muted mb-5">Sign up</h2>
                            {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('names', 'Full names', <Person />)}
                                {this.renderInput('phone_no', 'Phone number', <Phone />, '', 'number')}
                                {this.renderInput('email', 'Email', <Email />, '', 'email')}
                                {this.renderInput('password', 'Password', <LockOpen />, '', 'password')}
                                {this.renderInput('password_confirmation', 'Password Confirm', <LockOpen />, '', 'password')}
                                {this.renderButton('Sign Up')}
                            </form>
                            <div className="mt-4">
                                <h6>Or Sign in with social platforms</h6>
                                <div className="socialMedia">
                                    <a className="socialMedia-icon">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a className="socialMedia-icon">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-2 text-center mt-md-0 mt-5">
                            <h2 className="text-white my-3">One of us ?</h2>
                            <p style={{ color: '#fff', fontWeight: '600' }}>Velit iure autem repudiandae? Magni recusandae non enim officia veritatis.</p>
                            <Link to="/signIn" className="btn btn-block font-weight-bold py-2 mt-3 mb-5" style={{ color: '#fff', borderStyle: 'solid', borderWidth: 3, borderColor: '#fff', borderRadius: 30}}>Sign In</Link>
                            <div className="pt-5 mt-5 d-none d-md-block">
                                <img src={SignUpIcon} className="img-fluid my-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default SignUp;