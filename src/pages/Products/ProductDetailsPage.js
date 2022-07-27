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

  const [item, images, brandItem, prod] = ViewProductsDetailsHook(id);

  let rateAvg = 0;
  let rateQty = 0;
  if (item) {
    rateAvg = item.ratingsAverage || 0;
    rateQty = item.ratingsQuantity || 0;
  }

  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductsContainer product={prod} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
