import React from 'react';
import { Visibility } from '@material-ui/icons';

const OrderTable = ({distributions}) => {
    return (
        <div className="table-responsive my-3">
            <table className="table table-borderless">
                <tbody>
                    {distributions?.map((item) => (
                        <tr key={item.id}>
                            <th scope="row" style={{color: '#757D85'}}># {item.id}</th>
                            <td>
                                <img src={item.product.imageUrl} width="40" height="auto" style={{ border: 0, borderRadius: '50%'}} alt=""/>
                            </td>
                            <td>
                                <p className="text-muted mb-1">{item.branch.name}</p>
                                <small>Location: <span style={{color: '#b5b5cb'}}>{item.branch.location}</span></small>
                            </td>
                            <td>
                                <p className="text-muted mb-1">Qty: {item.distributed_qty}</p>
                                <small >Date: <span style={{color: '#b5b5cb'}}>{item.distribution_date}</span></small> 
                            </td>
                            <td>
                                <small style={{ color: '#b5c5de'}}>{item.product.name}</small>
                            </td>
                            <td>
                                <p className="mb-0">Rwf {item.distributed_qty * item.product.unit_price}</p>
                                <small style={{ color: '#b5c5de'}}>Total Amount</small>
                            </td>
                            {/* <td>
                                <a href="#" className="px-2 pb-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                    <Visibility style={{ color: '#0BB783', fontSize: 16}} />
                                </a>
                            </td> */}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default OrderTable;