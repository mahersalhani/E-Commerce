import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  allProducts: [],
  productDetails: [],
  prodLike: [],
  deleteProd: [],
  updateProduct: [],
  loading: true,
};

const productsReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    },
    getAllProductSearch(state, action) {
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    },
    getError(state, action) {
      return {
        product: action.payload,
        loading: true,
      };
    },
    createProduct(state, action) {
      return {
        product: action.payload,
        loading: false,
      };
    },
    getOneProduct(state, action) {
      return {
        ...state,
        productDetails: action.payload,
        loading: false,
      };
    },
    getProductsLike(state, action) {
      return {
        ...state,
        prodLike: action.payload,
        loading: false,
      };
    },
    deleteProduct(state, action) {
      return {
        ...state,
        deleteProd: action.payload,
        loading: false,
      };
    },
    updateProduct(state, action) {
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    },
  },
});

export const productAction = productsReducer.actions;

export default productsReducer.reducer;
