import { createSelector, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
  },
});

export const { setIsSignedIn } = authSlice.actions;
export default authSlice.reducer;

export const selectIsSignedIn = createSelector((state) => state.auth.isSignedIn);
