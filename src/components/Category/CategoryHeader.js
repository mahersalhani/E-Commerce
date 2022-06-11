import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./CategoryHeader.module.css";

const CategoryHeader = () => {
  return (
    <div className={style["cat-header"]}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className={style["cat-text-header"]}>الكل</div>
            <div className={style["cat-text-header"]}>الكترونيات</div>
            <div className={style["cat-text-header"]}>ملابس</div>
            <div className={style["cat-text-header"]}> كهربيه</div>
            <div className={style["cat-text-header"]}>تخفيضات</div>
            <div className={style["cat-text-header"]}>تخفيضات</div>
            <div className={style["cat-text-header"]}>تخفيضات</div>
            <div className={style["cat-text-header"]}>تخفيضات</div>
            <div className={style["cat-text-header"]}>تخفيضات</div>
            <div className={style["cat-text-header"]}>المزيد</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoryHeader;
