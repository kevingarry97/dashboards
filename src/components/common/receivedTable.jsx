import React from 'react';
import { Add, InsertDriveFile, Visibility } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import SuccessMessage from './successMessage';
import Form from './form';
import Joi from 'joi-browser';
import { viewBranchProduct } from '../../services/productService';
import { addSubProduct, getSubProduct } from '../../services/subProduct';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';

class ReceivedTable extends Form {
    state = { 
        currentPage: 1,
        pageSize: 3,
        data: { receivedQuantity: '', damagedQuantity: '', product_id: ''},
        open: false,
        error: '',
        errors: {},
        received: [],
        products: []
    }

    schema = {
        receivedQuantity: Joi.string().required().label('Received'),
        damagedQuantity: Joi.string().required().label('Damaged'),
        product_id: Joi.string().required().label('Product')
    }

    async populateProducts() {
        const {data} = await viewBranchProduct();
        this.setState({products: data['Products']});
    }

    async populateReceived() {
        const {data} = await getSubProduct();
        this.setState({received: data[1]});
    }

    handleOpen = () => {
        this.setState({ open: true});
    }

    handleClose = () => {
        this.setState({ open: false});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    async componentDidMount() {
        await this.populateProducts();
        await this.populateReceived();
    }
    
    doSubmit = async () => {
        const {data} = await addSubProduct(this.state.data);
        console.log(this.state);
        this.setState({error: data.message})
        this.setState({data: { receivedQuantity: '', damagedQuantity: '', product_id: ''}})
    }

    render() { 
        const {currentPage, pageSize, received} = this.state;
        const reics = paginate(received, currentPage, pageSize)
        return (
            <>
                <div className="clearfix">
                    <div className="float-left">
                        <h6 className="text-muted mb-0">Recieved Products</h6>
                        <p className="text-muted mt-0"><small>Provide us any expense to of your branch</small></p>
                    </div>
                    <div className="float-right">
                        <button className="btn btn-sm mx-1" onClick={this.handleOpen} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                            <Add style={{ fontSize: 18}} /> Create
                        </button>
                        <button className="btn btn-sm mx-1" style={{ backgroundColor: '#fff', color: '#0BB783'}}>
                            <InsertDriveFile style={{ fontSize: 18}} /> Reports
                        </button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            {reics.map(r => (
                                <tr>
                                    <td><small style={{ color: '#98AECA'}}>#{r.id}</small></td>
                                    <td><img src={r.product.imageUrl} width="50" alt=""/></td>
                                    <td>
                                        <strong style={{ color: '#98AECA'}}>{r.product.name}</strong></td>
                                    <td>
                                        <small>Rwf {r.receivedQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Quantity Received</small>
                                    </td>
                                    <td>
                                        <small>Rwf {r.soldQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Sold Quantity</small>
                                    </td>
                                    <td>
                                        <small>Rwf {r.damagedQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Damaged Quantity</small>
                                    </td>
                                    <td>
                                        <small>Rwf {r.remainingQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Remaining Quantity</small>
                                    </td>
                                    <td className="pt-3">
                                        <a href="#" className="px-2 pb-1" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                            <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination itemsCount={received.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Save received
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add to a branch Expenses.</small> 
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <DialogContent className="mb-4 font-weight-bold">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('receivedQuantity', 'Received', '', 'Received', 'number')}
                                {this.renderInput('damagedQuantity', 'Damaged', '', 'Damaged', 'number')}
                                {this.renderSelect('product_id', 'Product', this.state.products)}
                                <div className="mt-4"></div>
                                <small className="text-muted mx-2">Record what's received to the branch by pressing below: </small>
                                <div className="mt-2"></div>
                                {this.renderButton('Save')}
                            </form>
                        </DialogContent>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}
 
export default ReceivedTable;