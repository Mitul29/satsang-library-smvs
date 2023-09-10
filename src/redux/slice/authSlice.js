import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  sessionId: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      const { user, sessionId } = action.payload;
      state.user = user;
      state.sessionId = sessionId;
      localStorage.setItem("session", sessionId);
      state.isAuthenticated = true;
    },
    resetAuthData: (state) => {
      state.user = null;
      state.sessionId = null;
      localStorage.removeItem("session");
      state.isAuthenticated = false;
    },
  },
});

export const selectLoggedInUser = (state) => state.auth.user;
export const selectSessionId = (state) => state.auth.sessionId;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export const { setAuthData, resetAuthData } = authSlice.actions;

export const { reducer } = authSlice;
