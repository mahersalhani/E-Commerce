import { categoryAction } from "./../reducers/categoryReducer";
import useGetData from "./../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

// get all category
export const getAllCategory = (limit, page) => {
  return async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");

      const respon = await useGetData(`/api/v1/categories?limit=${limit}&page=${page}`);

      dispatch(categoryAction.getAllCategory(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(categoryAction.getError(error));
    }
  };
};

// create a new category
export const createNewCategory = (formData) => {
  return async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");

      const respon = await useInsertDataWithImage(`/api/v1/categories`, formData);

      dispatch(categoryAction.createCategory([respon.status]));
    } catch (err) {
      const error = "error " + err;

      dispatch(categoryAction.getError(error));
    }
  };
};
