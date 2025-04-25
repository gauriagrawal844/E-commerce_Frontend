import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import wishlistReducer from './slices/wishlistSlice';
import reviewsReducer from './slices/reviewsSlice';
import compareReducer from './slices/compareSlice';
import recentlyViewedReducer from './slices/recentlyViewedSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    reviews: reviewsReducer,
    compare: compareReducer,
    recentlyViewed: recentlyViewedReducer,
  },
}); 