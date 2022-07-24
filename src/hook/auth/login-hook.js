import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const nav = useNavigate();

  const dispatch = useDispatch();
  const res = useSelector((state) => state.auth.loginUser);
  const error = useSelector((state) => state.auth.error);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === "") {
      return notify("من فضلك ادخل ايميل", "error");
    }
    if (!email.match(validRegex)) {
      return notify("من فضلك ادخل ايميل صحيح", "error");
    }
    if (password === "") {
      return notify("من فضلك ادخل كلمة مرور", "error");
    }
    if (password.length < 6) {
      return notify("كلمة السر يجب ان تتكون من 6 عناصر ", "error");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    validationValues();

    if (!navigator.onLine) {
      return notify("هناك مشكلة بالانترنيت. تاكد من اتصالك ثم حاول مجددا", "error");
    }

    setLoading(true);
    setSpinner(true);
    await dispatch(loginUser({ email, password }));
    setSpinner(false);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.data || res.status === 200) {
          notify("تم تسجيل دخولك بنجاح", "success");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      }
      if (error) {
        if (error.status === 401) {
          notify("الايميل او كلمة السر خطا", "error");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }
      setLoading(true);
    }
  }, [loading]);

  return [
    //
    email,
    password,
    loading,
    spinner,

    onChangeEmail,
    onChangePassword,
    onSubmit,
  ];
};

export default LoginHook;
