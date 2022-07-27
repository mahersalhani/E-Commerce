import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotify";
import { addProductToWishlist, removeProductFromWishlist } from "./../../Redux/actions/wishlistAction";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";

const ProductCardHook = (favProd, item) => {
  const dispatch = useDispatch();

  const addres = useSelector((state) => state.wishlist.addwishlist);
  const removeres = useSelector((state) => state.wishlist.removewishlist);
  const error = useSelector((state) => state.wishlist.error);

  // const fav = favProd.some((fItem) => fItem === item._id);

  const [favImg, setFaveImg] = useState(favoff);

  const [spinner, setSpinner] = useState(false);

  const [isFav, setIsFav] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsFav(favProd.includes(item._id));
  }, [favProd]);

  const handelFav = () => {
    if (isFav) {
      removeFromWishListData();
    } else {
      addToWishListData();
    }
  };

  const addToWishListData = async () => {
    setSpinner(true);
    setLoading(true);

    // dispatch to add prod to wishlist
    await dispatch(addProductToWishlist({ productId: item._id }));

    setLoading(false);
    setIsFav(true);

    // change heart state
    setSpinner(false);
  };

  const removeFromWishListData = async () => {
    setSpinner(true);
    setLoading(true);

    // dispatch to add prod to wishlist
    await dispatch(removeProductFromWishlist(item._id));

    setLoading(false);
    setIsFav(false);

    // change heart state
    setSpinner(false);
  };

  useEffect(() => {
    if (isFav) {
      setFaveImg(favon);
    } else {
      setFaveImg(favoff);
    }
  }, [isFav]);

  useEffect(() => {
    if (!loading) {
      if (error) {
        if (error.response && error.response.status === 500) {
          notify("يرجى تسجيل الدخول لكي تستطيع اضافة منتج", "error");
          setFaveImg(favoff);
        }
      }
      if (addres && addres.status === 200) {
        notify("تم الاضافة الى المفضلة بنجاح", "success");
      }
      if (removeres && removeres.status === 200) {
        notify("تم الازالة من المفضلة بنجاح", "warn");
      }
    }
  }, [loading]);

  return [spinner, favImg, handelFav];
};

export default ProductCardHook;
