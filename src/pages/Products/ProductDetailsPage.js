import React from "react";
import { Container } from "react-bootstrap";
import RateContainer from "../../components/Rate/RateContainer";
import CategoryHeader from "./../../components/Category/CategoryHeader";
import ProductDetails from "./../../components/Products/ProductDetails";
import CardProductsContainer from "./../../components/Products/CardProductsContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
