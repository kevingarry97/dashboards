import React from 'react';
import { LockOpen, Person } from '@material-ui/icons';
import SignUp from '../../assets/images/signUp.svg';
import '../css/signIn.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <section className="signInSection">
            <div className="signInCircle"></div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 text-center mt-md-5">
                        <h2 className="text-white my-md-3">New User ?</h2>
                        <p style={{ color: '#fff', fontWeight: '600' }}>Magni recusandae aliquam rem illum reiciendis eum. Ratione reprehenderit fuga in tempore, velit iure autem repudiandae? Magni recusandae non enim officia veritatis.</p>
                        <Link to="/signUp" className="btn btn-block font-weight-bold py-2" style={{ color: '#fff', borderStyle: 'solid', borderWidth: 3, borderColor: '#fff', borderRadius: 30}}>Sign Up</Link>
                        <div className="pt-5 mt-5 d-none d-md-block">
                            <img src={SignUp} className="img-fluid my-2" />
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-3 text-center mt-5 pt-5">
                        <h2 className="text-muted mt-5 mb-5">Sign in</h2>
                        <form>
                            <div className="form-group">
                                <Person />
                                <input type="text" placeholder="Names" className="form-control" />
                            </div>
                            <div className="form-group">
                                <LockOpen />
                                <input type="password" placeholder="Password" className="form-control" />
                            </div>
                            <Link to="/admin" className="btn btn-block font-weight-bold py-2" style={{ backgroundColor: '#727CF5', color: '#fff', borderRadius: 20}}>Sign In</Link>
                        </form>
                        <div className="mt-4">
                            <h6>Or Sign in with social platforms</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>     
    );
}

export default SignIn;