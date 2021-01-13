import React from 'react';
import ReceivedTable from './common/receivedTable';

const BmStock = () => {
    return (
        <div>
            <div className="card border-0">
                <div className="card-body">
                    <div className="clearfix">
                        <div className="float-left">
                            <h6 className="text-muted mb-0">Distribution</h6>
                            <p className="text-muted mt-0"><small>Provide us any expense to of your branch</small></p>
                        </div>
                    </div>
                    <ReceivedTable />
                </div>
            </div>
        </div>
    );
}

export default BmStock;