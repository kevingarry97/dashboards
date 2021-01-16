import React, {useEffect, useState} from 'react';
import { AccountCircle, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { viewOrder } from '../../services/orderService';
import { getCurrentUser } from '../../services/auth';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([])
    const user = getCurrentUser();

    async function populateOrder() {
        const {data} = await viewOrder();
        console.log(data);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(user) populateOrder();
    },[]);

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <a className="nav-link font-weight-bold"><h5>TOKA Trading International Ltd</h5></a>
                    <div className="collapse navbar-collapse homeNavbar" id="navbarNav">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {user?.role === 'Customer' && <a className="mx-2" onClick={handleOpen}>
                                    <ShoppingBasket style={{ color: '#e6ecea'}} />
                                </a>}
                                <Link to="/signIn">
                                    <span className="hero__signUp">
                                        Sign In
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    My Orders
                    <br/>
                    <small style={{ color: '#C4B7B7'}}>Below are items that you have selected.</small> 
                </DialogTitle>
                <DialogContent>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                
                            </tbody>
                        </table>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Navbar;