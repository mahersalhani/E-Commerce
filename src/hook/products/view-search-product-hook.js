import { useDispatch } from "react-redux";
import { getAllProductsSearch } from "./../../Redux/actions/productsAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ViewSearchProductHook = () => {
  const dispatch = useDispatch();

  const eachPage = 4;

  let word = "",
    queyCat = "",
    brandCat = "",
    priceFrom = "",
    priceTo = "";

  const getStorage = () => {
    if (sessionStorage.getItem("searchWord") !== null) {
      word = sessionStorage.getItem("searchWord");
    }
    if (sessionStorage.getItem("queryCat") !== null) {
      queyCat = sessionStorage.getItem("queryCat");
    }
    if (sessionStorage.getItem("brand") !== null) {
      brandCat = sessionStorage.getItem("brand");
    }
    if (sessionStorage.getItem("priceFrom") !== null) {
      priceFrom = sessionStorage.getItem("priceFrom");
    }
    if (sessionStorage.getItem("priceTo") !== null) {
      priceTo = sessionStorage.getItem("priceTo");
    }
  };

  const getProduct = async () => {
    getStorage();
    sortData();
    let priceFromString = "",
      priceToString = "";

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = ``;
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = ``;
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }

    await dispatch(getAllProductsSearch(`sort=${sort}&limit=${eachPage}&keywords=${word}&${queyCat}&${brandCat}${priceFromString}${priceToString}`));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const onPress = (page) => {
    getStorage();
    sortData();

    let priceFromString = "",
      priceToString = "";

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = ``;
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = ``;
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }

    dispatch(getAllProductsSearch(`sort=${sort}&limit=${eachPage}&keywords=${word}&page=${page}&${queyCat}&${brandCat}${priceFromString}${priceToString}`));
  };

  const allProducts = useSelector((state) => state.product.allProducts);

  let items = [],
    pagination = 0,
    results = 0;

  try {
    if (allProducts)
      if (allProducts.data) items = allProducts.data;
      else items = [];
  } catch (e) {
    console.log(e);
  }

  try {
    if (allProducts)
      if (allProducts.results) results = allProducts.results;
      else results = 0;
  } catch (e) {
    console.log(e);
  }

  try {
    if (allProducts)
      if (allProducts.paginationResults) pagination = allProducts.paginationResults;
      else pagination = 0;
  } catch (e) {
    console.log(e);
  }

  let sortType = "",
    sort;

  // when user choose sort type
  const sortData = () => {
    if (sessionStorage.getItem("sortType") !== null) {
      sortType = sessionStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-ratingsQuantity";
    } else if (sortType === "السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    }
  };

  return [results, items, pagination, onPress, getProduct];
};

export default ViewSearchProductHook;
