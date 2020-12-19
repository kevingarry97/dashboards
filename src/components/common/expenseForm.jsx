import React from 'react';

const ExpenseForm = () => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="">Price</label>
                <input type="number" className="form-control" placeholder="Price" />
            </div> 
            <div className="form-group">
                <textarea name="" rows="5" className="form-control" placeholder="Expense Description"></textarea>
            </div> 
        </form>
    );
}

export default ExpenseForm;