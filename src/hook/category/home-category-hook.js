import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./../../Redux/actions/categoryAction";
import { useSelector } from "react-redux";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#ff6262", "#0034ff", "#ffd3e8"];

  return [category, colors, loading];
};

export default HomeCategoryHook;
