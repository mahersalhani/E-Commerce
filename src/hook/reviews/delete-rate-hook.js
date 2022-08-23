import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotify";
import { deleteReviews } from "./../../Redux/actions/reviewActions";

const DeleteRateHook = (user, id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

  const res = useSelector((state) => state.review.deleteReviews);
  const error = useSelector((state) => state.review.error);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  let loggedUser = {};

  if (JSON.parse(localStorage.getItem("user")) !== null) {
    loggedUser = JSON.parse(localStorage.getItem("user"));
  }

  let isUser = false;

  if (user._id === loggedUser.id || user._id === loggedUser._id) {
    isUser = true;
  }

  const handelDelete = async () => {
    setLoading(true);
    await dispatch(deleteReviews(id));
    setLoading(false);
    handleClose(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res === "") {
        notify("تم الحذف بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
      if (error) {
        if (error.length > 0) {
          notify("هناك مشكلة بعملية الحذف", "success");
        }
      }
    }
  }, [loading]);

  return [
    //
    isUser,
    showDelete,

    handleClose,
    handleShow,
    handelDelete,
  ];
};

export default DeleteRateHook;
