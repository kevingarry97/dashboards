import { Assessment, Assignment, Ballot, ChatBubbleOutline, Face, NewReleases, NotificationsNone, RecentActors, SupervisorAccount } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNavbar({bgColor, path}) {
    return (
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: bgColor}}>
            <div className="container">
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link" href="#" id="newAction" role="button" data-toggle="dropdown">
                                <NewReleases style={{ color: '#98A6AD', fontSize: 30}} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="newAction">
                                <h5 className="dropdown-header text-center">Quick actions</h5>
                                <div className="dropdown-divider"></div>
                                <a className="nav-link" href="">
                                    <div className="media mx-4">
                                        <Assessment style={{ color: '#727CF5', fontSize: 40}} />
                                        <div className="media-body pl-4">
                                            <h6 className="font-weigh-light my-0" style={{color: '#3F4254'}}>Accounting</h6>
                                            <small className="py-0" style={{ color: '#7E8299'}}>eCommerce</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="nav-link" href="">
                                    <div className="media mx-4">
                                        <Ballot style={{ color: '#727CF5', fontSize: 40}} />
                                        <div className="media-body pl-4">
                                            <h6 className="font-weigh-light my-0" style={{color: '#3F4254'}}>Management</h6>
                                            <small className="py-0" style={{ color: '#7E8299'}}>Company report</small>
                                        </div>
                                    </div>
                                </a>
                                <a className="nav-link" href="">
                                    <div className="media mx-4">
                                        <SupervisorAccount style={{ color: '#727CF5', fontSize: 30}} />
                                        <div className="media-body pl-4">
                                            <h6 className="font-weigh-light my-0" style={{color: '#3F4254'}}>Members</h6>
                                            <small className="py-0" style={{ color: '#7E8299'}}>Joiners</small>
                                        </div>
                                    </div>
                                </a>
                                
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link" href="#" id="newChat" role="button" data-toggle="dropdown">
                                <ChatBubbleOutline style={{ color: '#98A6AD', fontSize: 30}} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="newChat">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link" href="#" id="notifications" role="button" data-toggle="dropdown">
                                <NotificationsNone style={{ color: '#98A6AD', fontSize: 30}} />
                                <sup style={{ color: 'red', fontSize: 30, marginLeft: -10 }}>.</sup>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="notifications">
                                <h5 className="dropdown-header text-center">Quick notifications</h5>
                                <div className="dropdown-divider"></div>
                                
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link" href="#" id="userAccount" role="button" data-toggle="dropdown">
                                
                                <div className="media">
                                    <Face style={{ color: '#98A6AD', fontSize: 30}} />
                                    <div className="media-body ml-2">
                                        <p className="mb-0 pb-0" style={{ fontWeight: '600', color: '#A7B3B9'}}>Kevin ISHIMWE <small style={{color: '#A7B3B9'}}>(B.M)</small></p>
                                    </div>
                                </div>
                                
                            </a>
                            <div className="dropdown-menu dropdown-menu-right border-0 shadow pt-3" aria-labelledby="userAccount">
                                <a className="dropdown-item my-2" href="#">
                                    <div className="media">
                                        <RecentActors style={{ color: '#0BB783', fontSize: 35}} />
                                        <div className="media-body pl-2">
                                            <p className="mb-0" style={{fontWeight: '600'}}>My Profile</p>
                                            <div className="text-muted"style={{ fontSize: 14}}>
                                                Profile info
                                            </div>
                                        </div>
                                    </div>
                                    
                                </a>
                                <a className="dropdown-item my-2" href="#">
                                    <div className="media">
                                        <Assignment style={{ color: '#F64E60', fontSize: 35}} />
                                        <div className="media-body pl-2">
                                            <p className="mb-0" style={{fontWeight: '600'}}>My Profile</p>
                                            <div className="text-muted"style={{ fontSize: 14}}>
                                                Tasks and Todos
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <Link to={path} className="dropdown-item" href="#">
                                    <div className="px-3 py-2 text-center" style={{ backgroundColor: '#F3F6F9', borderRadius: 35 }}>
                                        <small style={{ color: '#8950FC'}}><strong>Sign Out</strong></small>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default DashboardNavbar;