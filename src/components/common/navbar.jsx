import React, {useEffect, useState} from 'react';
import { AccountCircle, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { viewOrder } from '../../services/orderService';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [orders, setOrders] = useState([])

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
        populateOrder();
    },[]);

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-dark shadow-sm py-2">
                <div className="container">
                    <a className="nav-link text-white font-weight-bold"><h5>TOKA Trading International Ltd</h5></a>
                    <div className="collapse navbar-collapse homeNavbar" id="navbarNav">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="mx-2" onClick={handleOpen}>
                                    <ShoppingBasket style={{ color: '#e6ecea'}} />
                                </a>
                                <Link to="/signIn" className="mx-1">
                                    <AccountCircle style={{ color: '#e6ecea'}} /> 
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
                    
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Navbar;