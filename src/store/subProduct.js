import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice  = createSlice({
    name: 'subProduct',
    initialState: {
        list: []
    },
    reducers: {
        subProductAdded: (subs, action) => {
            subs.list.push(action.payload)
        },
        subProductSuccess: (subs, action) => {
            subs.list = action.payload
        },
    }
});

export const { subProductAdded, subProductSuccess } = slice.actions;
export default slice.reducer;

export const addSubProduct = (subProduct) => apiCallBegan({
    url: "/createNewSubproduct",
    method: "post",
    data: subProduct,
    onSuccess: subProductAdded.type,
})

export const ViewSubProduct = () => apiCallBegan({
    url: "/viewMySubProducts",
    onSuccess: subProductSuccess.type,
})