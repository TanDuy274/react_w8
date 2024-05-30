import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = postSlice;

export const fetchPosts = createAsyncThunk(
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json),
);

export const { createPostList, addPost, removePost } = actions;
export default reducer;
