import { reviewAction } from "./../reducers/reviewReducer";
import useGetData from "./../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const createReview = (prodId, body) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/products/${prodId}/reviews`, body);

      dispatch(reviewAction.createReview(respon));
    } catch (err) {
      dispatch(reviewAction.getError(err));
    }
  };
};

// get all reviews to one prod
export const getAllReviews = (prodId, page, limit) => {
  return async (dispatch) => {
    try {
      const respon = await useGetData(`/api/v1/products/${prodId}/reviews?page=${page}&limit=${limit}`);
      dispatch(reviewAction.getAllReviews(respon));
    } catch (err) {
      dispatch(reviewAction.getError(err));
    }
  };
};

// delete review
export const deleteReviews = (reviwId) => {
  return async (dispatch) => {
    try {
      const respon = await useDeleteData(`/api/v1/reviews/${reviwId}`);

      dispatch(reviewAction.deleteReviews(respon));
    } catch (err) {
      console.log(err);

      dispatch(reviewAction.getError(err));
    }
  };
};

// delete review
export const updateReview = (reviwId, body) => {
  return async (dispatch) => {
    try {
      const respon = await useUpdateData(`/api/v1/reviews/${reviwId}`, body);

      dispatch(reviewAction.updateReview(respon));
    } catch (err) {
      console.log(err);

      dispatch(reviewAction.getError(err));
    }
  };
};
