import { wishlistAction } from "./../reducers/wishlistReducer";
import useGetData, { useGetDataToken } from "./../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

// add prod to wishlist
export const addProductToWishlist = (body) => {
  return async (dispatch) => {
    try {
      const respon = await useInsertData(`/api/v1/wishlist`, body);

      dispatch(wishlistAction.addProductToWishlist(respon));
    } catch (err) {
      dispatch(wishlistAction.getError(err));
    }
  };
};

// get wishlist  product
export const getProdWishlist = () => {
  return async (dispatch) => {
    try {
      const respon = await useGetDataToken(`/api/v1/wishlist`);

      dispatch(wishlistAction.userWishList(respon));
    } catch (err) {
      dispatch(wishlistAction.getError(err));
    }
  };
};

// remove product from wishlist
export const removeProductFromWishlist = (prodId) => {
  return async (dispatch) => {
    try {
      const respon = await useDeleteData(`/api/v1/wishlist/${prodId}`);

      dispatch(wishlistAction.removeProductFromWishlist(respon));
    } catch (err) {
      dispatch(wishlistAction.getError(err));
    }
  };
};
