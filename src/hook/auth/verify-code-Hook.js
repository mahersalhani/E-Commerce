import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCodeUser } from "../../Redux/actions/authAction";
import notify from "./../useNotify";
import { useNavigate } from "react-router-dom";

const VerifyCodeHook = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch();

  const nav = useNavigate();

  const res = useSelector((state) => state.auth.verifyCodeUser);
  const error = useSelector((state) => state.auth.error);

  const OnChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (code.length < 6 || code.length > 6) {
      return notify("الرمز يجب ان يتكون من 6 ارقام", "error");
    }

    setLoading(true);
    setSpinner(true);
    await dispatch(verifyCodeUser({ resetCode: code }));
    setLoading(false);
    setSpinner(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === 200) {
          notify("تم تاكيد الرمز بنجاح", "success");
          setTimeout(() => {
            nav("/user/reset-password");
          }, 2000);
        }
      }
      if (error) {
        if (error.status === 404) {
          notify("الرمز الذي تم ارساله خطا. او انتهت صلاحيته", "error");
        }
      }
    }
  }, [loading]);

  return [OnChangeCode, code, onSubmit, spinner];
};

export default VerifyCodeHook;
