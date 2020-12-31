import React from 'react';
import Charts from './common/chart';
import Clearfix from './common/clearfix';
import ExpenseTable from './common/expenseTable';
import OrderTable from './common/distributionTable';
import { addDistribution, getDistribution, getSpecificDistribution, getDistributionSpecificProduct } from '../services/distributionService'
import * as Branch from '../services/branchService';
import { viewImport } from '../services/importService';
import { getProduct } from '../services/productService';
import ExpenseForm from './common/expenseForm';
import { Add } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from './common/form';
import Joi from 'joi-browser';
import SuccessMessage from './common/successMessage';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ImportTable from './common/importTable';

class Branches extends Form {
    state = { 
        currentPage: 1,
        pageSize: 2,
        distribution: [],
        products: [],
        imports: [],
        branches: [],
        openDistribution: false,
        data: { branchId: '', productId: '', quantity: ''},
        errors: {},
        error: '',
        loading: false
    }

    schema = {
        branchId: Joi.string().required().label("Branch"),
        productId: Joi.string().required().label("Product"),
        quantity: Joi.string().required().label("Quantity")
    }
    
    async populateImport() {
        const {data} = await viewImport();
        this.setState({ imports: data['imports']})
    }

    async populateBranch() {
        const { data } = await Branch.getBranch();
        this.setState({ branches: data['branches']});
    }
    async populateProduct() {
        const { data } = await getProduct();
        this.setState({ products: data['products']});
    }

    async componentDidMount() {
        this.setState({ loading: true}) 
        const { data } = await getDistribution();
        this.setState({ distribution: data['distributions']})
        this.setState({ loading: false })
        await this.populateProduct();
        await this.populateBranch();
        await this.populateImport();
    }

    handleOpenDistribution = () => {
        this.setState({ openDistribution: true })
    };

    handleClose = () => {
        this.setState({ openDistribution: false })
    };

    handlePageChange = page => {
        this.setState({ currentPage: page});
    }

    doSubmit = async () => {
        try {
            const response = await addDistribution(this.state.data);
            this.setState({error: response.data.message});
            this.setState({data: { branchId: '', productId: '', quantity: ''}})
        } catch (error) {
            console.log('Error Message:', error.message);
        }
        
    }

    render() { 
        const { currentPage, pageSize, distribution, imports } = this.state;
        const dists = paginate(distribution, currentPage, pageSize);
        const imps = paginate(imports, currentPage, pageSize);

        return (
            <>
                <div className="row">
                    <div className="col-lg-7 my-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="clearfix border-bottom pb-2">
                                    <div className="float-left">
                                        <h5 className="text-muted">Distributions</h5>
                                    </div>
                                    <div className="float-right">
                                        <button className="btn btn-sm" onClick={this.handleOpenDistribution} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                                            <Add style={{ fontSize: 18}} /> Create
                                        </button>
                                    </div>
                                </div>
                                {this.state.loading && <div className="text-center"> Loading </div>}
                                <OrderTable distributions={dists} />
                                <Pagination itemsCount={distribution.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 my-3">
                        <div className="card border-0">
                            <div className="card-body">
                                
                                <ImportTable imports={imps} onClick={this.handleOpenImport} />
                                <Pagination itemsCount={imports.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 my-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <h6 className="text-muted">Branches Expenses</h6>
                                <ExpenseTable />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 my-3">
                        <div className="card border-0">
                            <div className="card-body">
                                <Clearfix title="Projects and Visualization" />
                                <div className="d-flex justify-content-center m-3">
                                    <Charts width={700} height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <ExpenseForm />
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.openDistribution} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Add Distribution
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add distribution to a branch.</small> 
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <DialogContent className="mb-4 font-weight-bold">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        {this.renderSelect('branchId', 'Choose Branch', this.state.branches)}
                                    </div>
                                     <div className="col-md-6">
                                        {this.renderSelect('productId', 'Choose Product', this.state.products)}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderInput('quantity', 'Quantity')}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderButton('Distribute')}
                                    </div>
                                </div>
                            </form>
                        </DialogContent>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default Branches;