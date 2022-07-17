import { useDispatch } from "react-redux";
import { getAllProducts } from "./../../Redux/actions/productsAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ViewSearchProductHook = () => {
  const dispatch = useDispatch();

  const eachPage = 5;

  useEffect(() => {
    dispatch(getAllProducts(eachPage, 1));
  }, [dispatch]);

  const onPress = (page) => {
    dispatch(getAllProducts(eachPage, page));
  };

  const allProducts = useSelector((state) => state.product.allProducts);

  let items = [];
  if (allProducts.data) items = allProducts.data;
  else items = [];

  let pagination = [];
  if (allProducts.paginationResults) pagination = allProducts.paginationResults;
  else pagination = [];

  return [items, pagination, onPress];
};

export default ViewSearchProductHook;
