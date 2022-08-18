import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupon: [],
  allCoupon: [],
  deletedCoup: [],
  oneCoupon: [],
  editCoupon: [],
  error: [],
};

const couponReducer = createSlice({
  name: "coupon",
  initialState: initialState,
  reducers: {
    createBrand(state, action) {
      return {
        coupon: action.payload,
        allCoupon: [],
        deletedCoup: [],
        error: [],
      };
    },
    getError(state, action) {
      return {
        coupon: [],
        allCoupon: [],
        deletedCoup: [],
        error: action.payload,
      };
    },
    getAllCoupon(state, action) {
      return {
        coupon: [],
        allCoupon: action.payload,
        deletedCoup: [],
        error: [],
      };
    },
    getOneCoupon(state, action) {
      return {
        ...state,
        oneCoupon: action.payload,
        error: [],
      };
    },
    updateOneCoupon(state, action) {
      return {
        ...state,
        editCoupon: action.payload,
        error: [],
      };
    },
    deleteCoupon(state, action) {
      return {
        deletedCoup: action.payload,
        error: [],
      };
    },
  },
});

export const copunAction = couponReducer.actions;

export default couponReducer.reducer;
