import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice  = createSlice({
    name: 'Branch',
    initialState: {
        list: [],
        specificBranch: []
    },
    reducers: {
        branchSpecific: (branches, action) => {
            branches.specificBranch = action.payload
        },
        branchSuccess: (branches, action) => {
            branches.list = action.payload
        },
        branchAdded: (branches, action) => {
            branches.branch.push(action.payload)
        }
    }
});

export const { branchAdded, branchSuccess, branchSpecific } = slice.actions;
export default slice.reducer;

export const addBranch = (branch) => apiCallBegan({
    url: "/createNewBranch",
    method: "post",
    data: branch,
    onSuccess: branchAdded.type,
})

export const ViewBranch = () => apiCallBegan({
    url: "/viewAllBranches",
    onSuccess: branchSuccess.type,
})

export const viewSpecificBranch = (id) => apiCallBegan({
    url: "/viewSpecificBranch/" + id,
    onSuccess: branchSpecific.type,
})

export const getBranches = state => state.entities.branches.list.branches