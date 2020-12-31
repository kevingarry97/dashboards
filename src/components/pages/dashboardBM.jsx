import React from 'react';
import { ArrowUpward, Person, Apartment, ArrowDownward, Ballot, MonetizationOn, MoreHoriz, Add, InsertDriveFile, AssignmentTurnedIn } from '@material-ui/icons';
import DashboardCard from '../common/dashboardCard';
import DashboardNavbar from '../common/dashboardNavbar';
import OrderTable from '../common/distributionTable';
import ProductTable from '../common/productTable';
import DashboardIcon from '../../assets/images/dashboard.svg'
import ExpenseTable from '../common/expenseTable';
import ExpenseForm from '../common/expenseForm';
import Charts from '../common/chart';
import BranchProduct from '../common/branchProduct';

const DashboardBM = () => {
    return (
        <>
            <DashboardNavbar path="/logout" bgColor="#181C32" />
            <section className="py-4 px-5" style={{ backgroundColor: '#f7f8fc'}}>
                <div className="container-fluid px-5">
                    <div className="row my-3">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-sm-6 my-2">
                                    <DashboardCard 
                                        average={36}
                                        title="Branches"
                                        symbol={<Apartment style={{ color: '#727CF5'}} />}
                                        percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                        color="#0adf97"
                                    />
                                </div>
                                <div className="col-sm-6 my-2">
                                    <DashboardCard 
                                        average={5}
                                        title="Products"
                                        symbol={<Ballot style={{ color: '#727CF5'}} />}
                                        percentage={<ArrowDownward style={{ fontSize: 18, color: '#fa5c7c', marginTop: 3}} />}
                                        color="#fa5c7c"
                                    />
                                </div>
                                <div className="col-sm-6 my-2">
                                    <DashboardCard 
                                        average={23}
                                        title="Expenses"
                                        symbol={<MonetizationOn style={{ color: '#727CF5'}} />}
                                        percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                        color="#0adf97"
                                    />
                                </div>
                                <div className="col-sm-6 my-2">
                                    <DashboardCard 
                                        average={12}
                                        title="Users"
                                        symbol={<Person style={{ color: '#727CF5'}} />}
                                        percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                        color="#0adf97"
                                    />
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-6">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="clearfix mb-4">
                                        <aside className="float-left">
                                            <h6 className="mb-0" style={{ color: '#6c757d'}}>PROJECTIONS VS ACTUALS</h6>
                                            <small style={{ color: '#B5B6C5', fontSize: 12}}>
                                            </small>
                                        </aside>
                                        <aside className="float-right">
                                            <div className="dropdown">
                                                <a href="" id="dropdownMenuButton" data-toggle="dropdown">
                                                    <MoreHoriz style={{ color: '#6c757d'}} />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuButton">
                                                    <h6 className="dropdown-header">Quick actions</h6>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <Add style={{ color: '#8950FC', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>New Product</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <InsertDriveFile style={{ color: '#FFE5B3', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Generate report</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <AssignmentTurnedIn style={{ color: '#1BC5BD', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Check projects</span> 
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <button className="btn mx-3 my-2 btn-sm" style={{ backgroundColor: '#D7F9EF', color: '#31C397'}}>More actions</button>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Charts width={650} height={280} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-lg-5">
                            <img src={DashboardIcon} className="img-fluid" />
                        </div>
                        <div className="col-lg-7">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h6 className="text-muted">Our Stock</h6>
                                    <BranchProduct />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-lg-7">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="clearfix">
                                        <aside className="float-left">
                                            <h6 className="mb-0" style={{ color: '#6c757d'}}>Orders</h6>
                                            <small style={{ color: '#B5B6C5', fontSize: 12}}>
                                                <strong>
                                                    More than 400+ new Products
                                                </strong>
                                            </small>
                                        </aside>
                                        <aside className="float-right">
                                            <div className="dropdown">
                                                <a href="" id="dropdownMenuButton" data-toggle="dropdown">
                                                    <MoreHoriz style={{ color: '#6c757d'}} />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuButton">
                                                    <h6 className="dropdown-header">Quick actions</h6>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <Add style={{ color: '#8950FC', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>New Product</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <InsertDriveFile style={{ color: '#FFE5B3', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Generate report</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <AssignmentTurnedIn style={{ color: '#1BC5BD', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Check projects</span> 
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <button className="btn mx-3 my-2 btn-sm" style={{ backgroundColor: '#D7F9EF', color: '#31C397'}}>More actions</button>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                                <OrderTable />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="clearfix mb-3">
                                        <aside className="float-left">
                                            <h6 className="font-weight-bold" style={{ color: '#6c757d'}}>EXPENSES</h6>
                                        </aside>
                                        <aside className="float-right">
                                            <div className="dropdown">
                                                <a href="" id="dropdownMenuButton" data-toggle="dropdown">
                                                    <MoreHoriz style={{ color: '#878d92'}} />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuButton">
                                                    <h6 className="dropdown-header">Quick actions</h6>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item my-1" href="#" data-toggle="modal" data-target="#exampleModal">
                                                        <Add style={{ color: '#8950FC', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>New Product</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <InsertDriveFile style={{ color: '#FFE5B3', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Generate report</span> 
                                                    </a>
                                                    <a className="dropdown-item my-1" href="#">
                                                        <AssignmentTurnedIn style={{ color: '#1BC5BD', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Check projects</span> 
                                                    </a>
                                                    <div className="dropdown-divider"></div>
                                                    <button className="btn mx-3 my-2 btn-sm" style={{ backgroundColor: '#D7F9EF', color: '#31C397'}}>More actions</button>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                    <ExpenseTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ExpenseForm />
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
}

export default DashboardBM;