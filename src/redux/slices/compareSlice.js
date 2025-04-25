import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Array of products to compare
  maxItems: 4,  // Maximum number of items that can be compared
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToCompare(state, action) {
      const product = action.payload;
      if (
        state.items.length < state.maxItems &&
        !state.items.some(item => item.id === product.id)
      ) {
        state.items.push(product);
      }
    },
    removeFromCompare(state, action) {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    clearCompare(state) {
      state.items = [];
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer; 