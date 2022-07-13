import { userInsertData } from "../../hooks/useInsertData";
import { subCategoryAction } from "./../reducers/subCategoryReducer";

// create a new category
export const createNewSubCategory = (data) => {
  return async (dispatch) => {
    try {
      const respon = await userInsertData(`/api/v1/subCategories`, data);

      dispatch(subCategoryAction.createSubCategory(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(subCategoryAction.getErrors(error));
    }
  };
};
