import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col>
          <ProductGallery />
        </Col>
        <Col>
          <ProductText />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
