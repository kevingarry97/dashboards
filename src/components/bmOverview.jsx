import React from 'react';
import ReceivedTable from './common/receivedTable';
import Form from './common/form';
import Joi from 'joi-browser';
import { viewBranchProduct } from '../services/productService';
import { addSubProduct } from '../services/subProduct';
import SuccessMessage from '../components/common/successMessage';
import { Add } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

class BmOverview extends Form {
    state = {  
        products: [],
        data: { receivedQuantity: '', damagedQuantity: '', product_id: ''},
        errors: {},
        error: '',
        open: false
    }

    schema = {
        receivedQuantity: Joi.string().required().label("Received"),
        damagedQuantity: Joi.string().required().label("Damaged"),
        product_id: Joi.string().required().label("Product")
    }

    handleOpen = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false});
    }

    async populateProducts() {
        const {data} = await viewBranchProduct();
        this.setState({products: data['Products']});
    }

    async componentDidMount() {
        await this.populateProducts();
    }
    
    doSubmit = async () => {
        const {data} = await addSubProduct(this.state.data);
        this.setState({error: data['message']});
        this.setState({data: { receivedQuantity: '', damagedQuantity: '', product_id: ''}})
    }

    render() { 
        return ( 
            <div>
                <div className="row my-3">
                    <div className="col-lg-5">
                        <div className="card border-0 card-body">
                            
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left">
                                        <h6 className="text-muted mb-0">New Distribution</h6>
                                        <p className="text-muted mt-0"><small>Provide us any expense to of your branch</small></p>
                                    </div>
                                    <div className="float-right">
                                        <button className="btn btn-sm mx-1" style={{ backgroundColor: '#0BB783', color: '#fff'}} onClick={this.handleOpen}>
                                            <Add style={{ fontSize: 18}} /> Note Receivables
                                        </button>
                                    </div>
                                </div>
                                <ReceivedTable handleOpen={this.handleOpen} />
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        Note the received Products
                    </DialogTitle>
                    <DialogContent className="pb-4">
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-success" />}
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('receivedQuantity', 'Received', '', 'Received', 'number')}
                            {this.renderInput('damagedQuantity', 'Damaged', '', 'Damaged', 'number')}
                            {this.renderSelect('product_id', 'Product', this.state.products)}
                            <div className="mt-4"></div>
                            <small className="text-muted mx-2">Record what's received to the branch by pressing below: </small>
                            <div className="mt-2"></div>
                            {this.renderButton('Save')}
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
 
export default BmOverview;