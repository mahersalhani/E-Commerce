import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { useSelector } from "react-redux";
import notify from "./../useNotify";
import { createNewSubCategory } from "./../../Redux/actions/subCategoryAction";

const AddSubCategoryHook = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const option = useRef();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنيت", "warn");
      return;
    }

    dispatch(getAllCategory());
  }, [dispatch]);

  // get last category state from redux
  const categories = useSelector((state) => state.allCategory.category);

  // get last subcategory state from redux
  const res = useSelector((state) => state.subCategory.subcategory);

  // on change dropdown state
  const handelChange = (e) => {
    setId(e.target.value);
  };

  // set name
  const onCahngeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // on save data
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      notify("هناك مشكله في الاتصال بالانترنيت", "warn");
      return;
    }

    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }

    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف", "warn");
      return;
    }

    setLoading(true);

    await dispatch(createNewSubCategory({ name, category: id }));

    option.current.value = 0;

    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res) {
        if (res.status === 201) {
          setName("");
          setId("0");
          notify("تمت الاضافة بنجاح", "success");
        } else if (res === "error AxiosError: Request failed with status code 400") {
          notify("هذا الاسم مستخدم من قبل. من فضلك اختر اسم اخر", "error");
        }
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
      setLoading(true);
    }
  }, [loading, res]);

  return [id, name, loading, categories, res, handelSubmit, handelChange, onCahngeName, option];
};

export default AddSubCategoryHook;
