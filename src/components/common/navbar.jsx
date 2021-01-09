import React, {useState} from 'react';
import { AccountCircle, CheckCircle, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Navbar = ({handleOpen}) => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <div className="collapse navbar-collapse homeNavbar" id="navbarNav">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="mx-2" onClick={handleOpen}>
                                    <ShoppingBasket style={{ color: '#0BB783'}} />
                                </a>
                                <Link to="/signIn" className="mx-1">
                                    <AccountCircle style={{ color: '#0BB783'}} /> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;