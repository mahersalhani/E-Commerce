import { addressAction } from "./../reducers/adressReducer";
import { useGetDataToken } from "./../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

// create a new address
export const createNewAddress = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/addresses`, data);

      dispatch(addressAction.createAddress(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(addressAction.getError(error));
    }
  };
};

// get all addresses
export const getAllAddresses = () => {
  return async (dispatch) => {
    try {
      const respon = await useGetDataToken(`/api/v1/addresses`);

      dispatch(addressAction.getAllAddresses(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(addressAction.getError(error));
    }
  };
};

// get all addresses
export const deleteAddress = (Id) => {
  return async (dispatch) => {
    try {
      const respon = await useDeleteData(`/api/v1/addresses/${Id}`);

      dispatch(addressAction.deleteAddress(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(addressAction.getError(error));
    }
  };
};

// get one address
export const getOneAddress = (Id) => {
  return async (dispatch) => {
    try {
      const respon = await useGetDataToken(`/api/v1/addresses/${Id}`);

      dispatch(addressAction.getOneAddress(respon));
    } catch (err) {
      const error = "error " + err;

      dispatch(addressAction.getError(error));
    }
  };
};

// get one address
export const updateAddress = (Id, data) => {
  return async (dispatch) => {
    try {
      await useUpdateData(`/api/v1/addresses/${Id}`, data);

      dispatch(addressAction.updateAddress(["updated"]));
    } catch (err) {
      const error = "error " + err;

      dispatch(addressAction.getError(error));
    }
  };
};
