import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProdWishlist } from "../../Redux/actions/wishlistAction";
import notify from "./../useNotify";

const CardContainerHook = () => {
  const [loading, setLoading] = useState();

  const [favProd, setFavProd] = useState([]);

  const dispatch = useDispatch();

  const res = useSelector((state) => state.wishlist.userWishList);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProdWishlist());
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (res.data) {
        setFavProd(res.data.map((item) => item._id));
      }
    }
  }, [loading]);

  return [favProd];
};

export default CardContainerHook;
