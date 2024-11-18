import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import productReducer from './reducers/productSlice';
import productDetailsReducer from './reducers/productDetailsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    productDetails: productDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;