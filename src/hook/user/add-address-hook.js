import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotify";
import { createNewAddress } from "./../../Redux/actions/addressAction";

const AddAddressHook = () => {
  const dispatch = useDispatch();

  const [alias, setAlias] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const res = useSelector((state) => state.address.address);

  const onAliasChange = (e) => {
    setAlias(e.target?.value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target?.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target?.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (alias === "") {
      return notify("يرجى اضافة تسمية للموقع", "error");
    }
    if (address === "") {
      return notify("يرجى اضافة العنوان", "error");
    }
    if (phone === "") {
      return notify("يرجى اضافة رقم هاتف", "error");
    }

    const data = { alias, details: address, phone };

    setLoading(true);
    await dispatch(createNewAddress(data));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res && res.status === 200) {
        notify("تم الاضافة العنوان بنجاح", "success");
        setAlias("");
        setAddress("");
        setPhone("");
      }
    }
    setLoading(true);
  }, [loading]);

  return {
    alias,
    address,
    phone,

    onAliasChange,
    onAddressChange,
    onPhoneChange,

    onSubmit,
  };
};

export default AddAddressHook;
