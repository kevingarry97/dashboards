import React from 'react';
import { Add, InsertDriveFile } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import SuccessMessage from './successMessage';
import Form from './form';
import Joi from 'joi-browser';
import { getProduct } from '../../services/productService';

class ReceivedTable extends Form {
    state = {  
        data: { receivedQuantity: '', damagedQuantity: '', product_id: ''},
        open: false,
        error: '',
        errors: {}
    }

    schema = {
        receivedQuantity: Joi.string().required().label('Received'),
        damagedQuantity: Joi.string().required().label('Damaged'),
        product_id: Joi.string().required().label('Product')
    }

    async populateProducts() {
        const {data} = await getProduct();
        console.log(data);
    }

    handleOpen = () => {
        this.setState({ open: true});
    }

    handleClose = () => {
        this.setState({ open: false});
    }

    async componentDidMount() {
        await this.populateProducts();
    }
    

    render() { 
        return (
            <>
                <div className="clearfix">
                    <div className="float-left">
                        <h6 className="text-muted mb-0">Recieved Products</h6>
                        <p className="text-muted mt-0"><small>Provide us any expense to of your branch</small></p>
                    </div>
                    <div className="float-right">
                        <button className="btn btn-sm mx-1" onClick={this.handleOpen} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                            <Add style={{ fontSize: 18}} /> Create
                        </button>
                        <button className="btn btn-sm mx-1" style={{ backgroundColor: '#fff', color: '#0BB783'}}>
                            <InsertDriveFile style={{ fontSize: 18}} /> Reports
                        </button>
                    </div>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Save received
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add to a branch Expenses.</small> 
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <DialogContent className="mb-4 font-weight-bold">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('receivedQuantity', 'Received', '', 'Received', 'number')}
                                {this.renderInput('damagedQuantity', 'Damaged', '', 'Damaged', 'number')}
                                <div className="mt-4"></div>
                                <small className="text-muted mx-2">Record what's received to the branch by pressing below: </small>
                                <div className="mt-2"></div>
                                {this.renderButton('Save')}
                            </form>
                        </DialogContent>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}
 
export default ReceivedTable;