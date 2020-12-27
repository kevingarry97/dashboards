import React, { useEffect, useState } from 'react';
import { NewReleases, Visibility } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import manager, { viewManager, getManagers } from '../../store/manager';
import Pagination from './pagination';
import { paginate } from '../../utils/paginate';

const UserTable = () => {
    const [pageSize, setPageSize] = useState(2);
    const [currentPage, setcurrentPage] = useState(1);
    const dispatch = useDispatch();
    const managers = useSelector(getManagers);

    const handlePageChange = page => {
        setcurrentPage(page)
    }

    useEffect(() => {
        dispatch(viewManager());
    }, []);

    const users = paginate(managers, currentPage, pageSize);

    return (
        <div className="table-responsive my-3">
            <table className="table table-hover">
                <tbody>
                    {users && users.map((manager) => (
                        <tr key={manager.id}>
                            <td>
                                <strong style={{ color: '#98AECA'}}># {manager.id}</strong>
                            </td>
                            <td>
                                <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{manager.full_Names}</p>
                                <small style={{ color: '#7B838A'}}>
                                    <strong>Phone: </strong>  
                                    {manager.phone_no}
                                </small>
                            </td>
                            <td>
                                <p className="mb-0" style={{ color: '#8B9298'}}>{manager.role}</p>
                                <small style={{ color: '#8B9298'}}>
                                    Role
                                </small>
                            </td>
                            <td>
                                <a href="#" className="p-2 mx-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                    <Visibility style={{ color: '#0BB783', fontSize: 16}} />
                                </a>
                                <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                    <NewReleases style={{ color: '#0BB783', fontSize: 16}} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination itemsCount={managers && managers.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange} />
        </div>
    );
}

export default UserTable;