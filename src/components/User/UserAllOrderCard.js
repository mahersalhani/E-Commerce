import React from "react";
import { Row, Col } from "react-bootstrap";
import mobile from "../../images/mobile.png";
import style from "./UserAllOrderCard.module.css";

const UserAllOrderCard = () => {
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <img width="93px" height="120px" src={mobile} alt="" />
        </Col>
        <Col xs="8" md="6">
          <div className={`d-inline pt-2 ${style["cart-title"]}`}>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر</div>
          <div className={`d-inline pt-2 ${style["cart-rate"]} me-2`}>4.5</div>
          <div className={`${style["rate-count"]} d-inline p-1 pt-2`}>(160 تقييم)</div>
          <div className="mt-3">
            <div className={`${style["cart-text"]}  d-inline`}>الكميه</div>
            <input className="mx-2 " type="number" style={{ width: "40px", height: "25px" }} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
