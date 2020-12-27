import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
    name: 'import',
    initialState: {
        list: [],
        specificList: []
    },
    reducers: {
        importSuccess: (imports, action) => {
            imports.list = action.payload
        },
        importSpecific: (imports, action) => {
            imports.specificList = action.payload
        },
        importAdded: (imports, action) => {
            imports.list.push(action.payload);
        }
    }
});

export const { importSuccess, importSpecific, importAdded } = slice.actions;
export default slice.reducer;

export const addImport = (imports) => apiCallBegan({
    url: "/createImport",
    method: "post",
    data: imports,
    onSuccess: importAdded.type,
});

export const viewImport = () => apiCallBegan({
    url: '/viewAllImports',
    onSuccess: importSuccess.type,
});

export const viewSpecific = id => apiCallBegan({
    url: '/viewSpecificProductImport/' + id,
    onSuccess: importSpecific.type,
})