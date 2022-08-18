import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import style from "./AdminAddBrand.module.css";
import EditCouponHook from "./../../hook/coupon/edit-coupon-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const dataRef = useRef();

  const { id } = useParams();

  const [
    //
    name,
    date,
    dis,

    onChangeName,
    onChangeDate,
    onChangeDis,

    onEditCoupon,
  ] = EditCouponHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>تعديل الكوبون</div>
        <Col sm="8">
          <div>
            <input
              //
              value={name}
              onChange={onChangeName}
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="اسم الكوبون"
            />
            <input
              //
              value={date}
              onChange={onChangeDate}
              ref={dataRef}
              type="date"
              className="input-form d-block mt-3 px-3"
              placeholder="تاريخ الانتهاء"
            />
            <input
              //
              value={dis}
              onChange={onChangeDis}
              type="number"
              className="input-form d-block mt-3 px-3"
              placeholder="نسبة خصم الكوبون"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onEditCoupon} className={`${style["btn-save"]} d-inline mt-2`}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminEditCoupon;
