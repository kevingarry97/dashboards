import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'product',
  initialState: {
    list: [],
    specificProduct: []
  },
  reducers: {
    productSuccess: (products, action) => {
      products.list = action.payload
    },
    productSpecific: (products, action) => {
      products.list = action.payload
    },
    productAdded: (products, action) => {
      products.list.push(action.payload)
    },
    productUpdated: (products, action) => {
      const index = products.list.findIndex(p => p.id === action.payload);
      products.list[index] = action.payload
    }
  }
});

export const { productAdded, productSuccess, productSpecific, productUpdated } = slice.actions;
export default slice.reducer;

export const addProduct = product => {

  return (
    apiCallBegan({
    url: '/createNewProduct',
    method: "post",
    data: product,
    onSuccess: productAdded.type
  })
  )
    
} 

export const viewSpecificProduct = id => apiCallBegan({
  url: '/viewSpecificProduct/' + id,
  onSuccess: productSpecific.type
})

export const viewProduct = () => apiCallBegan({
  url: '/viewAllProducts',
  onSuccess: productSuccess.type
})

export const getProducts = (state) => state.entities.product.list.products;
