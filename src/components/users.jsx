import React from 'react';
import Joi from 'joi-browser';
import Clearfix from './common/clearfix';
import Form from './common/form';
import UserTable from './common/usersTable';
import { ViewBranch } from '../store/branch';
import { addManager } from '../store/manager';
import { connect } from 'react-redux';
import SuccessMessage from './common/successMessage';

class Users extends Form {
    state = { 
        data: { names: '', phone_no: '', email: '', password: '', password_confirmation: '', branchId: ''},
        errors: {},
    }

    schema = {
        names: Joi.string().required().label('Names'),
        phone_no: Joi.string().required().label('Phone No'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
        password_confirmation: Joi.string().required().label('Confirm Password'),
        branchId: Joi.string().required().label('Branch')
    }

    componentDidMount() {
        this.props.ViewBranch();
    }
    

    doSubmit = () => {
        this.props.addManager(this.state.data);
        console.log(this.state.data);
        this.setState({data:{ names: '', phone_no: '', email: '', password: '', password_confirmation: '', branchId: ''}})
    }

    render() { 
        return (  
            <div className="row">
                <div className="col-md-7">
                    <div className="card border-0">
                        <div className="card-body">
                            <h4 style={{ color: '#6C757D'}}>Create a new branch Manager: </h4>
                            <p style={{ color: '#6C757D'}}>Below are fields to create a new user </p>
                            <SuccessMessage message="User create successfully" />
                            <form onSubmit={this.handleSubmit} className="mt-4">
                                {this.renderInput('names', 'e.g: John Doe', '', 'Full names')}
                                <div className="row">
                                    <div className="col-md-6">
                                        {this.renderInput('phone_no', 'e.g: 2507......', '', 'Phone')}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderInput('email', 'e.g: johnDoe@gmail.com', '', 'Email')}
                                    </div>
                                </div>
                                {this.props.branch && this.renderSelect('branchId', 'Branch', this.props.branch)}
                                <div className="row">
                                    <div className="col-md-6">
                                        {this.renderInput('password', '......', '', 'Password', 'password')}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderInput('password_confirmation', '......', '', 'Confirm Password', 'password')}
                                    </div>
                                </div>
                                {this.renderButton('Create account')}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <Clearfix title="Branch manager" />
                            <UserTable />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    branch: state.entities.branches.list.branches
});

const mapDispatchToProps = dispatch => ({
    ViewBranch: () => dispatch(ViewBranch()),
    addManager: (manager) => dispatch(addManager(manager))
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);