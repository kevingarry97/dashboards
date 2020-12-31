import React from 'react';
import { Add, InsertDriveFile,Visibility } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Joi from 'joi-browser';
import { getProduct } from '../../services/productService';
import Form from './form';
import { addImport } from '../../services/importService';
import SuccessMessage from '../common/successMessage';

class ImportTable extends Form {
    state = {  
        data: { amount: '', description: '', productId: ''},
        errors: {},
        products: [],
        error: '',
        openImport: false
    }

    schema = {
        amount: Joi.string().required().label("Amount"),
        description: Joi.string().required().label('Description'),
        productId: Joi.string().required().label('Product')
    }

    async populateProducts() {
        const {data} = await getProduct();
        this.setState({ products: data['products']})
    }

    handleOpenImport = () => {
        this.setState({openImport: true});
    }

    handleClose = () => {
        this.setState({openImport: false})
    }

    doSubmit = async () => {
        const {data} = await addImport(this.state.data);
        this.setState({ error: data.message});
        this.setState({data: { amount: '', description: '', productId: ''}})
    }

    async componentDidMount() {
        await this.populateProducts();
    }
    

    render() { 
        const {imports, onClick} = this.props;
        return (
            <>
                <div className="clearfix">
                    <div className="float-left">
                        <h5 className="text-muted">Imports</h5>
                    </div>
                    <div className="float-right">
                        <button className="btn btn-sm mx-1" onClick={this.handleOpenImport} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                            <Add style={{ fontSize: 18}} /> Create
                        </button>
                        <button className="btn btn-sm mx-1"style={{ backgroundColor: '#fff', color: '#0BB783'}}>
                            <InsertDriveFile style={{ fontSize: 18}} /> Reports
                        </button>
                    </div>
                </div>
                <div className="table-responsive my-3">
                    <table className="table table-hover">
                        <tbody>
                            {imports && imports.map(imp => (
                                <tr key={imp.id}>
                                    <td>
                                        <small style={{ color: '#98AECA'}}># {imp.id}</small>
                                    </td>
                                    <td>
                                        <small>{imp.product.name}</small>
                                    </td>
                                    <td>
                                        <small>Rwf {imp.amount}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Amount</small>
                                    </td>
                                    <td>
                                        <small>{imp.description}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Description</small>
                                    </td>
                                    <td onClick={onClick}>
                                        <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                            <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <Dialog open={this.state.openImport} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Add Imports
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add an Import expense.</small> 
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <DialogContent className="mb-4 font-weight-bold">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        {this.renderInput('amount', 'Amount', '', 'Amount')}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderSelect('productId', 'Choose Product', this.state.products)}
                                    </div>
                                </div>
                                {this.renderTextArea('description', 'Description')}
                                {this.renderButton('Create imports')}
                            </form>
                        </DialogContent>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default ImportTable;