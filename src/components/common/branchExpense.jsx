import React from 'react';
import { Visibility } from '@material-ui/icons';

const BranchExpense = ({expense}) => {
    return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <tbody>
                        {expense.map(ex => (
                            <tr key={ex.id}>
                                <td>
                                    <strong style={{ color: '#98AECA'}}># {ex.id}</strong>
                                </td>   
                                <td>
                                    <small>
                                        <strong style={{ color: '#6D767E'}}>{ex.branch?.name}</strong>
                                        <small className="font-weight-normal ml-3" style={{ color: '#7B838A'}}>{ex.created_at}</small> 
                                    </small>
                                    <br/>
                                    <small style={{ color: '#7B838A'}}>{ex.description}</small>
                                </td>
                                <td>
                                    <small style={{ color: '#A4B0B7'}}>Amount</small>
                                    <p style={{ color: '#8B9298'}}><small>Rwf</small> {ex.amount}</p>
                                </td>
                                <td className="pt-4">
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

export default BranchExpense;