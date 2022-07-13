import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllBrand } from "./../../Redux/actions/brandAction";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  const limit = 4;

  // first load
  useEffect(() => {
    dispatch(getAllBrand(limit));
  }, [dispatch]);

  const brand = useSelector((state) => state.Brand.brand);
  const loading = useSelector((state) => state.Brand.loading);

  // to page count
  let pageCount = 0;
  if (brand.paginationResults) {
    pageCount = brand.paginationResults.numberOfPages;
  }

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllBrand(limit, page));
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandHook;
