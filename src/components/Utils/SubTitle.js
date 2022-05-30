import React from "react";
import style from "./SubTitle.module.css";

const SubTiltle = ({ title, btntitle }) => {
  return (
    <div className="d-flex justify-content-between pt-4">
      <div className={style["sub-title"]}>{title}</div>
      {btntitle ? (
        <div className={style["shopping-now"]}>{btntitle}</div>
      ) : //
      null}
    </div>
  );
};

export default SubTiltle;
