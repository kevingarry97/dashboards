import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice  = createSlice({
    name: 'expense',
    initialState: {
        list: [],
    },
    reducers: {
        expenseAdded: (expenses, action) => {
            expenses.list.push(action.payload)
        },
        expenseSuccess: (expenses, action) => {
            expenses.list = action.payload
        },
    }
});

export const { expenseAdded, expenseSuccess } = slice.actions;
export default slice.reducer;

export const addExpense = (expense) => apiCallBegan({
    url: "/createNewExpense",
    method: "post",
    data: expense,
    onSuccess: expenseAdded.type,
})

export const viewExpense = () => apiCallBegan({
    url: "/viewAllMyExpenses",
    onSuccess: expenseSuccess.type,
})