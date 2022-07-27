import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { authAction } from "./../reducers/authReducer";

// Create new user
export const createNewUser = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/auth/signup`, data);

      dispatch(authAction.createUser(respon));
    } catch (err) {
      dispatch(authAction.getRegestError(err.response));
    }
  };
};

// login user
export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/auth/login`, data);

      dispatch(authAction.loginUser(respon));
    } catch (err) {
      dispatch(authAction.getError(err.response));
    }
  };
};

// forget password
export const forgetPasswordUser = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/auth/forgotPassword`, data);

      dispatch(authAction.forgetPasswordUser(respon));
    } catch (err) {
      dispatch(authAction.getError(err));
    }
  };
};

// verify code
export const verifyCodeUser = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/auth/verifyResetCode`, data);

      dispatch(authAction.verifyCodeUser(respon));
    } catch (err) {
      dispatch(authAction.getError(err.response));
    }
  };
};

// reser password
export const resetPasswordUser = (data) => {
  return async (dispatch) => {
    try {
      const respon = await useUpdateData(`/api/v1/auth/resetPassword`, data);

      dispatch(authAction.resetPasswordUser(respon));
    } catch (err) {
      dispatch(authAction.getError(err.response));
    }
  };
};
