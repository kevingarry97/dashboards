import React from 'react';
import { Email, Facebook, LockOpen, Person, Phone } from '@material-ui/icons';
import SignUpIcon from '../../assets/images/signUp.svg';
import '../css/signIn.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <section className="signInSection">
            <div className="signUpCircle"></div>
            <div className="container pt-md-5">
                <div className="row mt-md-5">
                    <div className="col-md-6 text-center mt-md-5">
                        <h2 className="text-muted my-5">Sign up</h2>
                        <form>
                            <div className="form-group">
                                <Person />
                                <input type="text" placeholder="Names" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Email />
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <Phone />
                                <input type="text" placeholder="Phone number" className="form-control" />
                            </div>
                            <div className="form-group">
                                <LockOpen />
                                <input type="password" placeholder="Password" className="form-control" />
                            </div>
                            <Link to="/admin" className="btn btn-block font-weight-bold py-2" style={{ backgroundColor: '#727CF5', color: '#fff', borderRadius: 20}}>Sign In</Link>
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
                    <div className="col-md-4 offset-md-2 text-center">
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
    );
}

export default SignUp;