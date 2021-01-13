import React from 'react';
import { CheckCircle } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Form from './form';
import Joi from 'joi-browser';
import { viewSpecificDistribution } from '../../services/distributionService';
import SuccessMessage from './successMessage';

class BranchDistributionTable extends Form {
    state = { 
        data: { receivedQuantity: '', damagedQuantity: '', missingQuantity: '' },
        errors: {},
        distributedId: '',
        open: false,
        error: ''
    }

    schema = {
        receivedQuantity: Joi.string().required().label('Received Quantity'),
        damagedQuantity: Joi.string().required().label('Damaged Quantity'),
        missingQuantity: Joi.string().required().label('Missing Quantity'),
    }

    handleOpen = (id) => {
        this.setState({open: true})
        this.setState({distributedId: id})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    doSubmit = async () => {
        const {data} = await viewSpecificDistribution(this.state.distributedId, this.state.data);
        this.setState({error: data.message});
    }

    render() { 
        const { distributions } = this.props;

        return (
            <>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            {distributions.map(d => (
                                <tr key={d.id}>
                                    <td>
                                        <small style={{ color: "#6C7592"}}>#{d.id}</small>
                                    </td>
                                    <td>
                                        <img src={d.product.imageUrl} width="40" height="auto" style={{ border: 0, borderRadius: '50%'}} alt=""/>
                                    </td>
                                    <td>
                                        <p className="mb-0 font-weight-bold" style={{ color: "#6C7592"}}>{d.product.name}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0" style={{ color: "#6C7592"}}>Qty{d.distributed_qty}</p>
                                        <small style={{ color: "#6C7592"}}>Distributed Qty</small>
                                    </td>
                                    <td>
                                        <p className="mb-0" style={{ color: "#6C7592"}}>{d.distribution_date}</p>
                                        <small style={{ color: "#6C7592"}}>Date</small>
                                    </td>
                                    <td>
                                        <span className="alert alert-danger py-1 border-0" style={{ borderRadius: 20}}>
                                            {d.status}
                                        </span>
                                    </td>
                                    <td>
                                        <p className="mb-0" style={{ color: "#6C7592"}}>Rwf {d.distributed_qty * d.product.unit_price}</p>
                                        <small style={{ color: "#6C7592"}}>Total amount</small>
                                    </td>
                                    <td onClick={() => this.handleOpen(d.id)}>
                                        <a style={{ cursor: 'pointer'}}>
                                            <CheckCircle style={{ color: "#0BB783"}} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>
                        Hello
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('receivedQuantity', 'Received Quantity', '', 'Received Quantity')}
                            {this.renderInput('damagedQuantity', 'Damaged Quantity', '', 'Damaged Quantity')}
                            {this.renderInput('missingQuantity', 'Missing Quantity', '', 'Missing Quantity')}
                            {this.renderButton('Approve')}
                        </form>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}
 
export default BranchDistributionTable;