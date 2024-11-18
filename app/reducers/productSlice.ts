import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  loading: boolean;
  products: any[];
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;