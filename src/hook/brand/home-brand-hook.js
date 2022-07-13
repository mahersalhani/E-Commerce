import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllBrand } from "./../../Redux/actions/brandAction";

const HomeBrandHook = () => {
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.Brand.brand);
  const loading = useSelector((state) => state.Brand.loading);

  useEffect(() => {
    dispatch(getAllBrand());
  }, [dispatch]);

  return [brands, loading];
};

export default HomeBrandHook;
