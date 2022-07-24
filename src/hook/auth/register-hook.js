import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createNewUser } from "./../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisetHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const res = useSelector((state) => state.auth.creatUser);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setpasswordConfirm(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return false;
    }
    if (email === "") {
      notify("من فضلك ادخل حساب المستخدم", "error");
      return false;
    }
    if (password === "") {
      notify("يرجى ادخال كلمة مرور", "error");
      return false;
    }
    if (password.length < 6) {
      notify("يجب ان لا تقل كملة المرور عن 6 خانات", "error");
      return false;
    }
    if (password !== passwordConfirm) {
      notify("تاكد كلمة المرور يجب ان يطابق كلمة المرور", "error");
      return false;
    }

    return true;
  };

  // save data
  const OnSubmit = async () => {
    const validation = validationValues();

    if (!validation) {
      return;
    }

    setloading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm,
      })
    );
    setloading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res)
        if (res.data)
          if (res.data.token) {
            notify("تم انشاء مستخدم بنجاح", "success");

            localStorage.setItem("token", res.data.token);

            setTimeout(() => {
              nav("/login");
            }, 2000);
          } else if (res.data.errors) {
            if (res.data.errors[0].msg === "email is already in use") {
              setEmail("");
              notify("هذا الحساب مستخدم بالفعل", "error");
            } else if (res.data.errors[0].msg === "invalide email address") {
              setEmail("");
              notify("يرجى ادخال حساب صحيح", "error");
            }
          }
    }
  }, [loading]);

  return [
    //
    name,
    email,
    password,
    passwordConfirm,
    loading,

    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,

    OnSubmit,
  ];
};

export default RegisetHook;
