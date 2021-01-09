import React from 'react';
import '../css/navbar.css';
import { getAllProducts, getProductToOrder } from '../../services/productService';
import Navbar from '../common/navbar';
import { viewAllBranches } from '../../services/branchService';
import { ArrowDownward, ShoppingBasket, CheckCircle } from '@material-ui/icons';
import { Helmet } from 'react-helmet';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { getCurrentUser } from '../../services/auth';
import Form from '../common/form';
import Joi from 'joi-browser';
import { orderingProduct } from '../../services/orderService';
import SuccessMessage from '../common/successMessage';

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
                    <Navbar handleOpen={this.handleOpen} />
                    <section className="bg-white py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <h4 className="font-weight-bold" style={{ color: '#0BB783'}}>TOKA TRADING Ltd,</h4>
                                    <p className="text-muted pt-2" style={{ fontSize: 15, lineHeight: '1.8em'}}>We import goods and beverages, from neighbouring <br/> 
                                    countries and sell them to our local country 
                                    </p>
                                    <button className="btn px-3 py-2" style={{ backgroundColor: "#0BB783", color: "#fff"}}>Get Started</button>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                </div>
                            </div>
                        </div>
                    </section>
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
                                        <div key={d.title} className="col-lg-3 col-md-4 my-3">
                                            <div className="card border-0">
                                                <img src={d.product.imageUrl} className="img-fluid" alt=""/>
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
                    <div className="footer mt-4 pb-2">
                        <div className="container text-center">
                            <small className="text-muted">© All rights reserved. Made by 2020 - 2021</small> 
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
                                    <table className="table">
                                        <tbody>
                                            <tr key={orders?.id}>
                                                <td>
                                                <small style={{ color: '#6C757D'}}>{orders?.branch_id}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{orders?.branch.name}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{orders?.branch.location}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{orders?.product_id}</small>
                                                </td>
                                                <td>
                                                    {this.state.error && <SuccessMessage message={this.state.error} className="alert-success" />}
                                                    {orders && <form onSubmit={this.handleSubmit}>
                                                        {this.renderInput('quantityToOrder', 'Quantity')}
                                                        {this.renderButton('Order now')}
                                                    </form>}
                                                </td>
                                            </tr>
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