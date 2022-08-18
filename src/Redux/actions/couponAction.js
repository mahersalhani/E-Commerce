import { copunAction } from "./../reducers/couponReducer";
import { useGetDataToken } from "./../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

// create a new brand
export const addNewCoupon = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/coupons`, data);

      dispatch(copunAction.createBrand(respon));
    } catch (err) {
      dispatch(copunAction.getError(err));
    }
  };
};

// create a new brand
export const getAllCoupon = () => {
  return async (dispatch) => {
    try {
      const respon = await useGetDataToken(`/api/v1/coupons`);

      dispatch(copunAction.getAllCoupon(respon));
    } catch (err) {
      dispatch(copunAction.getError(err));
    }
  };
};

// create a new brand
export const deleteCoupon = (copoun) => {
  return async (dispatch) => {
    try {
      const respon = await useDeleteData(`/api/v1/coupons/${copoun}`);

      dispatch(copunAction.deleteCoupon(respon));
    } catch (err) {
      dispatch(copunAction.getError(err));
    }
  };
};

// get on coupon
export const getOneCoupon = (copoun) => {
  return async (dispatch) => {
    try {
      const respon = await useGetDataToken(`/api/v1/coupons/${copoun}`);

      dispatch(copunAction.getOneCoupon(respon));
    } catch (err) {
      dispatch(copunAction.getError(err));
    }
  };
};

// update coupon
export const updateOneCoupon = (copoun, data) => {
  return async (dispatch) => {
    try {
      console.log(1);
      const respon = await useUpdateData(`/api/v1/coupons/${copoun}`, data);

      dispatch(copunAction.updateOneCoupon(respon));
    } catch (err) {
      dispatch(copunAction.getError(err));
    }
  };
};
