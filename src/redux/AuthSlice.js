import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = AuthSlice.actions;
export default AuthSlice;
