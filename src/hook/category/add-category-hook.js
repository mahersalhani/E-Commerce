import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import notify from "./../useNotify";
import { createNewCategory } from "../../Redux/actions/categoryAction";
import { useEffect } from "react";
import avatar from "../../images/avatar.png";

const AddCategoryHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  //to change name state
  const onChangeName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const res = useSelector((state) => state.allCategory.category);

  //save data in database
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");
      console.log("من فضلك اكمل البيانات");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);
    setLoading(true);
    setIsPress(true);
    await dispatch(createNewCategory(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      console.log("تم الانتهاء");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);

      if (res[0] === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [img, name, loading, isPress, onChangeName, handleSubmit, onImageChange];
};

export default AddCategoryHook;
