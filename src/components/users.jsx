import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import UserTable from './common/usersTable';
import * as Manager from '../services/managerService';
import * as Branch from '../services/branchService';
import SuccessMessage from './common/successMessage';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import CustomerTable from './common/customerTable';

class Users extends Form {
    state = {
        open: false,
        pageSize: 2,
        currentPage: 1,
        data: { names: '', phone_no: '', email: '', password: '', password_confirmation: '', branchId: ''},
        errors: {},
        error: '',
        managers: [],
        branches: [],
    }

    schema = {
        names: Joi.string().required().label('Names'),
        phone_no: Joi.string().required().label('Phone No'),
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
        password_confirmation: Joi.string().required().label('Confirm Password'),
        branchId: Joi.string().required().label('Branch')
    }

    async populateBranch() {
        const { data } = await Branch.getBranch();
        this.setState({ branches: data['branches']});
        console.log(data);
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    handlePageChange = page => {
        this.setState({ currentPage: page});
    }

    async componentDidMount() {
        await this.populateBranch();
        const { data } = await Manager.viewManager();
        this.setState({ managers: data['branch Managers'] });
    }

    doSubmit = async () => {
        try {
            const response = await Manager.registerManager(this.state.data);
            this.setState({error: response.data.message});
            this.setState({data:{ names: '', phone_no: '', email: '', password: '', password_confirmation: '', branchId: ''}})
        } catch (error) {
            console.log('Error Message:', error.message);
        }
        
    }

    render() { 
        const { currentPage, pageSize, managers } = this.state;
        const users = paginate(managers, currentPage, pageSize);

        return (  
            <>
                <div className="row">
                    <div className="col-md-7">
                        <div className="card border-0">
                            <div className="card-body">
                                <button className="btn btn-sm mx-2" onClick={this.handleOpen} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                                    <Add style={{ fontSize: 18}} /> Create Manager
                                </button>
                                <UserTable users={users} />
                                <Pagination itemsCount={managers.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6 className="font-weight-bold text-muted">View Customers</h6>
                                <CustomerTable />
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        <h4 style={{ color: '#6C757D'}}>Create a new branch Manager: </h4>
                        <p style={{ color: '#6C757D'}}>Below are fields to create a new user </p>
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
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
                            {this.renderSelect('branchId', 'Branch', this.state.branches)}
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
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default Users;