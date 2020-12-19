import React from 'react';
import { Add, AssignmentTurnedIn, InsertDriveFile, MoreHoriz } from '@material-ui/icons';
import Charts from './common/chart';
import UserTable from './common/usersTable';

const Overview = () => {
    return (
        <div className="row my-3">
            <div className="col-xl-7 my-2">
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
                                        <h6 class="dropdown-header">Quick actions</h6>
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
                                <Charts width={700} height={340} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 my-2">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="clearfix mb-1">
                                <aside className="float-left">
                                    <h6 className="font-weight-bold" style={{ color: '#6c757d'}}>Popular Users</h6>
                                </aside>
                                <aside className="float-right">
                                    <div className="dropdown">
                                        <a href="" id="dropdownMenuButton" data-toggle="dropdown">
                                            <MoreHoriz style={{ color: '#878d92'}} />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuButton">
                                            <h6 class="dropdown-header">Quick actions</h6>
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
                            <UserTable />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Overview;