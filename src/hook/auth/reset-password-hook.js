import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotify";
import { resetPasswordUser } from "./../../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

export const ResetPasswordHook = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  const res = useSelector((state) => state.auth.resetPasswordUser);
  const error = useSelector((state) => state.auth.error);

  const nav = useNavigate();

  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (newPassword === "") {
      return notify("من فضلك ادخل كلمة مرور", "error");
    }
    if (newPassword.length < 6) {
      return notify("كلمة يجب ان تتكون من 6 خانات على الاقل", "error");
    }
    if (newPassword !== confirmPassword) {
      return notify("تاكد من مطابقة كلمة المرور", "error");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    validationValues();

    const email = sessionStorage.getItem("email");

    setLoading(true);
    setSpinner(true);
    await dispatch(resetPasswordUser({ newPassword, email }));
    setLoading(false);
    setSpinner(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === 200) {
          notify("تم تغير كلمة المرور بنجاح", "success");
          setTimeout(() => {
            nav("/login");
          }, 2000);
        }
      }
      if (error) {
        if (error.status === 400 || error.status === 500) {
          notify("خدث خطا يرجى اعادة المحاولة", "error");
        }
      }
    }
  }, [loading]);

  return [
    //
    onChangeNewPassword,
    onChangeConfirmPassword,
    onSubmit,

    newPassword,
    confirmPassword,
    spinner,
  ];
};

export default ResetPasswordHook;
