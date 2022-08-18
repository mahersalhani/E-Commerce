import { useState, useEffect } from "react";
import notify from "./../useNotify";
import { useSelector, useDispatch } from "react-redux";
import { addNewCoupon, getAllCoupon } from "./../../Redux/actions/couponAction";

const AddCouponHook = () => {
  const error = useSelector((state) => state.coupon.error);
  const res = useSelector((state) => state.coupon.coupon);
  const allCoupon = useSelector((state) => state.coupon.allCoupon);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [dis, setDis] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeDis = (e) => {
    setDis(e.target.value);
  };

  const onCreateCoupon = async (e) => {
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

    setLoading(true);
    await dispatch(addNewCoupon({ name, expire: date, discount: dis }));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) if (res.status === 201) notify("تم اضافة كوبون بنجاح", "success");
      if (error)
        if (error.response)
          if (error.response.status === 500) {
            notify("الاسم مستخدم بالفعل", "error");
            return setName("");
          }

      setName("");
      setDate("");
      setDis("");
      setLoading(true);
    }
  }, [loading]);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupon());
    };

    get();
  }, [loading]);

  return [
    //
    name,
    date,
    dis,

    onChangeName,
    onChangeDate,
    onChangeDis,

    onCreateCoupon,
    allCoupon,
  ];
};

export default AddCouponHook;
