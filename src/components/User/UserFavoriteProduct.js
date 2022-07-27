import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import style from "./UserFavoriteProduct.module.css";
import CardProductsContainer from "./../Products/CardProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProdWishlist } from "../../Redux/actions/wishlistAction";

const UserFavoriteProduct = () => {
  const dispath = useDispatch();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const res = useSelector((state) => state.wishlist.userWishList);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispath(getProdWishlist());
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (res) setItems(res.data);
    }
  }, [loading]);

  return (
    <div>
      <div className={`${style["admin-content-text"]} pb-4`}>قائمة المفضلة</div>
      <Row className="justify-content-start">
        {items.length > 0 ? (
          //
          <CardProductsContainer product={items} title="" btntitle="" />
        ) : (
          <h5 className="center" style={{ color: "#777" }}>
            لا يوجد منتجات مفضلة حاليا
          </h5>
        )}
      </Row>
    </div>
  );
};

export default UserFavoriteProduct;
