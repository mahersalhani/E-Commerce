import React from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import style from "./AdminAddCategory.module.css";

const AdminAddCategory = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>اضف تصنيف</div>
        <Col sm="8">
          <div className={`${style["text-form"]} pb-2`}>صوره التصنيف</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <input type="text" className={`${style["input-form"]} d-block mt-3 px-3`} placeholder="اسم الماركه" />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className={`${style["btn-save"]} d-inline mt-2`}>حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCategory;
