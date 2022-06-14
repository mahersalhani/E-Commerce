import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./ReatItem";
import RatePost from "./RatePost";
import style from "./Rate.module.css";

const RateContainer = () => {
  return (
    <Container className={`${style["rate-container"]} mt-2`}>
      <Row>
        <Col className="d-flex">
          <div className={`${style["sub-tile"]} d-inline p-1 `}>التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className={`${style["cart-rate"]}  d-inline  p-1 pt-2`}>4.5</div>
          <div className={`${style["rate-count"]} d-inline p-1 pt-2`}>(160 تقييم)</div>
        </Col>
      </Row>
      <RatePost />

      <RateItem />
      <RateItem />
      <RateItem />
    </Container>
  );
};

export default RateContainer;
