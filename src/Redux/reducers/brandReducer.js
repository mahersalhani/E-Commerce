import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: [],
  oneBrand: [],
  loading: true,
};

const brandReducer = createSlice({
  name: "brand",
  initialState: initialState,
  reducers: {
    getAllBrands(state, action) {
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    },
    getError(state, action) {
      return {
        brand: action.payload,
        loading: true,
      };
    },
    createBrand(state, action) {
      return {
        brand: action.payload,
        loading: false,
      };
    },
    getOneBrand(state, action) {
      return {
        brand: [],
        oneBrand: action.payload,
        loading: false,
      };
    },
  },
});

export const brandAction = brandReducer.actions;

export default brandReducer.reducer;
