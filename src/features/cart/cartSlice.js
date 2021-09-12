import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  savedItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        let updatedCart = [...state.cartItems];
        updatedCart.push(action.payload);
        state.cartItems = updatedCart;
    },
    updateItemInCart: (state, action) => {
      let indexOfItem = state.cartItems.findIndex(item => item._id === action.payload._id);
      console.log("found: ", indexOfItem);
      if(indexOfItem > -1){
        state.cartItems[indexOfItem] = action.payload;
      }
    },
    removeFromCart: (state, action)=>{
      let updatedCart = state.cartItems.filter(item => item._id !== action.payload._id);
      state.cartItems = updatedCart;
    },
    saveProduct: (state, action) => {
      let updatedSavedList = [...state.savedItems];
      updatedSavedList.push(action.payload);
      state.savedItems = updatedSavedList;
    },
    unsaveProduct: (state, action)=>{
      let updatedSavedList = state.savedItems.filter(item => item._id !== action.payload._id);
      state.savedItems = updatedSavedList;
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateItemInCart, removeFromCart, saveProduct, unsaveProduct } = cartSlice.actions

export default cartSlice.reducer;