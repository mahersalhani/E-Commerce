import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./AdminAddSubCategory.module.css";
import { ToastContainer } from "react-toastify";
import AddSubCategoryHook from "./../../hook/subCategory/add-subcategory-hook";

const AdminAddSubCategory = () => {
  const [id, name, loading, categories, res, handelSubmit, handelChange, onCahngeName, option] = AddSubCategoryHook();

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}>اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            //
            value={name}
            onChange={onCahngeName}
            type="text"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="اسم التصنيف الفرعي"
          />

          <select name="category" id="cat" ref={option} className={`${style["select"]} mt-3 px-2 `} onChange={handelChange}>
            <option value="0">اختر تصنيف رئيسي</option>
            {categories.data
              ? categories.data.map((el, i) => {
                  return (
                    <option value={el._id} key={i}>
                      {el.name}
                    </option>
                  );
                })
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className={`${style["btn-save"]} d-inline mt-2`}>
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
