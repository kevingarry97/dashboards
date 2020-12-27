import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
    name: 'manager',
    initialState: {
        manager: []
    },
    reducers: {
        userSuccess: (managers, action) => {
            managers.manager = action.payload;
        },
        userCreate: (managers, action) => {
            managers.manager.push(action.payload);
        }
    }
});

export const { userSuccess, userCreate } = slice.actions;
export default slice.reducer;

export const addManager = (manager) => apiCallBegan({
    url: "/createNewBranchManager",
    method: "post",
    data: manager,
    onSuccess: userCreate.type,
});

export const viewManager = () => apiCallBegan({
    url: '/viewAllBranchManagers',
    onSuccess: userSuccess.type
});

export const getManagers = state => state.entities.manager.manager['branch Managers'];