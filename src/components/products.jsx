import React from 'react';
import Joi from 'joi-browser'
import ProductTable from './common/productTable';
import Clearfix from './common/clearfix';
import Form from '../components/common/form';

class Products extends Form {
    state = {
        data: {name: '', quantity: '', unitPrice: '', imageUrl: ''},
        errors: {}
    }

    schema = {
        name: Joi.string().required().label('Names'),
        quantity: Joi.string().required().label('Quantity'),
        unitPrice: Joi.string().required().label('Unit Price'),
        imageUrl: Joi.string().required().label('Image')
    }

    doSubmit = () => {
        console.log(this.state.data);
        this.setState({data: {name: '', quantity: '', unitPrice: '', imageUrl: ''}})
    }

    render() { 
        return (  
            <>
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <Clearfix title="All Products" />
                                <ProductTable />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-6">
                        <div className="card border-0">
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    {this.renderInput('name', 'Product name', '', 'Product name')}
                                    <div className="row">
                                        <div className="col-md-6">
                                            {this.renderInput('quantity', 'Quantity', '', 'Total Qty', 'number')}
                                        </div>
                                        <div className="col-md-6">
                                            {this.renderInput('unitPrice', 'Unit Price', '', 'Unit price', 'number')}
                                        </div>
                                    </div>
                                    {this.renderImage('imageUrl', 'Choose Image')}
                                    <div className="my-3">
                                        {this.renderButton('Create Product')}
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>         
            </>
        );
    }
}

export default Products;