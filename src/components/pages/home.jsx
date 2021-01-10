import React from 'react';
import '../css/navbar.css';
import { getAllProducts, getProductToOrder } from '../../services/productService';
import Navbar from '../common/navbar';
import { viewAllBranches } from '../../services/branchService';
import { ArrowDownward, ShoppingBasket, CheckCircle, LocationCity, Phone, Mail, Facebook, Twitter, Instagram } from '@material-ui/icons';
import { Helmet } from 'react-helmet';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { getCurrentUser } from '../../services/auth';
import Form from '../common/form';
import Joi from 'joi-browser';
import { orderingProduct } from '../../services/orderService';
import SuccessMessage from '../common/successMessage';
import P1 from '../../assets/images/c3.jpg';
import P2 from '../../assets/images/c2.jpg';
import '../css/navbar.css';
// import '../css/home.css';

class Home extends Form {
    state = {  
        data: {quantityToOrder: ''},
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
        quantityToOrder: Joi.string().required().label("Quantity")
    }

    handleOpen = async (id) => {
        if(this.state.user === null)
            return this.props.history.push('/signIn');
        this.setState({open: true})
        const {data} = await getProductToOrder(id);
        this.setState({orders: data});
        console.log(this.state.orders)
    }

    handleClose = () => {
        this.setState({open: false});
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

    doSubmit = async () => {
        const {data} = await orderingProduct(this.state.orders.product_id, this.state.data);
        this.setState({error: data.message});
        this.props.history.push('/checkOut');
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
            <>
                <div style={{ backgroundColor: '#F7FAFF'}}>
                    <Helmet>
                        <title>HOME</title>
                        <meta name="description" content="Awesome description" />
                    </Helmet>
                    <Navbar />
                    
                    <div className="container-fluid mt-4">
                        <h4 className="font-weight-bold text-center pt-3">Available Products</h4>
                        <p className="text-center" style={{color: '#677788'}}>All products below are available in the branch allocated</p>
                        <div className="row mt-5">
                            <div className="col-md-3 my-2">
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
                            <div className="col-md-8 my-2">
                                <div className="row">
                                    {filtered.map(d => (
                                        <div key={d.title} className="col-md-4 my-3">
                                            <div className="card border-0 cards">
                                                <img src={d.product.imageUrl} height="250" alt=""/>
                                                <div className="mt-2 card-body">
                                                    <h4 className="font-weight-bold text-muted text-center mb-3 ">{d.product.name}</h4>
                                                    <div className="clearfix">
                                                        <small className="font-weight-bold float-left mt-2" style={{ color: "#0BB783"}}>Rwf {d.product.unit_price}</small>
                                                        <button className="btn btn-sm float-right" style={{ backgroundColor: '#0BB783', color: '#fff'}} onClick={() => this.handleOpen(d.product.id)}>
                                                            <ShoppingBasket style={{ fontSize: 18}} /> Add Cart
                                                        </button>
                                                    </div>
                                                    
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
            </>
        );
    }
}
 
export default Home;