import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordUser } from "./../../Redux/actions/authAction";
import { useParams } from "react-router-dom";
import { createReview } from "./../../Redux/actions/reviewActions";

const AddRateHook = (prodId) => {
  const dispatch = useDispatch();

  const [rateText, setRateText] = useState("");
  const [rateValue, setRateValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.review.createReview);
  const error = useSelector((state) => state.review.error);

  const onChangeRateText = (e) => {
    setRateText(e.target.value);
  };
  const onChangeRateValue = (val) => {
    setRateValue(val);
  };

  let user = "";

  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const onSubmit = async () => {
    if (rateText === "") {
      notify("من فضلك ادخل تعليقك", "error");
      return;
    }
    if (rateValue < 1) {
      notify("تقيمك يجب ان يكون نجمة على الاقل", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      createReview(prodId, {
        title: rateText,
        ratings: rateValue,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === 201) {
          notify("تم اضافة التقييم بنجاح", "success");
          setTimeout(() => {
            window.location.reload(false);
          }, 2000);
        }
      }
      if (error) {
        if (error.response)
          if (error.response.status && error.response.status === 400) {
            notify("لقد اضفت تقييم مسبقا", "warn");
          }
      }
    }
  }, [loading]);

  return [
    //
    onChangeRateText,
    onChangeRateValue,
    onSubmit,

    user,

    rateText,
    rateValue,
  ];
};

export default AddRateHook;
