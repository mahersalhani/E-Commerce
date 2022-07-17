import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { getAllBrand } from "./../../Redux/actions/brandAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import notify from "./../useNotify";
import { getOnCategoryId } from "../../Redux/actions/subCategoryAction";
import { createNewProduct } from "./../../Redux/actions/productsAction";

const AddProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, [dispatch]);

  // get last categories from redux
  const category = useSelector((state) => state.allCategory.category);
  // get last brands from redux
  const brand = useSelector((state) => state.Brand.brand);
  // get last subCat from redux
  const subCat = useSelector((state) => state.subCategory.subcategoryOnId);
  // get last subCat from redux
  const product = useSelector((state) => state.product.product);

  // values images products
  const [images, setImages] = useState({});
  // value state
  const [prodName, setProdName] = useState("");
  const [prodDes, setProdDes] = useState("");
  const [priceBefor, setPriceBefor] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحه");
  const [CatId, setCatId] = useState("");
  const [BrandId, setBrandId] = useState("");
  // const [SubId, setSubId] = useState([]);

  const [selectedSubId, setSelectedSubId] = useState([]);
  // To show and hide color picker
  const [show, setShow] = useState(false);
  // To store all picked colors
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSpiner, setLoadingSpiner] = useState(false);

  const onSelect = (selectedList) => {
    setSelectedSubId(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubId(selectedList);
  };

  const onChangeName = (event) => {
    event.persist();
    setProdName(event.target.value);
  };
  const onChangeDes = (event) => {
    event.persist();
    setProdDes(event.target.value);
  };
  const onChangePriceBefore = (event) => {
    event.persist();
    setPriceBefor(event.target.value);
  };
  const onChangePriceAfter = (event) => {
    event.persist();
    setPriceAfter(event.target.value);
  };
  const onChangeQty = (event) => {
    event.persist();
    setQty(event.target.value);
  };
  const onShowColor = (event) => {
    event.persist();
    setShow(!show);
  };

  const brandOptions = useRef();
  const categoryOptions = useRef();

  // when select color
  const handelChangeComplete = (color) => {
    if (colors.includes(color.hex)) {
      return notify("لقد اخترت هذا اللون بالفعل", "warn");
    }

    setColors([...colors, color.hex]);
    setShow(!show);
  };

  const removeColor = (color) => {
    const newColors = colors.filter((e) => e !== color);
    setColors(newColors);
  };

  useEffect(() => {
    if (CatId !== 0) {
      if (subCat.data) {
        setOptions(subCat.data);
      }
    }
  }, [CatId]);

  // when select category
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOnCategoryId(e.target.value));
    }
    setCatId(e.target.value);
  };

  const onSelectBrand = (e) => {
    setBrandId(e.target.value);
  };

  // to convert base64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  // to save data
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      return notify("يرجي اضافه على الاقل صورة واحدة", "warn");
    }

    if (+priceAfter > +priceBefor) {
      return notify("السعر قبل الخصم يجب ان يكون اكبر من بعد الخصم", "warn");
    }
    if (prodName === "" || prodName.length < 3) {
      return notify("يرجي اضافه اسم", "warn");
    }
    if (prodDes === "" || prodDes.length < 5) {
      return notify("يرجي اضافه وصف", "warn");
    }
    if (priceBefor === "السعر قبل الخصم") {
      return notify("يرجي اضافه سعر صحيح", "warn");
    }
    if (qty === "الكمية المتاحه") {
      return notify("يرجي اضافه كمية المتاحة", "warn");
    }
    if (CatId === "") {
      return notify("يرجي اضافه تصنيف رئيسي", "warn");
    }

    const imageCover = dataURLtoFile(images[0], Math.random() + ".png");

    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item, i) => {
      return dataURLtoFile(images[i], Math.random() + ".png");
    });

    const subIdsArray = [];

    selectedSubId.forEach((e) => {
      subIdsArray.push(e._id);
    });

    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDes);
    formData.append("quantity", qty);
    formData.append("price", priceBefor);
    formData.append("priceAfterDiscount", priceAfter);
    formData.append("imageCover", imageCover);
    formData.append("category", CatId);
    formData.append("brand", BrandId);

    itemImages.map((itemImage) => formData.append("images", itemImage));
    colors.map((color) => formData.append("colors", color));
    subIdsArray.map((id) => formData.append("subcategories", id));

    setLoading(true);
    setLoadingSpiner(true);
    await dispatch(createNewProduct(formData));
    if (categoryOptions.current) {
      categoryOptions.current.value = "0";
    }
    if (brandOptions.current) {
      brandOptions.current.value = "0";
    }
    setLoadingSpiner(false);
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setProdName("");
      setColors([]);
      setProdDes("");
      setPriceBefor("السعر قبل الخصم");
      setPriceAfter("السعر بعد الخصم");
      setQty("الكمية المتاحه");
      setCatId("");
      setImages({});
      setBrandId("");
      setSelectedSubId([]);
      setColors([]);
      setOptions([]);
      setLoading(true);

      if (product.data) {
        if (!navigator.onLine) {
          return notify("هناك مشكلة بالانترنيت", "success");
        }
        if (product.data.message === "New Document Created") {
          return notify("تمت الاضافة بنجاح", "success");
        } else {
          return notify("هناك مشكلة بعملية الاضافة", "error");
        }
      } else {
        return notify("هناك مشكلة بعملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    //
    show,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSelectCategory,
    handelSubmit,
    onSelectBrand,
    colors,
    priceBefor,
    qty,
    prodDes,
    prodName,
    loadingSpiner,
    brandOptions,
    categoryOptions,
    onChangeName,
    onChangeDes,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onShowColor,
    selectedSubId,
  ];
};

export default AddProductsHook;
