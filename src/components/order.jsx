import React from 'react';
import Clearfix from './common/clearfix';
import OrderTable from './common/orderTable';

const Order = () => {
    return (
        <>
            <div className="card border-0 shadow-sm">
                <div className="mx-3 my-2">
                    <Clearfix title="Orders" />
                </div>
                <OrderTable /> 
            </div>
                
        </>
    );
}

export default Order;