import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllBrand } from "./../../Redux/actions/brandAction";
import ViewSearchProductHook from "./../products/view-search-product-hook";

const SidebarSearchHook = () => {
  const [, , , , getProduct] = ViewSearchProductHook();

  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);
  const [From, setPriceFrom] = useState(0);
  const [To, setPriceTo] = useState(0);

  const dispatch = useDispatch();

  // first load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };

    get();
  }, [dispatch]);

  var queryBrand = "";

  const allCategory = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.Brand.brand);

  let brands = [];
  let categorires = [];

  if (allCategory) {
    if (allCategory.data) {
      categorires = allCategory.data;
    }
  }

  if (allBrand) {
    if (allBrand.data) {
      brands = allBrand.data;
    }
  }

  // when user press any category
  const clickCategorires = (e) => {
    let value = e.target.value;

    if (value === "all") {
      setCatChecked([]);
    } else {
      if (e.target.checked) {
        setCatChecked([...catChecked, value]);
      } else {
        const newCheck = catChecked.filter((target) => target !== value);
        setCatChecked(newCheck);
      }
    }
  };

  useEffect(() => {
    let queryCat = "";

    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");

    sessionStorage.setItem("queryCat", queryCat);

    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked]);

  // when user press any brand
  const clickBrands = (e) => {
    let value = e.target.value;

    if (value === "all") {
      setBrandChecked([]);
    } else {
      if (e.target.checked) {
        setBrandChecked([...brandChecked, value]);
      } else {
        const newCheck = brandChecked.filter((target) => target !== value);
        setBrandChecked(newCheck);
      }
    }
  };

  useEffect(() => {
    let queryBrand = "";

    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");

    sessionStorage.setItem("brand", queryBrand);

    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked]);

  // Price from to
  const priceFrom = (e) => {
    sessionStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };

  const priceTo = (e) => {
    sessionStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From, To]);

  return [
    //
    categorires,
    brands,
    clickCategorires,
    clickBrands,
    priceFrom,
    priceTo,
  ];
};

export default SidebarSearchHook;
