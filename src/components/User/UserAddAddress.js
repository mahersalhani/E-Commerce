import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./UserAddAddress.module.css";

const UserAddAddress = () => {
  return (
    <div>
      <Row className="justify-content-start">
        <div className={`${style["admin-content-text"]} pb-2`}>اضافة عنوان جديد</div>
        <Col sm="8">
          <input type="text" className={`${style["input-form"]} d-block mt-3 px-3`} placeholder="تسمية العنوان مثلا(المنزل - العمل)" />
          <textarea className={`${style["input-form-area"]} d-block mt-3 px-3`} rows="4" cols="50" placeholder="العنوان بالتفصيل" />
          <input type="text" className={`${style["input-form"]} d-block mt-3 px-3`} placeholder="رقم الهاتف" />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className={`${style["btn-save"]} d-inline mt-2 `}>اضافة عنوان</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddAddress;
