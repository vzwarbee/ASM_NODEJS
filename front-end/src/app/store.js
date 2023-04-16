import { configureStore } from '@reduxjs/toolkit';
import authR from '../feature/user/userSlice';
import productSlice from '../../src/feature/product/productSlice';
import prodCateR from '../feature/proCate/prodCateSlice';
export const store = configureStore({
  reducer: { auth: authR, product: productSlice, prodCate: prodCateR },
})