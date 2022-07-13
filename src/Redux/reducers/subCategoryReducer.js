import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcategory: [],
  loading: true,
};

const subCategoryReducer = createSlice({
  name: "subcategory",
  initialState,
  reducers: {
    createSubCategory(state, action) {
      return {
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
  },
});

export const subCategoryAction = subCategoryReducer.actions;

export default subCategoryReducer.reducer;
