import React from "react";
import style from "./Error.module.css";

const ErrorPage = () => {
  return (
    <div class={style.error} style={{ minHeight: "750px" }}>
      <i class="fa-solid fa-bomb"></i>
      <p>!!Error Page not Found</p>
    </div>
  );
};

export default ErrorPage;
