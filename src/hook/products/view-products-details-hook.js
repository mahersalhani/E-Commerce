import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../Redux/actions/productsAction";
import mobile from "../../images/mobile.png";
import { getOneBrand } from "./../../Redux/actions/brandAction";
import { getProductsLike } from "./../../Redux/actions/productsAction";

const ViewProductsDetailsHook = (prodId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(prodId));
  }, []);

  const oneProd = useSelector((state) => state.product.productDetails);
  const prodsLike = useSelector((state) => state.product.prodLike);
  const oneBrand = useSelector((state) => state.Brand.oneBrand);

  // to show products item
  let item = [];
  if (oneProd)
    if (!oneProd.data) item = [];
    else item = oneProd.data;

  useEffect(() => {
    if (item.brand) dispatch(getOneBrand(item.brand));
    if (item.category) dispatch(getProductsLike(item.category._id));
  }, [item]);

  // to view images gallery
  let images = [];
  if (item.images) {
    images = item.images.map((img) => {
      return {
        original: `${img}`,
        originalAlt: "product-gallery",
        originalHeight: "450px",
        loading: "lazy",
      };
    });
  } else {
    images = [
      {
        original: `${mobile}`,
        originalAlt: "product-gallery",
      },
    ];
  }

  // to show products item
  let brandItem = [];

  if (oneBrand)
    if (!oneBrand.data) brandItem = [];
    else brandItem = oneBrand.data;

  let productsLike = [];

  if (!prodsLike) productsLike = [];
  else productsLike = prodsLike;

  return [item, images, brandItem, productsLike];
};

export default ViewProductsDetailsHook;
