import { useInsertData } from "../../hooks/useInsertData";
import { subCategoryAction } from "./../reducers/subCategoryReducer";
import useGetData from "./../../hooks/useGetData";

// create a new SubCategory
export const createNewSubCategory = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/subCategories`, data);

      dispatch(subCategoryAction.createSubCategory(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(subCategoryAction.getErrors(error));
    }
  };
};

// get  SubCategories depend on category id
export const getOnCategoryId = (id) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/categories/${id}/subcategory`);

      dispatch(subCategoryAction.getSubCategory(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(subCategoryAction.getErrors(error));
    }
  };
};
