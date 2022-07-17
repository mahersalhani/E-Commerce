import { brandAction } from "./../reducers/brandReducer";
import useGetData from "./../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";

// get all brands
export const getAllBrand = (limit, page) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/brands?limit=${limit}&page=${page}`);

      dispatch(brandAction.getAllBrands(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(brandAction.getError(error));
    }
  };
};

// create a new brand
export const createNewBrand = (formData) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertDataWithImage(`/api/v1/brands`, formData);

      dispatch(brandAction.createBrand([respon.status]));
    } catch (err) {
      const error = "error " + err;

      dispatch(brandAction.getError(error));
    }
  };
};

// create a new brand
export const getOneBrand = (id) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/brands/${id}`);

      dispatch(brandAction.getOneBrand(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(brandAction.getError(error));
    }
  };
};
