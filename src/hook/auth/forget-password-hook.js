import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordUser } from "./../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const ForgetPasswordHook = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();
  const res = useSelector((state) => state.auth.forgetPass);
  const error = useSelector((state) => state.auth.error);

  const nav = useNavigate();

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("email", email);

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email === "") {
      return notify("من فضلك ادخل الايميل", "error");
    }
    if (!email.match(validRegex)) {
      return notify("من فضلك ادخل ايميل صحيح", "error");
    }

    setLoading(true);
    setSpinner(true);
    await dispatch(forgetPasswordUser({ email }));
    setLoading(false);
    setSpinner(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === 200) {
          notify("تم ارسال الرمز بنجاح", "success");
          setTimeout(() => {
            nav("/user/verify-code");
          }, 2000);
        }
      }
      if (error) {
        if (error.status === 404) {
          notify("من فضلك ادخل ايميل مستخدم", "error");
        }
      }
    }
  }, [loading]);

  return [OnChangeEmail, email, onSubmit, spinner];
};

export default ForgetPasswordHook;
