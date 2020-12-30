import React from 'react';
import Joi from 'joi-browser'
import Form from '../common/form';
import { Link } from 'react-router-dom';
import { LockOpen, Phone } from '@material-ui/icons';
import SignUp from '../../assets/images/signUp.svg';
import { login } from '../../services/auth';
import '../css/signIn.css'

class SignIn extends Form {
    state = { 
        data: { phone_no: '', password: ''},
        errors: {}
    }

    schema = {
        phone_no: Joi.string().required().label('Phone'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await login(data.phone_no, data.password);
      
            this.props.history.push("/admin");
            this.setState({data: {phone_no: '', password: ''}});
          } catch (ex) {
            if (ex.response && ex.response.status === 400) {
              const errors = { ...this.state.errors };
              errors.phone_no = ex.response.data;
              this.setState({ errors });
            }
        }
    }
    render() { 

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
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('phone_no', 'Phone number', <Phone />)}
                                {this.renderInput('password', 'Password', <LockOpen />, '', 'password')}
                                {this.renderButton('Sign In')}
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
                    </div>
                </div>
            </section> 
        );
    }
}

export default SignIn;