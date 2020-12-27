import React from 'react';
import { MoreHoriz, Add, InsertDriveFile, AssignmentTurnedIn } from '@material-ui/icons';


function Clearfix({title}) {
    return (
        <div className="clearfix mb-1">
            <aside className="float-left">
                <h6 className="font-weight-bold" style={{ color: '#6c757d'}}>{title}</h6>
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
    );
}

export default Clearfix;