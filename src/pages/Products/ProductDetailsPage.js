import React from "react";
import { Container } from "react-bootstrap";
import RateContainer from "../../components/Rate/RateContainer";
import CategoryHeader from "./../../components/Category/CategoryHeader";
import ProductDetails from "./../../components/Products/ProductDetails";
import CardProductsContainer from "./../../components/Products/CardProductsContainer";
import ViewProductsDetailsHook from "./../../hook/products/view-products-details-hook";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [, , , productsLike] = ViewProductsDetailsHook(id);

  let prod = [];

  if (productsLike) {
    if (productsLike.data) prod = productsLike.data.slice(0, 4);
    else prod = [];
  } else {
    prod = [];
  }

  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer product={prod} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
