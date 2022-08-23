import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotify";
import { updateReview } from "./../../Redux/actions/reviewActions";

const EditRateHook = (review) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [newRateText, setnewRateText] = useState(review.title);
  const [newRateValue, setnewRateValue] = useState(review.ratings);

  const res = useSelector((state) => state.review.updateReview);
  const error = useSelector((state) => state.review.error);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const onChangeRateText = (e) => {
    setnewRateText(e.target.value);
  };

  const onChangeRateValue = (e) => {
    setnewRateValue(e);
  };

  const handelEdit = async () => {
    if (newRateText === "") {
      return notify("يرجى اضافة تقييم", "warn");
    }
    if (newRateValue < 1) {
      return notify("تقييم يجن ان يكون على الاقل نجمة", "warn");
    }

    const body = {
      title: newRateText,
      ratings: newRateValue,
    };

    setLoading(true);
    await dispatch(updateReview(review._id, body));
    setLoading(false);
    handleCloseEdit();
  };

  useEffect(() => {
    if (!loading) {
      if (res.status === 201) {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
      if (error.length > 0) {
        notify("حدث مشكلة بعملية التحديث", "error");
      }
    }
  }, [loading]);

  return [
    //
    showEdit,
    onChangeRateText,
    onChangeRateValue,

    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    newRateText,
    newRateValue,
  ];
};

export default EditRateHook;
