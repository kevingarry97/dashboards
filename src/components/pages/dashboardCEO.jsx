import React from 'react';
import { Apartment, ArrowUpward, ExitToApp, InsertDriveFile, Visibility } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import DashboardCard from '../common/dashboardCard';
import BarCharts from '../common/barChart';
import ChartPie from '../common/chartPie';

const DashboardCEO = () => {
    return (
        <section className="py-4 px-5" style={{ backgroundColor: '#f7f8fc'}}>
            <div className="container-fluid px-5">
                <div className="clearfix mt-md-0 mt-5">
                    <aside className="float-left">
                        <small style={{ color: '#98AECB', fontSize: 11}}>OVERVIEW</small>
                        <h5 style={{ color: '#6c757d'}}>Dashboard</h5>
                    </aside>
                    <aside className="float-right mt-3">
                        <div className="media">
                            <Link to="/logout" className="btn btn-sm font-weight-bold px-3" style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                                <ExitToApp /> &nbsp;&nbsp;
                                Logout
                            </Link>
                        </div>
                    </aside>
                </div>
                <div className="row mt-4">
                    <div className="col-md-7">
                        <div className="d-flex justify-content-center">
                            <BarCharts width={750} height={380} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-md-6 my-2">
                                <DashboardCard 
                                    average={36}
                                    title="Branches"
                                    symbol={<Apartment style={{ color: '#727CF5'}} />}
                                    percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                    color="#0adf97"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <DashboardCard 
                                    average={36}
                                    title="Branches"
                                    symbol={<Apartment style={{ color: '#727CF5'}} />}
                                    percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                    color="#0adf97"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <DashboardCard 
                                    average={36}
                                    title="Branches"
                                    symbol={<Apartment style={{ color: '#727CF5'}} />}
                                    percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                    color="#0adf97"
                                />
                            </div>
                            <div className="col-md-6 my-2">
                                <DashboardCard 
                                    average={36}
                                    title="Branches"
                                    symbol={<Apartment style={{ color: '#727CF5'}} />}
                                    percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                    color="#0adf97"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6 className="text-muted mb-3">Our Products</h6> 
                                <div className="table-responsive">
                                    <div className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 18, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Per Unit</small>
                                                </td>
                                                <td>
                                                    <small>50</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Quantity</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 13, 500</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Total Price</small>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 18, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Per Unit</small>
                                                </td>
                                                <td>
                                                    <small>50</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Quantity</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 13, 500</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Total Price</small>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 18, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Per Unit</small>
                                                </td>
                                                <td>
                                                    <small>50</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Quantity</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 13, 500</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Total Price</small>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 18, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Per Unit</small>
                                                </td>
                                                <td>
                                                    <small>50</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Quantity</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 13, 500</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Total Price</small>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 18, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Per Unit</small>
                                                </td>
                                                <td>
                                                    <small>50</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Quantity</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 13, 500</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Total Price</small>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mt-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="clearfix">
                                    <div className="float-left mt-1">
                                        <h6 className="text-muted">Our Imports</h6>
                                    </div>
                                    <div className="float-right">
                                        <button className="btn btn-sm"style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                                            <InsertDriveFile style={{ fontSize: 18}} /> &nbsp; Reports
                                        </button>
                                    </div>
                                </div>
                                <div className="table-responsive mt-3">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 12, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Amount</small>
                                                </td>
                                                <td>
                                                    <small>It was imported from Dal Salam</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Description</small>
                                                </td>
                                                <td>
                                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 12, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Amount</small>
                                                </td>
                                                <td>
                                                    <small>It was imported from Dal Salam</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Description</small>
                                                </td>
                                                <td>
                                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 12, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Amount</small>
                                                </td>
                                                <td>
                                                    <small>It was imported from Dal Salam</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Description</small>
                                                </td>
                                                <td>
                                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 12, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Amount</small>
                                                </td>
                                                <td>
                                                    <small>It was imported from Dal Salam</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Description</small>
                                                </td>
                                                <td>
                                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <small style={{ color: '#98AECA'}}># 1</small>
                                                </td>
                                                <td>
                                                    <small>Oil, Beans</small>
                                                </td>
                                                <td>
                                                    <small>Rwf 12, 000</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Amount</small>
                                                </td>
                                                <td>
                                                    <small>It was imported from Dal Salam</small>
                                                    <br/>
                                                    <small style={{ color: '#98AECA'}}>Description</small>
                                                </td>
                                                <td>
                                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <h5 className="text-muted mb-4 text-center">Quality Branch</h5>
                                <ChartPie cx={130} cy={100} />
                                <div className="d-flex justify-content-center">
                                    <span className="mx-3">
                                        <strong style={{ color: '#00C49F', fontSize: 40}}>.</strong>
                                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Rusizi</small> 
                                    </span>
                                    <span className="mx-3">
                                        <strong style={{ color: '#0088FE', fontSize: 40}}>.</strong>
                                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Rubavu</small> 
                                    </span>
                                    <span className="mx-3">
                                        <strong style={{ color: '#FFBB28', fontSize: 40}}>.</strong>
                                            &nbsp; <small style={{ color: '#6C757D', fontSize: 12}}>Kigali</small> 
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
        </section>
    );
}

export default DashboardCEO;