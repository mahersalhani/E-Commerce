import { categoryAction } from "./../reducers/categoryReducer";
import useGetData from "./../../hooks/useGetData";

export const getAllCategory = () => {
  return async (dispatch) => {
    try {
      // const res = await baseUrl.get("/api/v1/categories");

      const respon = await useGetData("/api/v1/categories");

      dispatch(categoryAction.getAllCategory(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(categoryAction.getError(error));
    }
  };
};
