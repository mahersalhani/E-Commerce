// import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subCategoryReducer";
import brandReducer from "./brandReducer";

const rootReducer = {
  Brand: brandReducer,
  allCategory: categoryReducer,
  subCategory: subcategoryReducer,
};

export default rootReducer;
