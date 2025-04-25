import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviews: {},  // Object with productId as key and array of reviews as value
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview(state, action) {
      const { productId, review } = action.payload;
      if (!state.reviews[productId]) {
        state.reviews[productId] = [];
      }
      state.reviews[productId].push({
        ...review,
        id: Date.now(),
        date: new Date().toISOString(),
      });
    },
    deleteReview(state, action) {
      const { productId, reviewId } = action.payload;
      if (state.reviews[productId]) {
        state.reviews[productId] = state.reviews[productId].filter(
          review => review.id !== reviewId
        );
      }
    },
    updateReview(state, action) {
      const { productId, reviewId, updatedReview } = action.payload;
      if (state.reviews[productId]) {
        const index = state.reviews[productId].findIndex(
          review => review.id === reviewId
        );
        if (index !== -1) {
          state.reviews[productId][index] = {
            ...state.reviews[productId][index],
            ...updatedReview,
            edited: true,
          };
        }
      }
    },
  },
});

export const { addReview, deleteReview, updateReview } = reviewsSlice.actions;
export default reviewsSlice.reducer; 