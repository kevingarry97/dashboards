import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './product';
import branchReducer from './branch';
import managerReducer from './manager';
import distributionReducer from './distribution';
import importReducer from './import';
import subProductReducer from './subProduct';
import expenseReducer from './expense';

export default combineReducers({
    product: productsReducer,
    branches: branchReducer,
    manager: managerReducer,
    distribution: distributionReducer,
    import: importReducer,
    subProduct: subProductReducer,
    expense: expenseReducer
});