import React, { useEffect, useState } from 'react';
import { Visibility } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { getDistributionSpecificProduct } from '../../services/distributionService';

const OrderTable = ({distributions}) => {
    const [open, setOpen] = useState(false);
    const [specificProduct, setSpecificProduct] = useState([]);

    const handleOpen = async (id) => {
        setOpen(true);
        const {data} = await getDistributionSpecificProduct(id);
        setSpecificProduct(data['distributions']);
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {

    }, []);

    return (
        <>
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
                                <td>
                                    <a className="px-2 pb-2 pt-1" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}} onClick={() => handleOpen(item.product.id)}>
                                        <Visibility style={{ color: '#0BB783', fontSize: 16}} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Distribution
                    <p className="mt-0" style={{ fontSize: 15, color: '#b7c3c4'}}><small>You see where the product is distributed.</small></p> 
                </DialogTitle>
                <DialogContent>
                    <h6 className="font-weight-bold text-muted mb-3">Where distributed ?</h6>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                {specificProduct.map(s => (
                                    <tr key={s.id}>
                                        <td>
                                            <small style={{ color: '#98AECA'}}># {s.id}</small>
                                        </td>
                                        <td>
                                            <p style={{ color: '#98AECA'}} className="font-weight-light mb-0">{s.branch.name}</p>
                                            <small><strong className="text-muted">Branch name</strong></small>
                                        </td>
                                        <td>
                                            <p style={{ color: '#98AECA'}} className="font-weight-light mb-0">{s.branch.location}</p>
                                            <small><strong className="text-muted">Location</strong></small>
                                        </td>
                                        <td>
                                            <p style={{ color: '#98AECA'}} className="font-weight-light mb-0">{s.distribution_date}</p>
                                        </td>
                                        <td>
                                            <p className="font-weight-light text-muted mb-0">Quantity: <span style={{ color: '#98AECA'}}>{s.distributed_qty}</span></p>
                                        </td>
                                        <td>
                                        <span className="alert alert-success py-1 border-0" style={{ borderRadius: 20}}>
                                            Distributed
                                        </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </DialogContent>
            </Dialog>
        </>
    );
}

export default OrderTable;