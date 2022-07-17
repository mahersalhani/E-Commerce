// import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subCategoryReducer";
import brandReducer from "./brandReducer";
import productReducer from "./productsReducer";

const rootReducer = {
  Brand: brandReducer,
  allCategory: categoryReducer,
  subCategory: subcategoryReducer,
  product: productReducer,
};

export default rootReducer;
