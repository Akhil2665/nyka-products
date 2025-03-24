import { configureStore } from '@reduxjs/toolkit';
   import ProductSlicer from '../src/features/ProductSlicer'
   
   export const store = configureStore({
     reducer: {
       products: ProductSlicer,
     },
   });
   