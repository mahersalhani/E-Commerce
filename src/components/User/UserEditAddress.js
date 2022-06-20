import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./UserEditAddress.module.css";

const UserEditAddress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-2`}>تعديل العنوان </div>
        <Col sm="8">
          <input type="text" className={`${style["input-form"]} d-block mt-3 px-3`} value="المنزل" placeholder="تسمية العنوان مثلا(المنزل - العمل)" />
          <textarea className={`${style["input-form-area"]} p-2 mt-3`} rows="4" cols="50" value="القاهرة ٦ اكتوبر" placeholder="العنوان بالتفصيل" />
          <input type="text" value="01213621735" className={`${style["input-form"]} d-block mt-3 px-3`} placeholder="رقم الهاتف" />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className={`${style["btn-save"]} d-inline mt-2 `}>حفظ تعديل العنوان</button>
        </Col>
      </Row>
    </div>
  );
};

export default UserEditAddress;
