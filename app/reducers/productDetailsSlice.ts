import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductDetailsState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailsState = {
  product: null,
  loading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    fetchProductStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.product = action.payload;
    },
    fetchProductFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;