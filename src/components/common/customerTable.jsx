import React, {useEffect, useState} from 'react';
import { getCustomers } from '../../services/customerServices';
import { paginate } from '../../utils/paginate';
import Pagination from './pagination';

const CustomerTable = () => {
    const [customer, setCustomer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [loading, setLoading] = useState(false);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    async function populateCustomer() {
        setLoading(true)
        const {data} = await getCustomers();
        setCustomer(data['Customers']);
        setLoading(false);
    }

    useEffect(() => {
        populateCustomer()
    }, []);

    const custs= paginate(customer, currentPage, pageSize);

    return (
        <div className="my-3">
           <div className="table-responsive">
                <table className="table table-hover">
                    <tbody>
                        {custs.map(c => (
                            <tr key={c.id}>
                                <td>
                                    <strong style={{ color: '#98AECA'}}># {c.id}</strong>
                                </td>
                                <td>
                                    <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{c.full_Names}</p>
                                    <small style={{ color: '#8B9298'}}>
                                        Customer
                                    </small>
                                </td> 
                                <td>
                                    <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{c.email}</p>
                                    <small style={{ color: '#8B9298'}}>
                                        Email
                                    </small>
                                </td> 
                                <td>
                                    <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{c.phone_no}</p>
                                    <small style={{ color: '#8B9298'}}>
                                        Phone No
                                    </small>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>   
            </div> 
            <Pagination itemsCount={customer.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
        </div>
    );
}

export default CustomerTable;