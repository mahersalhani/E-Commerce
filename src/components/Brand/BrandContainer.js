import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandsCard";

const BrandContainer = ({ data, loading }) => {
  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل الماركات</div>
      <Row className="my-2 d-flex justify-content-between">
        {/*  */}
        {!loading &&
          data &&
          data.map((el, i) => {
            return <BrandCard img={el.image} key={i} />;
          })}
      </Row>
    </Container>
  );
};

export default BrandContainer;
