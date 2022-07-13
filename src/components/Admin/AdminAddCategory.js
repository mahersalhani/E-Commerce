import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import style from "./AdminAddCategory.module.css";
import { ToastContainer } from "react-toastify";
import AddCategoryHook from "./../../hook/category/add-category-hook";

const AdminAddCategory = () => {
  const [img, name, loading, isPress, onChangeName, handleSubmit, onImageChange] = AddCategoryHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>اضف تصنيف</div>
        <Col sm="8">
          <div className={`${style["text-form"]} pb-2`}>صوره التصنيف</div>
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
            placeholder="اسم التصنيف"
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

export default AdminAddCategory;
