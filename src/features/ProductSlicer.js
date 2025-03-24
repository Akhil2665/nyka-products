import { createSlice } from '@reduxjs/toolkit';
import products from '../components/Data/Products';


const initialState = {
  products: products
};

const ProductSlicer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // We'll add reducers in later assignments
  },
});

export const selectAllProducts = (state) => state.products.products;

export default ProductSlicer.reducer;
