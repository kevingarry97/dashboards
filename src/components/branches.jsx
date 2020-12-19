import React from 'react';
import Charts from './common/chart';
import Clearfix from './common/clearfix';
import ExpenseTable from './common/expenseTable';
import OrderTable from './common/orderTable';
import UserTable from './common/usersTable';

const Branches = () => {
    return (
        <div className="row">
            <div className="col-lg-7 my-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Distribution" />
                        <OrderTable />
                    </div>
                </div>
            </div>
            <div className="col-lg-5 my-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Import expense" />
                        <UserTable />
                    </div>
                </div>
            </div>
            <div className="col-lg-5 my-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Branches Expense" />
                        <ExpenseTable />
                    </div>
                </div>
            </div>
            <div className="col-lg-7 my-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Projects and Visualization" />
                        <div className="d-flex justify-content-center m-3">
                            <Charts width={650} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branches;