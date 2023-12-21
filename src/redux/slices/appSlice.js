import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateUser, updateLoginStatus } = appSlice.actions;
export default appSlice.reducer;
