import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  post: {},
  posts: []
}


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost: (state, action) => {
      const {payload} = action;
      state.post = payload;
    },
    setPosts: (state, action) => {
      const {payload} = action;
      state.posts = payload;
    }
  }
})

export const { setPost, setPosts } = postSlice.actions;

export default postSlice.reducer;