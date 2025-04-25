import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Array of recently viewed products
  maxItems: 10,  // Maximum number of items to keep in history
};

const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState,
  reducers: {
    addToRecentlyViewed(state, action) {
      const product = action.payload;
      // Remove if product already exists
      state.items = state.items.filter(item => item.id !== product.id);
      // Add to front of array
      state.items.unshift(product);
      // Keep only the last maxItems
      if (state.items.length > state.maxItems) {
        state.items = state.items.slice(0, state.maxItems);
      }
    },
    clearRecentlyViewed(state) {
      state.items = [];
    },
  },
});

export const { addToRecentlyViewed, clearRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer; 