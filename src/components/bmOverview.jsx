import React from 'react';
import ReceivedTable from './common/receivedTable';
import Form from './common/form';
import Joi from 'joi-browser';
import { viewBranchProduct } from '../services/productService';
import { addSubProduct } from '../services/subProduct';
import SuccessMessage from '../components/common/successMessage';

class BmOverview extends Form {
    state = {  
        products: [],
        data: { receivedQuantity: '', damagedQuantity: '', product_id: ''},
        errors: {},
        error: ''
    }

    schema = {
        receivedQuantity: Joi.string().required().label("Received"),
        damagedQuantity: Joi.string().required().label("Damaged"),
        product_id: Joi.string().required().label("Product")
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
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card border-0">
                            <div className="card-body">
                                <ReceivedTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BmOverview;