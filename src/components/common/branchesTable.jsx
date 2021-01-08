import React, { useEffect, useState } from 'react';
import { getBranch } from '../../services/branchService';
import { paginate } from '../../utils/paginate';
import Pagination from './pagination';

const BranchesTable = () => {
    const [branches, setBranches] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [loading, setLoading] = useState(false);

    const handlePageChange = page => {
        setCurrentPage(page);
    }

    async function populateBranch() {
        setLoading(true)
        const {data} = await getBranch();
        setBranches(data['branches']);
        setLoading(false);
    }

    useEffect(() => {
        populateBranch()
    }, []);

    const branch = paginate(branches, currentPage, pageSize);

    return (
        <>
            <div className="table-responsive my-3">
                <table className="table table-hover">
                    <tbody>
                        {loading && <p>Loading .....</p>}
                        {branch.map(b => (
                            <tr>
                                <td>{b.id}</td>
                                <td>
                                    <p className="text-muted mb-1">{b.name}</p>
                                    <small style={{ color: "#"}}>Branch Name</small>
                                </td>
                                <td>
                                    <p className="text-muted mb-1">{b.location}</p>
                                    <small style={{ color: "#"}}>Branch Location</small>
                                </td>
                                <td>
                                    <p className="text-muted mb-1">{b.user?.full_Names || '?'}</p>
                                    <small style={{ color: "#"}}>Branch Owner</small>
                                </td>
                                <td>
                                    <p className="text-muted mb-1">{b.user?.email || '?'}</p>
                                </td>
                                <td>
                                    <p className="text-muted mb-1">{b.user?.phone_no || '?'}</p>
                                </td>
                                <td>
                                    <p className="text-muted mb-1">{b.user?.role || '?'}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination itemsCount={branches.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
        </>
    );
}

export default BranchesTable;