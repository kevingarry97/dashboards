import React from 'react';
import { Visibility } from '@material-ui/icons';

const ImportTable = ({imports, onClick}) => {
    return (
        <div className="table-responsive my-3">
            <table className="table table-hover">
                <tbody>
                    {imports && imports.map(imp => (
                        <tr key={imp.id}>
                            <td>
                                <small style={{ color: '#98AECA'}}># {imp.id}</small>
                            </td>
                            <td>
                                <small>{imp.product.name}</small>
                            </td>
                            <td>
                                <small>Rwf {imp.amount}</small>
                                <br/>
                                <small style={{ color: '#98AECA'}}>Amount</small>
                            </td>
                            <td>
                                <small>{imp.description}</small>
                                <br/>
                                <small style={{ color: '#98AECA'}}>Description</small>
                            </td>
                            <td onClick={onClick}>
                                <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}}>
                                    <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                </a>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ImportTable;