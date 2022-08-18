import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOneAddress, updateAddress } from "../../Redux/actions/addressAction";
import notify from "./../useNotify";
import { useNavigate } from "react-router-dom";

const DeleteAddressHook = (id) => {
  const address = useSelector((state) => state.address.oneAddress);
  const res = useSelector((state) => state.address.updateAddress);

  const dispatch = useDispatch();

  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [gettedData, setGettedData] = useState(false);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await dispatch(getOneAddress(id));
      setGettedData(true);
    };

    getData();
  }, []);

  useEffect(() => {
    if (gettedData) {
      if (address && address.data) {
        setAlias(address.data.alias);
        setDetails(address.data.details);
        setPhone(address.data.phone);
      }
      setGettedData(false);
    }
  }, [gettedData]);

  const onAliasChange = (e) => {
    setAlias(e.target.value);
  };

  const onDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onUpdate = async () => {
    if (alias === "" || details === "" || phone === "") {
      notify("يرجى اكمال البيانات", "error");
    }

    const data = { alias, details, phone };

    setLoading(true);
    await dispatch(updateAddress(id, data));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res[0] === "updated") {
        notify("تم التعديل بنجاح", "success");
        setTimeout(() => {
          nav("/user/addresses");
        }, 1500);
      }
      setLoading(true);
    }
  }, [loading]);

  return {
    alias,
    details,
    phone,

    onAliasChange,
    onDetailsChange,
    onPhoneChange,

    onUpdate,
  };
};

export default DeleteAddressHook;
