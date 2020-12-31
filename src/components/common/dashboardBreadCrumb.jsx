import React, { Component } from 'react';
import { Add, Refresh } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DashboardBreadCrumb extends Component {
    state = {  
        open: false
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    render() { 
        const {open} = this.state;
        return (
            <>
                <div className="clearfix">
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
                            <div className="ml-3 pt-1 pb-2 px-3 shadow-sm" style={{ backgroundColor: '#0BB783', borderRadius: 5}}>
                                <Refresh style={{ color: '#fff', fontSize: 20}} />
                            </div>
                        </div>
                        
                    </aside>
                </div>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Branch
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add a branch.</small> 
                    </DialogTitle>
                    <DialogContentText className="mb-4 font-weight-bold">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6"></div>
                        </div>
                    </DialogContentText>
                </Dialog>
            </>
        );
    }
}

export default DashboardBreadCrumb;