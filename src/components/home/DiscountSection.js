import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptops from "../../images/laptops.png";
import style from ".//DiscountSection.module.css";

const DiscountSection = () => {
  return (
    <Container>
      <Row className={`${style["discount-backcolor"]} my-3  mx-2 d-flex text-center align-items-center`}>
        <Col sm="6">
          <div className={style["discount-title"]}>خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب</div>
        </Col>
        <Col sm="6">
          <img className={style["dicount-img"]} src={laptops} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
