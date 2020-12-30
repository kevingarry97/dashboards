import React from 'react';
import { Visibility } from '@material-ui/icons';

const OrderTable= () => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-sm">
                    <tr className="table-secondary">
                        <th scope="col">#</th>
                        <th scope="col">Order</th>
                        <th scope="col">Date</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Status</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-light text-muted">
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
                                Pending
                            </span>
                        </td>
                        <td>Rwf 5, 000, 000</td>
                        <td>
                            <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                            </a>
                        </td>
                    </tr>
                    <tr className="table-light text-muted">
                        <td>1</td>
                        <td>Oil, Rice, Soaps</td>
                        <td>24/5/2020</td>
                        <td>
                            <p className="my-0"> Rubavu Branch</p>
                            <small><strong>Location:</strong> Rubavu</small>
                        </td>
                        <td>Lambert Nsengiyumva</td>
                        <td>
                            <span className="alert alert-success py-1 border-0" style={{ borderRadius: 20}}>
                                Completed
                            </span>
                        </td>
                        <td>Rwf 5, 000, 000</td>
                        <td>
                            <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                            </a>
                        </td>
                    </tr>
                    <tr className="table-light text-muted">
                        <td>1</td>
                        <td>Oil, Rice, Soaps</td>
                        <td>24/5/2020</td>
                        <td>
                            <p className="my-0"> Rubavu Branch</p>
                            <small><strong>Location:</strong> Rubavu</small>
                        </td>
                        <td>Lambert Nsengiyumva</td>
                        <td>
                            <span className="alert alert-secondary py-1 border-0" style={{ borderRadius: 20}}>
                                On Hold
                            </span>
                        </td>
                        <td>Rwf 5, 000, 000</td>
                        <td>
                            <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                            </a>
                        </td>
                    </tr>
                    <tr className="table-light text-muted">
                        <td>1</td>
                        <td>Oil, Rice, Soaps</td>
                        <td>24/5/2020</td>
                        <td>
                            <p className="my-0"> Rubavu Branch</p>
                            <small><strong>Location:</strong> Rubavu</small>
                        </td>
                        <td>Lambert Nsengiyumva</td>
                        <td>
                            <span className="alert alert-primary py-1 border-0" style={{ borderRadius: 20}}>
                                Processing
                            </span>
                        </td>
                        <td>Rwf 5, 000, 000</td>
                        <td>
                            <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;