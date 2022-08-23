import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  creatUser: [],
  loginUser: [],
  forgetPass: [],
  verifyCodeUser: [],
  resetPasswordUser: [],
  error: [],
  updatedUserData: [],
  updatedPass: [],
  loading: true,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    createUser(state, action) {
      return {
        ...state,
        creatUser: action.payload,
        loading: false,
      };
    },
    loginUser(state, action) {
      return {
        ...state,
        loginUser: action.payload,
        error: [],
        loading: false,
      };
    },
    forgetPasswordUser(state, action) {
      return {
        ...state,
        forgetPass: action.payload,
        error: [],
        loading: false,
      };
    },
    verifyCodeUser(state, action) {
      return {
        ...state,
        verifyCodeUser: action.payload,
        error: [],
        loading: false,
      };
    },
    resetPasswordUser(state, action) {
      return {
        ...state,
        resetPasswordUser: action.payload,
        error: [],
        loading: false,
      };
    },
    getRegestError(state, action) {
      return {
        creatUser: action.payload,
        loading: true,
      };
    },
    updateUserData(state, action) {
      return {
        ...state,
        updatedUserData: action.payload,
        loading: true,
      };
    },
    updateUserPassword(state, action) {
      return {
        ...state,
        updatedPass: action.payload,
        error: [],
      };
    },
    getError(state, action) {
      return {
        error: action.payload,
        loading: true,
      };
    },
  },
});

export const authAction = authReducer.actions;

export default authReducer.reducer;
