import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
import style from "./AdminAllOrdersItem.module.css";

const AdminAllOrdersItem = () => {
  return (
    <Col sm="12">
      <Link to="/admin/orders/23" className={`${style["cart-item-body"]} my-2 px-1 d-flex`} style={{ textDecoration: "none" }}>
        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className={`d-inline pt-2 ${style["cart-text"]}`}>طلب رقم #2321</div>
              <div className={`d-inline pt-2 ${style["cart-text"]}`}>ازاله</div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className={`d-inline pt-2 ${style["cat-title"]}`}>آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر</div>
              <div className={`d-inline pt-2 ${style["cart-rate"]} me-2`}>4.5</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className=" d-flex">
              <div className={`mt-2  ${style["cart-text"]} d-inline`}>الماركة :</div>
              <div className={`mt-1 ${style["barnd-text"]} d-inline mx-1`}>ابل </div>
              <div className={`${style["color"]}  me-1 border`} style={{ backgroundColor: "#E52C2C" }}></div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className={`${style["cart-text"]} pt-1 d-inline`}>الكميه</div>
                <input className="mx-2 mt-1" type="number" style={{ width: "40px", height: "25px" }} />
              </div>
              <div className={`d-inline pt-2 ${style["barnd-text"]}`}>٣٠٠٠ جنية</div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrdersItem;
