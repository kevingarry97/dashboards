import React from 'react';
import Joi from 'joi-browser';
import { addExpenses, viewBranchExpenses } from '../services/expenseService';
import Form from './common/form';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import { Add } from '@material-ui/icons';
import ExpenseTable from './common/expenseTable';

class BmExpenses extends Form {
    state = {  
        currentPage: 1,
        pageSize: 2,
        expenses: [],
        data: { amount: '', description: ''},
        errors: {},
        error: ''
    }

    schema = {
        description: Joi.string().required().label('Description'),
        amount: Joi.string().required().label('Amount')
    }


    async populateExpenses() {
        const {data} = await viewBranchExpenses();
        this.setState({expenses: data['my_expenses']});
        console.log(data);
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
            <div className="row">
                <div className="col-lg-7">
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
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                {this.renderInput('amount', 'Amount', '', 'Amount', 'number')}
                                {this.renderTextArea('description', 'Description')}
                                <div className="mt-4"></div>
                                <small className="text-muted mx-2">Record expense of the branch by pressing below: </small>
                                <div className="mt-2"></div>
                                {this.renderButton('Create')}
                            </form>
                        </div>
                    </div> 
                </div>
            </div> 
            
            );
    }
}

export default BmExpenses;