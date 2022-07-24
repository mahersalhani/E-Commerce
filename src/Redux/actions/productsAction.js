import { useInsertDataWithImage } from "../../hooks/useInsertData";
import useGetData from "./../../hooks/useGetData";
import { productAction } from "./../reducers/productsReducer";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

export const getAllProducts = (limit, page) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/products?limit=${limit}&page=${page}`);

      dispatch(productAction.getAllProduct(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

// get on prod with id
export const getOneProduct = (id) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/products/${id}`);

      dispatch(productAction.getOneProduct(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

// get on products on category ID
export const getProductsLike = (id) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/products?category=${id}`);

      dispatch(productAction.getProductsLike(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

// create a new products
export const createNewProduct = (formatData) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertDataWithImage(`/api/v1/products`, formatData);

      dispatch(productAction.createProduct(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const respon = await useDeleteData(`/api/v1/products/${id}`);

      dispatch(productAction.deleteProduct("تم الحذف بنجاح"));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

export const updateProduct = (id, formData) => {
  return async (dispatch) => {
    try {
      const respon = await useUpdateDataWithImage(`/api/v1/products/${id}`, formData);

      dispatch(productAction.updateProduct(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};

// get all prod with query params
export const getAllProductsSearch = (queryString) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/products?${queryString}`);

      dispatch(productAction.getAllProductSearch(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(productAction.getError(error));
    }
  };
};
