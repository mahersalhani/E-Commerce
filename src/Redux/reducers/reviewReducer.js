import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  createReview: [],
  deleteReviews: [],
  updateReview: [],
  error: [],
  loading: true,
};

const reviewReducer = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {
    createReview(state, action) {
      return {
        ...state,
        createReview: action.payload,
        error: [],
        loading: false,
      };
    },
    getAllReviews(state, action) {
      return {
        ...state,
        reviews: action.payload,
        error: [],
        loading: false,
      };
    },
    deleteReviews(state, action) {
      return {
        ...state,
        deleteReviews: action.payload,
        error: [],
        loading: false,
      };
    },
    updateReview(state, action) {
      return {
        ...state,
        updateReview: action.payload,
        error: [],
        loading: false,
      };
    },
    getError(state, action) {
      return {
        ...state,
        error: action.payload,
        loading: true,
      };
    },
  },
});

export const reviewAction = reviewReducer.actions;

export default reviewReducer.reducer;
