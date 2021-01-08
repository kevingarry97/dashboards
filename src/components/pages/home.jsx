import React, { useEffect, useState } from 'react';
import v1 from '../../assets/images/p1.jpg';
import C1 from '../../assets/images/c1.jpg';
import C3 from '../../assets/images/c3.jpg';
import P2 from '../../assets/images/p3.jpg';
import C2 from '../../assets/images/c2.jpg';
import P3 from '../../assets/images/products.jpg';
import '../css/navbar.css';
import { getAllProducts } from '../../services/productService';
import Navbar from '../common/navbar';
import { viewAllBranches } from '../../services/branchService';
import { ArrowDownward, ShoppingBasket } from '@material-ui/icons';
import { Helmet } from 'react-helmet';

const DATA = [
    {
        img: C1,
        title: 'Rice',
        price: '400',
        branch_id: 1
    },
    {
        img: v1,
        title: 'Flavour',
        price: '500',
        branch_id: 2
    },
    {
        img: C3,
        title: 'Coffee',
        price: '800',
        branch_id: 3
    },
    {
        img: P2,
        title: 'Beans',
        price: '1200',
        branch_id: 4
    },
    {
        img: C2,
        title: 'Fruits',
        price: '900',
        branch_id: 5
    },
    {
        img: P3,
        title: 'HandCraft',
        price: '1000',
        branch_id: 6
    },
];


const Home = () => {
    const [products, setProducts] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    async function populateProduct () {
        const {data} = await getAllProducts();
        setProducts(data['all_products']);
    }

    const handleSelect = (item) => {
        setSelectedProduct(item)
    }

    async function populateBranches () {
        const {data} = await viewAllBranches();
        setBranches([{id: "", name: "All Branches"}, ...data]);
    }

    useEffect(() => {
        populateProduct();
        populateBranches();
    },[]);

    const getData = () => {
        console.log(products)
        let filtered = DATA;

        if(selectedProduct && selectedProduct.id)
            filtered = DATA.filter(m => m.branch_id == selectedProduct.id);

        return { filtered };
    } 

    const { filtered } = getData();
    return (
        <div style={{ backgroundColor: '#F7FAFF'}}>
            <Helmet>
                <title>HOME</title>
                <meta name="description" content="Awesome description" />
            </Helmet>
            <Navbar />
            <div className="container-fluid mt-5">
                <h4 className="font-weight-bold text-center">Available Products</h4>
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
                                        <a key={item.id} style={{ color: "#677788"}} key={item.id} className="nav-link" onClick={() => handleSelect(item)}>{item.name}</a>
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
                                        <img src={d.img} className="img-fluid" alt=""/>
                                        <div className="mt-2 card-body">
                                            <h4 className="font-weight-bold text-muted text-center mb-3 ">{d.title}</h4>
                                            <div className="clearfix">
                                                <small className="font-weight-bold float-left mt-2" style={{ color: "#0BB783"}}>Rwf {d.price}</small>
                                                <button className="btn btn-sm float-right" style={{ backgroundColor: '#0BB783', color: '#fff'}}>
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
    );
}

export default Home;