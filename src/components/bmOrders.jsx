import React, { useEffect, useState } from 'react';
import DashboardIcon from '../assets/images/dashboard.svg';
import { getBranchOrders } from '../services/orderService';
import BranchProduct from './common/branchProduct';

const BmOrders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(2)
    const [orders, setOrders] = useState([])

    async function populateOrder() {
        const {data} = await getBranchOrders();
        setOrders(data)
    }

    useEffect(() => {
        populateOrder();
    }, [])

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
                            <p className="text-center pt-3 text-danger font-weight-bold">{orders.message}</p>
                            <BranchProduct />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default BmOrders;