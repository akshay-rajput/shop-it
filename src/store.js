import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/products/productsSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
      productList: productsReducer,
      cart: cartReducer,
  },
});