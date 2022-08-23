import { useEffect, useState } from "react";
import notify from "./../useNotify";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../Redux/actions/authAction";
import { updateUserPassword } from "./../../Redux/actions/authAction";

const ProfileHook = () => {
  let userData = {};

  if (JSON.parse(localStorage.getItem("user")) != null) {
    userData = JSON.parse(localStorage.getItem("user"));
  }

  const updatedUserData = useSelector((state) => state.auth.updatedUserData);

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);

  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChnageName = (e) => {
    setName(e.target.value);
  };

  const onChnageEmail = (e) => {
    setEmail(e.target.value);
  };

  const dispatch = useDispatch();

  const handelDelete = async () => {
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      return notify("من فضلك ادخل ايميل صحيح", "error");
    }
    if (name === "") {
      return notify("من فضلك ادخل اسم مستخدم", "error");
    }

    const data = { name, email };

    await dispatch(updateUserData(data));
    setLoading(false);
    handleClose();
  };

  useEffect(() => {
    if (!loading) {
      console.log(updatedUserData);
      if (updatedUserData && updatedUserData.status === 200) {
        localStorage.setItem("user", JSON.stringify(updatedUserData.data.data));
        notify("تم تحديث البيانات بنجاح", "success");
      } else if (updatedUserData && updatedUserData.status === 400) {
        notify("هذا الحساب مستخدم بالفعل", "error");
      }
      setName(userData.name);
      setEmail(userData.email);
      setLoading(true);
    }
  }, [loading]);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  const passResults = useSelector((state) => state.auth.updatedPass);
  const passErrors = useSelector((state) => state.auth.updatedPass);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const chnagePassword = async () => {
    if (password === "") {
      return notify("يرجى اكمال البينات", "error");
    }
    if (password.length < 6) {
      return notify("يجب انت تتكون كلمة السر على الاقل من 6 عناصر", "error");
    }
    if (password !== passwordConfirm) {
      return notify("تاكيد الكلمة يجب انت يتطابق مع كلمة الجديدة", "error");
    }

    const data = { password, passwordConfirm };

    await dispatch(updateUserPassword(data));
    setLoadingPass(false);
    setPassword("");
    setPasswordConfirm("");
  };

  useEffect(() => {
    if (!loadingPass) {
      if (passResults && passResults.status === 200) {
        setLoadingPass(true);
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.href = "/login";
        }, 1500);
        return notify("تم تغير كلمة السر بنجاح", "success");
      }
      if (passErrors.length > 0) {
        setLoadingPass(true);
        return notify("هناك مشكلة", "error");
      }
    }
  }, [loadingPass]);

  return {
    userData,

    name,
    email,
    show,

    handleShow,
    handelDelete,
    handleClose,

    onChnageName,
    onChnageEmail,

    chnagePassword,
    password,
    passwordConfirm,
    onPasswordChange,
    onPasswordConfirmChange,
  };
};

export default ProfileHook;
