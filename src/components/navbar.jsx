import React from 'react';
import { Link } from 'react-router-dom';
import { PersonPin } from '@material-ui/icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse homeNavbar" id="navbarNav">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/signIn">
                                <PersonPin />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;