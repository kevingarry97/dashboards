import React from 'react';
import { InsertDriveFile } from '@material-ui/icons';
import Form from './form';
import { getSubProduct } from '../../services/subProduct';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';

class ReceivedTable extends Form {
    state = { 
        currentPage: 1,
        pageSize: 3,
        received: [],
    }

    async populateReceived() {
        const {data} = await getSubProduct();
        this.setState({received: data[1]});
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    async componentDidMount() {
        await this.populateReceived();
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
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination itemsCount={received.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
            </>
        );
    }
}
 
export default ReceivedTable;