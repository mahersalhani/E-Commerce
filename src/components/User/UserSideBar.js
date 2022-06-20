import React from "react";
import { Link } from "react-router-dom";
import style from "./UserSideBar.module.css";

const UserSideBar = () => {
  return (
    <div className={style["sidebar"]}>
      <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: "none" }}>
          <div className={`${style["admin-side-text"]} mt-3 border-bottom p-2 mx-auto text-center`}>اداره الطلبات</div>
        </Link>
        <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
          <div className={`${style["admin-side-text"]} my-1 border-bottom p-2 mx-auto text-center`}>المنتجات المفضلة</div>
        </Link>
        <Link to="/user/addresses" style={{ textDecoration: "none" }}>
          <div className={`${style["admin-side-text"]} my-1 border-bottom p-2 mx-auto text-center`}>العنوانين الشخصية</div>
        </Link>
        <Link to="/user/profile" style={{ textDecoration: "none" }}>
          <div className={`${style["admin-side-text"]} my-1 border-bottom p-2 mx-auto text-center`}>الملف الشخصي</div>
        </Link>
      </div>
    </div>
  );
};
export default UserSideBar;
