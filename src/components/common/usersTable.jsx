import React, { Component } from 'react';
import { NewReleases, Visibility } from '@material-ui/icons';

class UserTable extends Component {
    columns = [
        { path: 'id', label: '#' },
        { path: 'phone_no', label: 'Phone' },
        { path: 'role', label: 'Role' }
    ];

    render() { 
        const { users } = this.props;
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
                                </td>
                                <td>
                                    <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{manager.phone_no}</p>
                                </td>
                                <td>
                                    <p className="mb-0" style={{ color: '#6D767E', fontWeight: '500'}}>{manager.email}</p>
                                </td>
                                <td>
                                    <p className="mb-0" style={{ color: '#8B9298'}}>{manager.role}</p>
                                    <small style={{ color: '#8B9298'}}>
                                        Role
                                    </small>
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ); 
    }
}
 
export default UserTable;