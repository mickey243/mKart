import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: [],
};
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      const username = action.payload;
      state.isAuthenticated = true;
      state.user.push({
        id: username.id,
        fname: username.fname,
        lname: username.lname,
        email: username.email,
        password: username.password,
        admin: username.admin,
      });
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = [];
    },
  },
});

export const authAction = AuthSlice.actions;
export default AuthSlice;
