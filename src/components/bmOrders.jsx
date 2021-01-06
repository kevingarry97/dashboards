import React from 'react';
import DashboardIcon from '../assets/images/dashboard.svg';
import BranchProduct from './common/branchProduct';

const BmOrders = () => {
    return (
        <>
            <div className="row my-3">
                <div className="col-lg-4 offset-lg-1">
                    <img src={DashboardIcon} className="img-fluid" />
                </div>
                <div className="col-lg-7">
                    <div className="card border-0">
                        <div className="card-body">
                            <h5 className="text-muted">Unique Orders</h5>
                            <BranchProduct />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default BmOrders;