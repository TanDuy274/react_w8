import { configureStore } from '@reduxjs/toolkit';
import PostSlice from '../components/AddPostItem/PostSlice';

const store = configureStore({
  reducer: {
    posts: PostSlice,
  },
});

export default store;
