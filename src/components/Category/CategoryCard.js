import React from "react";
import { Col } from "react-bootstrap";
import style from "./CategoryCard.module.css";

const CategoryCard = ({ background, img, title }) => {
  return (
    <Col
      //
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <div className={`${style["allCard"]} mb-3 `}>
        <div
          //
          className={style["categoty-card"]}
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <img alt="zcv" src={img} className={style["categoty-card-img"]} />
        <p className={`${style["categoty-card-text"]} my-2`}>{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
