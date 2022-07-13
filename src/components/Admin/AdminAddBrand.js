import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import style from "./AdminAddBrand.module.css";
import AddBrandHook from "./../../hook/brand/add-brand-hook";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {
  const [img, name, loading, isPress, onChangeName, handleSubmit, onImageChange] = AddBrandHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>اضف الماركة</div>
        <Col sm="8">
          <div className={`${style["text-form"]} pb-2`}>صوره الالماركة</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                //
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              //
              type="file"
              name="image"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            //
            onChange={onChangeName}
            value={name}
            type="text"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="اسم الماركة"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className={`${style["btn-save"]} d-inline mt-2`}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null}
      <ToastContainer />
    </div>
  );
};

export default AdminAddBrand;
