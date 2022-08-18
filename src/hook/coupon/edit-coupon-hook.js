import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useSelector, useDispatch } from "react-redux";
import { getOneCoupon, updateOneCoupon } from "./../../Redux/actions/couponAction";

const EditCouponHook = (id) => {
  const res = useSelector((state) => state.coupon.editCoupon);
  const oneCoupon = useSelector((state) => state.coupon.oneCoupon);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [dis, setDis] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupon(id));
      setLoadingData(false);
    };

    get();
  }, []);

  useEffect(() => {
    if (oneCoupon)
      if (oneCoupon.data) {
        const date = new Date(oneCoupon.data.expire);
        const year = date.getFullYear();

        let month = date.getMonth() + 1,
          day = date.getDate();

        if (month > 0) {
          month = `0${month}`;
        }
        if (day > 0) {
          day = `0${day}`;
        }

        setName(oneCoupon.data.name);
        setDate(`${year}-${month}-${day}`);
        setDis(oneCoupon.data.discount);
      }
  }, [loadingData]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeDis = (e) => {
    setDis(e.target.value);
  };

  const onEditCoupon = async (e) => {
    if (name === "") {
      return notify("يرجى اضافة اسم", "error");
    }
    if (date === "") {
      return notify("يرجى اضافة تاريخ انتهاء", "error");
    }
    if (dis === "") {
      return notify("يرجى اضافة نسبة الخصم", "error");
    }
    if (+dis >= 100) {
      return notify("لا يجب ان تكون نسبة الخصم 100 او اكثر", "error");
    }

    const data = { name, expire: date, discount: dis };

    setLoading(true);
    await dispatch(updateOneCoupon(id, data));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res)
        if (res.data && res.data.message) {
          notify("تم التعديل بنجاح", "success");
        }
    }
  }, [loading]);

  return [
    //
    name,
    date,
    dis,

    onChangeName,
    onChangeDate,
    onChangeDis,

    onEditCoupon,
  ];
};

export default EditCouponHook;
