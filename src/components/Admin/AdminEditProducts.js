import React from "react";
import { Row, Col } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import add from "../../images/add.png";
import style from "./AdminAddProducts.module.css";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";
import { ToastContainer } from "react-toastify";
import Loading from "./../loading/Loading";
import { useParams } from "react-router-dom";
import AdimeEditProductsHook from "./../../hook/products/edit-product-hook";

const AdminEditProducts = () => {
  const { id } = useParams();

  const [
    //
    show,
    category,
    brand,
    priceAfter,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSelectCategory,
    handelSubmit,
    onSelectBrand,
    colors,
    priceBefor,
    qty,
    prodDes,
    prodName,
    loadingSpiner,
    onChangeName,
    onChangeDes,
    onChangePriceBefore,
    onChangePriceAfter,
    onChangeQty,
    onShowColor,
    CatId,
    BrandId,
  ] = AdimeEditProductsHook(id);

  return (
    <div>
      <Row className="justify-content-start ">
        <div className={`${style["admin-content-text"]} pb-4`}> تعديل المنتج - {prodName}</div>
        <Col sm="8">
          <div className={`${style["text-form"]} pb-2`}> صور للمنتج</div>

          <MultiImageInput
            //
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={5}
            cropConfig={{ minWidth: 100 }}
          />

          <input
            //
            value={prodName}
            onChange={onChangeName}
            type="text"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="اسم المنتج"
          />

          <textarea
            //
            value={prodDes}
            onChange={onChangeDes}
            className={`${style["input-form-area"]} p-2 mt-3`}
            rows="4"
            cols="50"
            placeholder="وصف المنتج"
          />

          <input
            //
            value={priceBefor}
            onChange={onChangePriceBefore}
            type="number"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="السعر قبل الخصم"
          />

          <input
            //
            value={priceAfter}
            onChange={onChangePriceAfter}
            type="number"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="سعر بعد الخصم"
          />

          <input
            //
            value={qty}
            onChange={onChangeQty}
            type="number"
            className={`${style["input-form"]} d-block mt-3 px-3`}
            placeholder="الكميةالمتاحة"
          />

          <select
            //
            value={CatId}
            onChange={onSelectCategory}
            name="category"
            className={`${style["select"]} ${style["input-form-area"]} mt-3 px-2 `}
          >
            <option value="0">التصنيف الرئيسي</option>
            {category.data
              ? category.data.map((item, i) => {
                  return (
                    <option key={i} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <Multiselect
            //
            className="mt-2 text-end"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />

          <select
            //
            value={BrandId}
            onChange={onSelectBrand}
            name="brand"
            className={`${style["select"]} ${style["input-form-area"]} mt-3 px-2 `}
          >
            <option value="0">اختر ماركة</option>

            {brand.data
              ? brand.data.map((item, i) => {
                  return (
                    <option key={i} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>

          <div className="mt-1 d-flex">
            {colors.map((el, i) => {
              return (
                <div
                  //
                  key={i}
                  onClick={() => {
                    removeColor(el);
                  }}
                  className={`${style["color"]} ms-2 border  mt-1`}
                  style={{ backgroundColor: el }}
                ></div>
              );
            })}

            {colors.length < 10 && (
              <img
                //
                onClick={onShowColor}
                style={{ cursor: "pointer" }}
                src={add}
                alt=""
                width="30px"
                height="35px"
                className=""
              />
            )}

            {show && <CompactPicker onChangeComplete={handelChangeComplete} />}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {loadingSpiner && <Loading />}
      <ToastContainer />
    </div>
  );
};

export default AdminEditProducts;
