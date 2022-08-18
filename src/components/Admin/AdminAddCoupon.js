import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import style from "./AdminAddBrand.module.css";
import AddCouponHook from "./../../hook/coupon/add-coupon-hook";
import AdminCoupnCard from "./AdminCoupnCard";

const AdminAddCoupon = () => {
  const dataRef = useRef();

  const [
    //
    name,
    date,
    dis,

    onChangeName,
    onChangeDate,
    onChangeDis,

    onCreateCoupon,
    allCoupon,
  ] = AddCouponHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>اضف كوبون جديد</div>
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
              type="text"
              className="input-form d-block mt-3 px-3"
              placeholder="تاريخ الانتهاء"
              onFocus={() => (dataRef.current.type = "date")}
              onBlur={() => (dataRef.current.type = "text")}
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
          <button onClick={onCreateCoupon} className={`${style["btn-save"]} d-inline mt-2`}>
            اضف كوبون
          </button>
        </Col>
      </Row>

      <Row>
        <Col sm="8">
          {allCoupon && allCoupon.data && allCoupon.data.length > 0 ? (
            allCoupon.data.map((coupon, i) => {
              return <AdminCoupnCard key={i} coupon={coupon} />;
            })
          ) : (
            <h4>لا يوجد كوبونات للعرض</h4>
          )}
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminAddCoupon;
