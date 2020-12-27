import React from 'react';
import { Add, AssignmentTurnedIn, InsertDriveFile, MoreHoriz } from '@material-ui/icons';
import Clearfix from './common/clearfix';
import ChartPie from './common/chartPie';
import BarCharts from './common/barChart';

const Overview = () => {
    return (
        <div className="row my-3">
            <div className="col-xl-9 col-lg-7 my-2">
                <div className="card border-0">
                    <div className="card-body">
                        <div className="clearfix mb-4">
                            <aside className="float-left">
                                <h6 className="mb-0" style={{ color: '#6c757d', fontWeight: '600'}}>PROJECTIONS VS ACTUALS</h6>
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
                            <div className="d-flex justify-content-center mt-5">
                                <BarCharts width={900} height={380} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-5 my-2">
                    <div className="card border-0">
                        <div className="card-body">
                            <Clearfix title="Active Branches" />
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
    );
}

export default Overview;