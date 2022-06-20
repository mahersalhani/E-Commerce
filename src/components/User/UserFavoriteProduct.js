import React from "react";
import { Pagination, Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import style from "./UserFavoriteProduct.module.css";

const UserFavoriteProduct = () => {
  return (
    <div>
      <div className={`${style["admin-content-text"]} pb-4`}>قائمة المفضلة</div>
      <Row className="justify-content-start">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProduct;
