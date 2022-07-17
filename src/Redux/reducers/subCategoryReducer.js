import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcategory: [],
  subcategoryOnId: [],
  loading: true,
};

const subCategoryReducer = createSlice({
  name: "subcategory",
  initialState,
  reducers: {
    createSubCategory(state, action) {
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };
    },
    getErrors(state, action) {
      return {
        subcategory: action.payload,
        loading: true,
      };
    },
    getSubCategory(state, action) {
      return {
        subcategoryOnId: action.payload,
        loading: false,
      };
    },
  },
});

export const subCategoryAction = subCategoryReducer.actions;

export default subCategoryReducer.reducer;
