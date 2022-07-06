// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// const initailState = {};
// const meddleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
});

export default store;
