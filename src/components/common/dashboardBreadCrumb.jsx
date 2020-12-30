import { Add, Refresh } from '@material-ui/icons';
import React from 'react';

const DashboardBreadCrumb = () => {
    return (
        <div className="clearfix">
            <aside className="float-left">
                <small style={{ color: '#98AECB', fontSize: 11}}>OVERVIEW</small>
                <h5 style={{ color: '#6c757d'}}>Dashboard</h5>
            </aside>
            <aside className="float-right mt-3">
                <div className="media">
                    <button className="btn btn-sm font-weight-bold" style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                        <Add /> 
                        Create Branch
                    </button>
                    <div className="ml-3 pt-1 pb-2 px-3 shadow-sm" style={{ backgroundColor: '#0BB783', borderRadius: 5}}>
                        <Refresh style={{ color: '#fff', fontSize: 20}} />
                    </div>
                </div>
                
            </aside>
        </div>
    );
}

export default DashboardBreadCrumb;