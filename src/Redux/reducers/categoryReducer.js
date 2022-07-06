import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  loading: true,
};

const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    getAllCategory(state, action) {
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    },
    getError(state, action) {
      return {
        category: action.payload,
        loading: true,
      };
    },
  },
});

export const categoryAction = categoryReducer.actions;

export default categoryReducer.reducer;
