import React, { useState } from 'react';
import { Visibility } from '@material-ui/icons';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { getSpecificBranch } from '../../services/branchService';

function ExpenseTable({expense}) {
    const [open, setOpen] = useState(false);
    const [branch, setBranch] = useState({});

    const handleOpen = async (id) => {
        setOpen(true);
        const {data} = await getSpecificBranch(id);
        setBranch(data);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
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
                                    <a href="#" className="p-2" style={{ backgroundColor: '#F3F6F9', borderRadius: 6}} onClick={() => handleOpen(ex.branch?.id)}>
                                        <Visibility style={{ color: '#0BB783', fontSize: 18}} />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Branches
                    <p className="mt-0" style={{ fontSize: 15, color: '#b7c3c4'}}><small>You see where the product is located.</small></p> 
                </DialogTitle>
                <DialogContent>
                    <h6 className="font-weight-bold text-muted mb-3">About Branch ?</h6>
                    <div className="clearfix">
                        <div className="float-left mr-5 pr-5">
                            <small className="text-muted">Owner: <strong style={{ color: '#98AECA'}}>{branch.user.full_Names}</strong></small>
                            <br/>
                            <small className="text-muted">Email: <strong style={{ color: '#98AECA'}}>{branch.user.email}</strong></small>
                            <br/>
                            <small className="text-muted">Phone: <strong style={{ color: '#98AECA'}}>{branch.user.phone_no}</strong></small>
                        </div>
                        <div className="float-right ml-5 pl-5">
                            <small className="text-muted">Branch name: <strong style={{ color: '#98AECA'}}>{branch.name}</strong></small>
                            <br/>
                            <small className="text-muted">Location: <strong style={{ color: '#98AECA'}}>{branch.location}</strong></small>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ExpenseTable;