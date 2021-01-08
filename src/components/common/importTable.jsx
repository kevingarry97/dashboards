import React from 'react';
import { Add, Edit, InsertDriveFile,Visibility } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Joi from 'joi-browser';
import { getProduct, viewSpecificProduct } from '../../services/productService';
import Form from './form';
import { addImport, viewImport, viewSpecific } from '../../services/importService';
import SuccessMessage from '../common/successMessage';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';
import Reports from '../reports';
import { Link } from 'react-router-dom';

class ImportTable extends Form {
    state = { 
        currentPage: 1,
        pageSize: 4,
        data: { amount: '', description: '', productId: ''},
        errors: {},
        importss: [],
        products: [],
        specificImport: [],
        error: '',
        openImport: false,
        openView: false
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
    
    async populateImports() {
        const {data} = await viewImport();
        this.setState({ importss: data['imports']})
    }

    handleOpenImport = () => {
        this.setState({openImport: true});
    }

    handleOpenView = async (id) => {
        this.setState({openView: true});
        const {data} = await viewSpecific(id);
        this.setState({specificImport: data['expenses']});
        console.log(data['expenses']);
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
        
    }

    handleClose = () => {
        this.setState({openImport: false});
        this.setState({openView: false});
    }

    // mapToViewModel(movie) {
    //     return {
    //       _id: movie._id,
    //       title: movie.title,
    //       genreId: movie.genre._id,
    //       numberInStock: movie.numberInStock,
    //       dailyRentalRate: movie.dailyRentalRate,
    //     };
    // }

    doSubmit = async () => {
        const {data} = await addImport(this.state.data);
        this.setState({ error: data.message});
        this.setState({data: { amount: '', description: '', productId: ''}})
    }

    async componentDidMount() {
        await this.populateProducts();
        await this.populateImports();
    }
    

    render() { 
        const {imports} = this.props;
        const {specificImport, importss, currentPage, pageSize} = this.state;
        const imps = paginate(importss, currentPage, pageSize)
        return (
            <>
                <div className="clearfix">
                    <div className="float-left">
                    <button className="btn btn-sm mx-1" onClick={this.handleOpenImport} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                            <Add style={{ fontSize: 18}} /> Create Imports
                        </button>
                    </div>
                    <div className="float-right">
                        
                        <button className="btn btn-sm mx-1"style={{ backgroundColor: '#fff', color: '#0BB783'}}>
                            <InsertDriveFile style={{ fontSize: 18}} /> Reports
                        </button>
                    </div>
                </div>
                <div className="table-responsive my-3">
                    <table className="table table-hover">
                        <tbody>
                            {imps && imps.map(imp => (
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
                                    <td>
                                        <a className="p-2 mx-1" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}} onClick={() => this.handleOpenView(imp.product.id)}>
                                            <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                        </a>
                                        <Link to={`/admin/branches/${imp.id}`} className="p-2 mx-1" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}} onClick={this.handleOpenImport}>
                                            <Edit style={{ color: '#0BB783', fontSize: 18}} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination itemsCount={importss.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
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
                <Dialog open={this.state.openView} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Imported Product
                        <p className="mt-0" style={{ fontSize: 15, color: '#b7c3c4'}}><small>You see why the product is imported.</small></p> 
                    </DialogTitle>
                    <DialogContent>
                        <h6 className="font-weight-bold text-muted mb-3">Where distributed ?</h6>
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <tbody>
                                    {specificImport.map(s => (
                                        <tr key={s.id}>
                                            <td>
                                                <small style={{ color: '#98AECA'}}># {s.id}</small>
                                            </td>
                                            <td>
                                                <small><strong className="text-muted">Description</strong></small>
                                                <p style={{ color: '#98AECA'}} className="font-weight-light mb-0">{s.description}</p>
                                            </td>
                                            <td>
                                                <small><strong className="text-muted">Rwf</strong></small>
                                                <p style={{ color: '#98AECA'}} className="font-weight-light mb-0">{s.amount}</p>
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
}

export default ImportTable;