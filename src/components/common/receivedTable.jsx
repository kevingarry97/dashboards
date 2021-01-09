import React from 'react';
import Form from './form';
import { getSubProduct } from '../../services/subProduct';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';
import { Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            {reics.map(r => (
                                <tr>
                                    <td><small style={{ color: '#98AECA'}}>#{r.id}</small></td>
                                    <td>
                                        <img src={r.product.imageUrl} width="50" alt="" style={{ borderRadius: '50%'}} />
                                    </td>
                                    <td>
                                        <strong style={{ color: '#98AECA'}}>{r.product.name}</strong></td>
                                    <td>
                                        <small>{r.receivedQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Quantity Received</small>
                                    </td>
                                    <td>
                                        <small>{r.damagedQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Damaged Quantity</small>
                                    </td>
                                    <td>
                                        <small>{r.remainingQuantity}</small>
                                        <br/>
                                        <small style={{ color: '#98AECA'}}>Remaining Quantity</small>
                                    </td>
                                    <td className="pt-4">
                                        <Link to={`/admin/branchOverview/${r.id}`} className="p-1" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}} onClick={this.props.handleOpen}>
                                            <Edit style={{ color: '#0BB783', fontSize: 14}} />
                                        </Link>
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