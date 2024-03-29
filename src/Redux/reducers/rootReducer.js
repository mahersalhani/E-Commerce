// import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subCategoryReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productsReducer";
import authReducer from "./authReducer";
import reviewReducer from "./../reducers/reviewReducer";
import wishlistReducer from "./../reducers/wishlistReducer";
import couponReducer from "./../reducers/couponReducer";
import adressReducer from "./../reducers/adressReducer";

const rootReducer = {
  Brand: brandReducer,
  allCategory: categoryReducer,
  subCategory: subcategoryReducer,
  product: productReducer,
  auth: authReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
  coupon: couponReducer,
  address: adressReducer,
};

export default rootReducer;
