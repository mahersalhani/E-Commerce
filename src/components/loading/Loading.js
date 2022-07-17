import React from "react";
import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className={style.loading_holder}>
      <div className={style.loading}></div>
    </div>
  );
};

export default Loading;
