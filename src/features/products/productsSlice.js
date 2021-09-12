import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
        let og_products = action.payload.slice().sort((first, next) => first.price - next.price);
        state.products = og_products
    },
    
    clearFilters: (state) => {
        state.appliedFilters = {};
        state.filteredProducts = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProducts } = productsSlice.actions

export default productsSlice.reducer;