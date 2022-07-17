import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { getAllBrand } from "./../../Redux/actions/brandAction";
import { useSelector } from "react-redux";
import { useState } from "react";
import notify from "./../useNotify";
import { getOnCategoryId } from "../../Redux/actions/subCategoryAction";
import { getOneProduct, updateProduct } from "./../../Redux/actions/productsAction";

const AdimeEditProductsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getOneProduct(id));
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };

    run();
  }, []);

  // get one product details
  const item = useSelector((state) => state.product.productDetails);
  // get last categories from redux
  const category = useSelector((state) => state.allCategory.category);
  // get last brands from redux
  const brand = useSelector((state) => state.Brand.brand);
  // get last subCat from redux
  const subCat = useSelector((state) => state.subCategory.subcategoryOnId);
  // get last subCat from redux
  const product = useSelector((state) => state.product.updateProduct);

  // values images products
  const [images, setImages] = useState({});
  // value state
  const [prodName, setProdName] = useState("");
  const [prodDes, setProdDes] = useState("");
  const [priceBefor, setPriceBefor] = useState("السعر قبل الخصم");
  const [priceAfter, setPriceAfter] = useState("السعر بعد الخصم");
  const [qty, setQty] = useState("الكمية المتاحه");
  const [CatId, setCatId] = useState("0");
  const [BrandId, setBrandId] = useState("0");
  // const [SubId, setSubId] = useState([]);

  const [selectedSubId, setSelectedSubId] = useState([]);
  // To show and hide color picker
  const [show, setShow] = useState(false);
  // To store all picked colors
  const [colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSpiner, setLoadingSpiner] = useState(false);

  useEffect(() => {
    if (item)
      if (item.data) {
        setPriceBefor(item.data.price);
        setProdName(item.data.title);
        setImages(item.data.images);
        setProdDes(item.data.description);
        setCatId(item.data.category._id);
        setQty(item.data.quantity);
        setBrandId(item.data.brand);
        setColors(item.data.colors);
        setPriceAfter(item.data.priceAfterDiscount);
        setSelectedSubId(item.data.subcategories);
      }
  }, [item]);

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

  // when select category
  const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {
      await dispatch(getOnCategoryId(e.target.value));
    }
    setCatId(e.target.value);
  };

  useEffect(() => {
    const run = async () => {
      if (CatId !== "0") {
        await dispatch(getOnCategoryId(CatId));
      }
    };

    run();
  }, [CatId]);

  useEffect(() => {
    if (subCat)
      if (subCat.data) {
        setOptions(subCat.data);
      }
  }, [subCat]);

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

  // to convert URL to file
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

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

    let imageCover;

    if (images[0].length <= 500) {
      convertURLtoFile(images[0]).then((val) => {
        imageCover = val;
      });
    } else {
      imageCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let itemImages = [];

    Array.from(Array(Object.keys(images).length).keys()).map((item, i) => {
      if (images[i].length <= 500) {
        convertURLtoFile(images[i]).then((val) => {
          console.log("Image");
          itemImages.push(val);
        });
      } else {
        itemImages.push(dataURLtoFile(images[i], Math.random() + ".png"));
      }
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
    formData.append("category", CatId);
    formData.append("brand", BrandId);

    setTimeout(() => {
      console.log(imageCover);
      console.log(itemImages);

      formData.append("imageCover", imageCover);
      itemImages.map((itemImage) => formData.append("images", itemImage));
    }, 1000);

    colors.map((color) => formData.append("colors", color));
    subIdsArray.map((id) => formData.append("subcategories", id));

    console.log(selectedSubId);

    setTimeout(async () => {
      setLoadingSpiner(true);
      setLoading(true);
      await dispatch(updateProduct(id, formData));
      setLoadingSpiner(false);
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    if (!loading) {
      if (product) {
        if (product.data) {
          if (!navigator.onLine) {
            return notify("هناك مشكلة بالانترنيت", "success");
          }
          if (product.data.message === "Update Document Succeed") {
            return notify("تمت تعديل بنجاح", "success");
          } else {
            return notify("هناك مشكلة بعملية تعديل", "error");
          }
        } else {
          return notify("هناك مشكلة بعملية تعديل", "error");
        }
      } else {
        return notify("هناك مشكلة بعملية تعديل", "error");
      }
    }
  }, [loading, product]);

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
    onChangeName,
    onChangeDes,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onShowColor,
    CatId,
    BrandId,
  ];
};

export default AdimeEditProductsHook;
