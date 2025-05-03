import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("userData"));

const initialState = {
  user: storedUser || null,
  isAuthenticated: !!storedUser, // ✅ Converts storedUser to true/false
};
console.log(initialState);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("userData", JSON.stringify(state.user)); // ✅ Add this
    }
    ,
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("userData")
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = false; 
      localStorage.setItem("userData", JSON.stringify(state.user));
    }
    
  },
});

export const { loginSuccess, logout, signupSuccess } = authSlice.actions;
export default authSlice.reducer;
