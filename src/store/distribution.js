import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
    name: 'Distribution',
    initialState: {
        list: [],
        distributionSpecific: [],
        distributionProduct: []
    },
    reducers: {
        distributionSuccess: (dists, action) => {
            dists.list = action.payload;
        },
        distributionUnique: (dists, action) => {
            dists.distributionSpecific = action.payload
        },
        distributionProduct: (dists, action) => {
            dists.distributionProduct = action.payload
        },
        distributionAdded: (dists, action) => {
            dists.list.push(action.payload);
        }
    }
});

export const { distributionSuccess, distributionUnique, distributionProduct, distributionAdded } = slice.actions;
export default slice.reducer;

export const addDistribution = distribution => apiCallBegan({
    url: "/createDistribution",
    method: "post",
    data: distribution,
    onSuccess: distributionAdded.type,
})

export const viewDistribution = () => apiCallBegan({
    url: '/viewAllDistributions',
    onSuccess: distributionSuccess.type
})

export const viewDistributionSpecific = id => apiCallBegan({
    url: '/viewDistributionsPerBranch/' + id,
    onSuccess: distributionUnique.type
})

export const viewDistributionProduct = id => apiCallBegan({
    url: '/viewDistributionsPerProduct/' + id,
    onSuccess: distributionProduct.type
})