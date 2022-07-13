import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { useSelector } from "react-redux";

const AllcategoryHook = () => {
  const dispatch = useDispatch();

  const limit = 6;

  // first load
  useEffect(() => {
    dispatch(getAllCategory(limit));
  }, [dispatch]);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  // to page count
  let pageCount = 0;
  if (category.paginationResults) {
    pageCount = category.paginationResults.numberOfPages;
  }

  // when press pagination
  const getPage = (page) => {
    dispatch(getAllCategory(limit, page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllcategoryHook;
