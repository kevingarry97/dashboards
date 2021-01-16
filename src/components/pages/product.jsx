import React from 'react';
import { ArrowDownward, Facebook, Instagram, LocationCity, Mail, Phone, ShoppingBasket, Twitter } from '@material-ui/icons';
import Navbar from '../common/navbar';
import { Helmet } from 'react-helmet';
import Form from '../common/form';
import Joi from 'joi-browser';
import { getAllProducts, getProductToOrder } from '../../services/productService';
import { viewAllBranches } from '../../services/branchService';
import { getCurrentUser } from '../../services/auth';
import { orderingProduct } from '../../services/orderService';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import SuccessMessage from '../common/successMessage';

class Product extends Form {
    state = {  
        data: {quantity: ''},
        productId: null,
        errors: {},
        products: [],
        branches: [],
        selectedProduct: null,
        open: false,
        user: null,
        orders: null,
        error: ''
    }

    schema = {
        quantity: Joi.string().required().label("Quantity")
    }

    async populateProduct() {
        const {data} = await getAllProducts();
        this.setState({products: data['all_products']});
    }

    handleSelect = (item) => {
        this.setState({selectedProduct: item});
    }

    async populateBranches () {
        const {data} = await viewAllBranches();
        const branches = [{id: "", name: "All Branches"}, ...data];
        this.setState({branches});
        
    }

    async componentDidMount() {
        this.setState({user: getCurrentUser()});
        await this.populateProduct();
        await this.populateBranches();
    }

    doSubmit = async (id) => {
        const {data} = await orderingProduct(id, this.state.data);
        this.setState({error: data.message});
        // this.props.history.push('/checkOut');
    }

    getData = () => {
        const {products, selectedProduct} = this.state;
        let filtered = products;

        if(selectedProduct && selectedProduct.id)
            filtered = products.filter(m => m.branch_id == selectedProduct.id);

        return { filtered };
    }

    render() { 
        const { branches, selectedProduct, open, orders} = this.state;
        const { filtered } = this.getData();

        return (
            <div>
                <Helmet>
                    <title>Products</title>
                    <meta name="description" content="Awesome description" />
                </Helmet>
                <Navbar />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-3">
                        <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="float-left mt-2">
                                            <h6 className="text-muted font-weight-bold">CHOOSE NEAREST BRANCH</h6>
                                        </div>
                                        <div className="float-right">
                                            <ArrowDownward style={{ fontSize: 19, color: '#0BB783'}} />
                                        </div>
                                    </div>
                                            
                                    <nav className="nav flex-column mt-4">
                                        {branches.map((item) => (
                                            <a key={item.id} style={{ color: "#677788"}} key={item.id} className={item === selectedProduct ? "nav-link font-weight-bold" : "nav-link"} style={{ cursor: 'pointer', color: '#677788'}} onClick={() => this.handleSelect(item)}>{item.name}</a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {filtered.map(d => (
                                    <div key={d.title} className="col-md-4 my-3">
                                        <div className="card border-0 shadow cards">
                                            <img src={d.product.imageUrl} height="200" alt=""/>
                                            <div className="card-body">
                                                <div className="clearfix mt-4">
                                                    <small className="font-weight-bold float-right" style={{ color: "#0BB783"}}>Rwf {d.product.unit_price}</small>
                                                    <h4 className="font-weight-bold text-muted text-center mb-4 float-left">{d.product.name}</h4>
                                                </div>
                                                <form>
                                                    <div className="clearfix">
                                                        <div className="float-left">
                                                            {this.renderInput('quantity', 'Quantity', '')}
                                                        </div>
                                                        <button disabled={this.validate()} className="btn btn-block btn-sm font-weight-bold py-2" style={{ backgroundColor: '#727CF5', color: '#fff', borderRadius: 20}} onClick={() => this.doSubmit(d.product.id)}>
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer mt-4">
                    <div style={{ backgroundColor: "#06265B"}}>
                        <div className="container text-white py-4 pt-5">
                            <div className="row">
                                <div className="col-md-7">
                                    <h5 className="font-weight-bold mb-2">TOKA TRANDING <br/>
                                        INTERNATIONAL Ltd
                                    </h5>
                                    <p className="font-weight-light mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Expedita possimus nihil, deleniti corporis earum architecto 
                                    consectetur vel dicta soluta cum est ipsa esse quae sint eum 
                                    ut reiciendis eos necessitatibus!</p>
                                    <div className="media my-2">
                                        <LocationCity />
                                        <div className="media-body pl-2">
                                            <small>KG 567 St, Nyarugenge, Kigali - Rwanda </small>
                                        </div>
                                    </div>
                                    <div className="media my-2">
                                        <Phone />
                                        <div className="media-body pl-2">
                                            <small>+250 782 385 784 </small>
                                        </div>
                                    </div>
                                    <div className="media my-2">
                                        <Mail />
                                        <div className="media-body pl-2">
                                            <small>tokaltd@trading.com </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <h5 className="font-weight-bold mb-2 pl-4">PAGES</h5>
                                    <ul class="list-group list-group-flush mb-3">
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>HOME</a>
                                        </li>
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>PRODUCTS</a>
                                        </li>
                                        <li class="list-group-item" style={{ backgroundColor: 'transparent'}}>
                                            <a>CONTACT US</a>
                                        </li>
                                    </ul>
                                    <Facebook style={{ fontSize: 25, marginLeft: 15}} />
                                    <Twitter style={{ fontSize: 25, marginLeft: 15}} />
                                    <Instagram style={{ fontSize: 25, marginLeft: 15}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{backgroundColor: '#042150'}}>
                        <small className="text-white">© All rights reserved. Made by 2020 - 2021</small>
                    </div>
                </div>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle id="form-dialog-title">
                        My Cart
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>Below are items that you have selected.</small> 
                    </DialogTitle>
                    <DialogContent>
                        <div className="card border-0 shadow mb-4">
                            <div className="card-body">
                                
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <tbody>
                                            {orders && <tr key={orders?.id}>
                                                <td>
                                                <small style={{ color: '#6C757D'}}> #{orders?.product_id}</small>
                                                </td>
                                                <td>
                                                    <img src={orders?.product.imageUrl} width={50} alt="" style={{ borderRadius: '50%'}} />
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{orders?.product.name}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>
                                                        <strong>{orders?.product.unit_price}</strong>
                                                        <br/>
                                                        Per Qty
                                                    </small>
                                                    
                                                </td>
                                                <td>
                                                    {this.state.error && <SuccessMessage message={this.state.error} className="alert-success" />}
                                                    <form onSubmit={this.handleSubmit}>
                                                        {this.renderInput('quantityToOrder', 'Quantity')}
                                                        {this.renderButton('Add to Cart')}
                                                    </form>
                                                </td>
                                            </tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}
 
export default Product;