import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Utils/SubTitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, btntitle, pathText, product }) => {
  if (!product) {
    product = [];
  }

  return (
    <Container>
      {product.length > 0 && <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />}
      <Row className="my-2 d-flex justify-content-between">
        {product.length > 0 &&
          product.map((item, i) => {
            return <ProductCard key={i} item={item} />;
          })}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
