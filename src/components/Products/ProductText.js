import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ProductText.module.css";
import { useParams } from "react-router-dom";
import ViewProductsDetailsHook from "./../../hook/products/view-products-details-hook";
import rate from "../../images/rate.png";

const ProductText = () => {
  const { id } = useParams();

  const [item, images, brandItem] = ViewProductsDetailsHook(id);

  return (
    <div>
      <Row className="mt-2">
        {
          //
          item.category && <div className={style["cat-text"]}>{`${item.category.name} :`}</div>
        }
      </Row>
      <Row>
        <Col md="8">
          <div className={`${style["cat-title"]} d-inline`}>{item.title}</div>
          <div className="cat-rate d-inline mx-3">
            <div>
              {item.ratingsQuantity}
              <img style={{ width: "10px" }} src={rate} alt={"rate"} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          {brandItem.name && (
            <Fragment>
              <div className={`${style["cat-text"]} d-inline`}>الماركة :</div>
              <div className={`${style["barnd-text"]} d-inline mx-1`}>{brandItem.name} </div>
            </Fragment>
          )}
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.colors &&
            item.colors.map((color, i) => {
              return <div key={i} className={`${style["color"]} ms-2 border`} style={{ backgroundColor: color }}></div>;
            })}
        </Col>
      </Row>
      <Row className="mt-4">
        <div className={style["cat-text"]}>المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className={`${style["product-description"]} d-inline`}>{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className={`${style["product-price"]} d-inline px-3 py-3 border`}>TL{item.price}</div>
          <div className={`${style["product-cart-add"]} px-3 py-3 d-inline mx-3`}>اضف للعربة</div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductText;
