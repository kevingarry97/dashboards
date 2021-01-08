import React, {useState} from 'react';
import { AccountCircle, CheckCircle, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import v1 from '../../assets/images/p1.jpg';
import C1 from '../../assets/images/c1.jpg';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

const DATA = [
    {
        img: C1,
        title: 'Rice',
        price: '400'
    },
    {
        img: v1,
        title: 'Flavour',
        price: '500'
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    }
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="form-dialog-title">
                    My Cart
                    <br/>
                    <small style={{ color: '#C4B7B7'}}>Below are items that you have selected.</small> 
                </DialogTitle>
                <DialogContent>
                    <div className="card border-0 shadow mb-4">
                        <div className="card-body">
                            <p className="text-muted mb-3">There are {DATA.length} elements in the cart : </p>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        {DATA.map(d => (
                                            <tr key={d.title}>
                                                <td>
                                                    <img src={d.img} width="80" alt=""/>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{d.title}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{d.title}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{d.price}</small>
                                                </td>
                                                <td>
                                                    <small style={{ color: '#6C757D'}}>{d.price}</small>
                                                </td>
                                                <td>
                                                    <CheckCircle style={{ color: '#0BB783'}} />
                                                </td>
                                            </tr>
                                        ))}
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

export default Navbar;