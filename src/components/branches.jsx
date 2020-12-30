import React, { useEffect, useState } from 'react';
import Charts from './common/chart';
import Clearfix from './common/clearfix';
import ExpenseTable from './common/expenseTable';
import OrderTable from './common/orderTable';
import UserTable from './common/usersTable';
import { addDistribution, getDistribution, getSpecificDistribution, getDistributionSpecificProduct } from '../services/distributionService'

const Branches = () => {
    const [distribution, setdistribution] = useState([]);

    async function viewDistribution() {
        const { data } = await getDistribution();
        setdistribution(data['distributions']);
    }

    useEffect(() => {
        viewDistribution()
    }, [])

    return (
        <div className="row">
            <div className="col-lg-7 my-3">
                <div className="card border-0">
                    <div className="card-body">
                        <Clearfix title="Distribution" />
                        <OrderTable distributions={distribution} />
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
                            <Charts width={700} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branches;