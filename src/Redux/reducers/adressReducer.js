import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: [],
  allAddresses: [],
  deleteAddress: [],
  oneAddress: [],
  updateAddress: [],
  error: [],
};

const addressReducer = createSlice({
  name: "address",
  initialState: initialState,
  reducers: {
    createAddress(state, action) {
      return {
        address: action.payload,
        error: [],
      };
    },
    getAllAddresses(state, action) {
      return {
        ...state,
        allAddresses: action.payload,
        error: [],
      };
    },
    deleteAddress(state, action) {
      return {
        ...state,
        deleteAddress: ["deleted"],
        error: [],
      };
    },
    getOneAddress(state, action) {
      return {
        ...state,
        oneAddress: action.payload,
        error: [],
      };
    },
    updateAddress(state, action) {
      return {
        ...state,
        updateAddress: action.payload,
        error: [],
      };
    },
    getError(state, action) {
      return {
        address: [],
        error: action.payload,
      };
    },
  },
});

export const addressAction = addressReducer.actions;

export default addressReducer.reducer;
