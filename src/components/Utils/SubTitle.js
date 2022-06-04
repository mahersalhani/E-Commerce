import React from "react";
import { Link } from "react-router-dom";
import style from "./SubTitle.module.css";

const SubTiltle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className={style["sub-title"]}>{title}</div>
      {btntitle ? (
        <Link to={`${pathText}`} style={{ textDecoration: "none" }}>
          <div className={style["shopping-now"]}>{btntitle}</div>
        </Link>
      ) : //
      null}
    </div>
  );
};

export default SubTiltle;
