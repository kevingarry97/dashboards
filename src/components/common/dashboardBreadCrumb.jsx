import React from 'react';
import { Add, Refresh } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Joi from 'joi-browser';
import Form from './form';
import { addBranch } from '../../services/branchService';

class DashboardBreadCrumb extends Form {
    state = {
        data: { branchName: '', branchLocation: ''},
        errors: {},
        open: false
    }

    schema = {
        branchName: Joi.string().required().label('Branch name'),
        branchLocation: Joi.string().required().label('Branch Location'),
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    doSubmit = async () => {
        const {data} = await addBranch(this.state.data);
        console.log(data);
        this.setState({data: { branchName: '', branchLocation: ''}})
    }

    render() { 
        const {open} = this.state;
        return (
            <div style={{ marginTop: -35}}>
                <div className="clearfix mt-md-0 mt-5">
                    <aside className="float-left">
                        <small style={{ color: '#98AECB', fontSize: 11}}>OVERVIEW</small>
                        <h5 style={{ color: '#6c757d'}}>Dashboard</h5>
                    </aside>
                    <aside className="float-right mt-3">
                        <div className="media">
                            <button className="btn btn-sm font-weight-bold" style={{ backgroundColor: '#0BB783', color: '#fff'}} onClick={this.handleOpen}>
                                <Add /> 
                                Create Branch
                            </button>
                            <a href="" className="ml-3 pt-1 pb-2 px-3 shadow-sm" style={{ backgroundColor: '#0BB783', borderRadius: 5}} onClick={() => window.location = '/'}>
                                <Refresh style={{ color: '#fff', fontSize: 20}} />
                            </a>
                        </div>
                        
                    </aside>
                </div>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        <strong>Branch</strong>
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add a branch.</small> 
                    </DialogTitle>
                    <DialogContent className="m-4 font-weight-bold">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    {this.renderInput('branchName', 'Branch name', '', 'Branch Name')}
                                </div>
                                <div className="col-md-6">
                                {this.renderInput('branchLocation', 'Branch location', '', 'Branch Location')}
                                </div>
                            </div>
                            {this.renderButton('Create Branch')}
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default DashboardBreadCrumb;