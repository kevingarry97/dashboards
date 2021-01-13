import React from 'react';
import Form from './form';
import { getSubProduct } from '../../services/subProduct';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';

class ReceivedTable extends Form {
    state = { 
        currentPage: 1,
        pageSize: 3,
        received: [],
        error: ''
    }

    async populateReceived() {
        const {data} = await getSubProduct();
        if(data.message) return this.setState({error: data.message})
        this.setState({received: data[1]});
        console.log(data);
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    async componentDidMount() {
        await this.populateReceived();
    }

    render() { 
        const {currentPage, pageSize, received} = this.state;
        const reics = paginate(received, currentPage, pageSize);
        return (
            <>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <tbody>
                            {reics.map(r => (
                                <tr key={reics.id}>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination itemsCount={received?.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange} />
            </>
        );
    }
}
 
export default ReceivedTable;