import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addwishlist: [],
  removewishlist: [],
  userWishList: [],
  error: [],
};

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addProductToWishlist(state, action) {
      return {
        ...state,
        addwishlist: action.payload,
        removewishlist: [],
        error: [],
      };
    },
    removeProductFromWishlist(state, action) {
      return {
        ...state,
        addwishlist: [],
        removewishlist: action.payload,
        error: [],
      };
    },
    userWishList(state, action) {
      return {
        userWishList: action.payload,
        error: [],
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

export const wishlistAction = wishlistReducer.actions;

export default wishlistReducer.reducer;
