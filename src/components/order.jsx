import React, { useEffect, useState } from 'react';
import { viewAllBranchOrders } from '../services/orderService';
import { paginate } from '../utils/paginate';
import Clearfix from './common/clearfix';
import OrderTable from './common/orderTable';
import Pagination from './common/pagination';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    async function populateOrders() {
        const {data} = await viewAllBranchOrders();
        setOrders(data);
    }

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    useEffect(() => {
        populateOrders();
    },[]);

    const ords = paginate(orders, currentPage, pageSize);

    return (
        <>
            <div className="card border-0 shadow-sm">
                <div className="mx-3 my-2">
                    <Clearfix title="Orders" />
                </div>
                <OrderTable orders={ords} />
                <Pagination itemsCount={orders.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
            </div>
                
        </>
    );
}

export default Order;