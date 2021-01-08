import React from 'react';
import { Visibility } from '@material-ui/icons';

const OrderTable= ({orders}) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-sm">
                    <tr className="table-info text-muted">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        order.subproducts.map(o => (
                            <tr key={o.id} className="table-light text-muted">
                                <td>1</td>
                                <td>Oil, Rice, Soaps</td>
                                <td>24/5/2020</td>
                                <td>
                                    <p className="my-0"> Rubavu Branch</p>
                                    <small><strong>Location:</strong> Rubavu</small>
                                </td>
                                <td>Lambert Nsengiyumva</td>
                                <td>
                                    <span className="alert alert-danger py-1 border-0" style={{ borderRadius: 20}}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>Rwf 5, 000, 000</td>
                                <td>
                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                    </a>
                                </td>
                            </tr>
                        ))
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;