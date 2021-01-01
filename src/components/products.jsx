import React from 'react';
import Joi from 'joi-browser'
import ProductTable from './common/productTable';
import Clearfix from './common/clearfix';
import Form from '../components/common/form';
import { addProduct, getProduct } from '../services/productService';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';

class Products extends Form {
    state = {
        pageSize: 2,
        currentPage: 1,
        data: {name: '', quantity: '', unitPrice: '', imageUrl: ''},
        errors: {},
        products: []
    }

    schema = {
        name: Joi.string().required().label('Names'),
        quantity: Joi.string().required().label('Quantity'),
        unitPrice: Joi.string().required().label('Unit Price'),
        imageUrl: Joi.string().required().label('Image')
    }

    async componentDidMount() {
        const { data } = await getProduct();
        this.setState({ products: data['products']});
    }
    
    handlePageChange = page => {
        this.setState({ currentPage: page});
    }

    doSubmit = async () => {
        const {data} = await addProduct(this.state.data);
        console.log(data)
        this.setState({data: {name: '', quantity: '', unitPrice: '', imageUrl: ''}})
    }

    render() {
        const { currentPage, pageSize, products } = this.state;
        const prods = paginate(products, currentPage, pageSize);

        return (  
            <>
                <div className="row">
                    <div className="col-lg-5 col-sm-6 my-2">
                        <div className="card border-0">
                            <div className="card-body">
                                <Clearfix title="All Products" />
                                <ProductTable products={prods} />
                                <Pagination itemsCount={products && products.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-6 my-2">
                        <div className="card border-0">
                            <div className="card-body">
                                <h4 className="font-weight-normal" style={{ color: "#777", marginBottom: 15 }}>Create a Product</h4>
                                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
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