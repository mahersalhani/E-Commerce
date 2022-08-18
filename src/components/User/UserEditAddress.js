import React from "react";
import { Row, Col } from "react-bootstrap";
import DeleteAddressHook from "../../hook/user/delete-address-hook";
import style from "./UserEditAddress.module.css";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const UserEditAddress = () => {
  const { id } = useParams();
  const {
    alias,
    details,
    phone,

    onAliasChange,
    onDetailsChange,
    onPhoneChange,
    onUpdate,
  } = DeleteAddressHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-2`}>تعديل العنوان </div>
        <Col sm="8">
          <input
            //
            value={alias}
            onChange={onAliasChange}
            type="text"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />

          <textarea
            //
            onChange={onDetailsChange}
            className={`${style["input-form-area"]} p-2 mt-3`}
            rows="4"
            cols="50"
            value={details}
            placeholder="العنوان بالتفصيل"
          />

          <input
            //
            onChange={onPhoneChange}
            type="text"
            value={phone}
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="رقم الهاتف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={onUpdate} className={`${style["btn-save"]} d-inline mt-2 `}>
            حفظ تعديل العنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserEditAddress;
