import React from 'react';
import { ArrowUpward, Person, Apartment, ArrowDownward, Ballot, MonetizationOn, MoreHoriz, Add, InsertDriveFile, AssignmentTurnedIn, ExitToApp } from '@material-ui/icons';
import DashboardCard from '../common/dashboardCard';
import { Helmet } from 'react-helmet';
import DashboardIcon from '../../assets/images/dashboard.svg'
import ExpenseTable from '../common/expenseTable';
import ExpenseForm from '../common/expenseForm';
import Charts from '../common/chart';
import BranchProduct from '../common/branchProduct';
import Form from '../common/form';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import { addExpenses, viewBranchExpenses } from '../../services/expenseService';
import Pagination from '../common/pagination';
import { paginate } from '../../utils/paginate';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import SuccessMessage from '../common/successMessage';
import ReceivedTable from '../common/receivedTable';

class DashboardBM extends Form {
    state = {  
        data: { 
            amount: '',
            description: ''
        },
        open: false,
        currentPage: 1,
        pageSize: 2,
        expenses: [],
        error: '',
        errors: {}
    }

    schema = {
        description: Joi.string().required().label('Description'),
        amount: Joi.string().required().label('Amount')
    }

    handleOpen = () => {
        this.setState({open: true})
    }
    handleClose = () => {
        this.setState({open: false})
    }

    handlePageChange = page => {
        this.setState({ currentPage: page});
    }

    async populateExpenses() {
        const {data} = await viewBranchExpenses();
        this.setState({expenses: data['my_expenses']});
    }

    async componentDidMount() {
        await this.populateExpenses();
    }
    
    doSubmit = async () => {
        const {data} = await addExpenses(this.state.data);
        this.setState({ error: data.message});
        this.setState({data: { description: '', amount: '' }})
    }

    render() { 
        const { currentPage, pageSize, expenses } = this.state;
        const exps = paginate(expenses, currentPage, pageSize);

        return (
            <>  
                <Helmet>
                    <title>Branch Manager</title>
                    <meta name="description" content="Awesome description" />
                </Helmet>
                <section className="py-4 px-5" style={{ backgroundColor: '#f7f8fc'}}>
                    <div className="container-fluid px-5">
                        <div className="clearfix mt-md-0 mt-5">
                            <aside className="float-left">
                                <small style={{ color: '#98AECB', fontSize: 11}}>OVERVIEW</small>
                                <h5 style={{ color: '#6c757d'}}>Dashboard</h5>
                            </aside>
                            <aside className="float-right mt-3">
                                <div className="media">
                                    <Link to="/logout" className="btn btn-sm font-weight-bold px-3" style={{ backgroundColor: '#0BB783', color: '#fff'}} onClick={this.handleOpen}>
                                        <ExitToApp /> &nbsp;&nbsp;
                                        Logout
                                    </Link>
                                </div>
                            </aside>
                        </div>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={36}
                                            title="Branches"
                                            symbol={<Apartment style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={5}
                                            title="Products"
                                            symbol={<Ballot style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowDownward style={{ fontSize: 18, color: '#fa5c7c', marginTop: 3}} />}
                                            color="#fa5c7c"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={23}
                                            title="Expenses"
                                            symbol={<MonetizationOn style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={12}
                                            title="Users"
                                            symbol={<Person style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-6">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="clearfix mb-4">
                                            <aside className="float-left">
                                                <h6 className="mb-0" style={{ color: '#6c757d'}}>PROJECTIONS VS ACTUALS</h6>
                                                <small style={{ color: '#B5B6C5', fontSize: 12}}>
                                                </small>
                                            </aside>
                                            <aside className="float-right">
                                                <div className="dropdown">
                                                    <a href="" id="dropdownMenuButton" data-toggle="dropdown">
                                                        <MoreHoriz style={{ color: '#6c757d'}} />
                                                    </a>
                                                    <div className="dropdown-menu dropdown-menu-right border-0 shadow" aria-labelledby="dropdownMenuButton">
                                                        <h6 className="dropdown-header">Quick actions</h6>
                                                        <div className="dropdown-divider"></div>
                                                        <a className="dropdown-item my-1" href="#">
                                                            <Add style={{ color: '#8950FC', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>New Product</span> 
                                                        </a>
                                                        <a className="dropdown-item my-1" href="#">
                                                            <InsertDriveFile style={{ color: '#FFE5B3', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Generate report</span> 
                                                        </a>
                                                        <a className="dropdown-item my-1" href="#">
                                                            <AssignmentTurnedIn style={{ color: '#1BC5BD', fontSize: 22 }} /> <span style={{ color: '#6B6D7B', fontSize: 15}}>Check projects</span> 
                                                        </a>
                                                        <div className="dropdown-divider"></div>
                                                        <button className="btn mx-3 my-2 btn-sm" style={{ backgroundColor: '#D7F9EF', color: '#31C397'}}>More actions</button>
                                                    </div>
                                                </div>
                                            </aside>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Charts width={650} height={280} />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-lg-4 offset-lg-1">
                                <img src={DashboardIcon} className="img-fluid" />
                            </div>
                            <div className="col-lg-7">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <h5 className="text-muted">Unique Orders</h5>
                                        <BranchProduct />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-lg-7">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <ReceivedTable />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="card border-0">
                                    <div className="card-body">
                                        <div className="clearfix mb-4">
                                            <div className="float-left">
                                                <h6 className="font-weight-bold" style={{ color: '#6c757d'}}>EXPENSES</h6>
                                            </div>
                                            <div className="float-right">
                                                <button className="btn btn-sm mx-1" onClick={this.handleOpen} style={{ backgroundColor: '#0BB783', color: '#fff'}}>
                                                    <Add style={{ fontSize: 18}} /> Create
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <ExpenseTable expense={exps} />
                                        <Pagination itemsCount={expenses.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Create expense
                        <br/>
                        <small style={{ color: '#C4B7B7'}}>You can add to a branch Expenses.</small> 
                    </DialogTitle>
                    <DialogContent>
                        {this.state.error && <SuccessMessage message={this.state.error} className="alert-danger" />}
                        <DialogContent className="mb-4 font-weight-bold">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('amount', 'Amount', '', 'Amount', 'number')}
                                {this.renderTextArea('description', 'Description')}
                                <div className="mt-4"></div>
                                <small className="text-muted mx-2">Record expense of the branch by pressing below: </small>
                                <div className="mt-2"></div>
                                {this.renderButton('Create')}
                            </form>
                        </DialogContent>
                    </DialogContent>
                </Dialog>
            </> 
        );
    }
}

export default DashboardBM;