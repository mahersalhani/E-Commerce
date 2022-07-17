import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./../../Redux/actions/productsAction";

const ViewAdminProductsHook = () => {
  const dispatch = useDispatch();

  const eachPage = 15;

  useEffect(() => {
    dispatch(getAllProducts(eachPage, 1));
  }, [dispatch]);

  const onPress = (page) => {
    dispatch(getAllProducts(eachPage, page));
  };

  const allProducts = useSelector((state) => state.product.allProducts);

  let items = [];
  let pagination = [];

  try {
    if (allProducts) {
      items = allProducts;
    }

    if (allProducts) {
      pagination = allProducts.paginationResults;
    }
  } catch (e) {
    console.error(e);
  }

  return [items, pagination, onPress];
};

export default ViewAdminProductsHook;
