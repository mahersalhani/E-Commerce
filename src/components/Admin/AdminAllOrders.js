import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import style from "./AdminAllProducts.module.css";

const AdminAllOrders = () => {
  return (
    <div>
      <div className={style["admin-content-text"]}>ادارة جميع الطلبات</div>
      <Row className="justify-content-start">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
    </div>
  );
};
export default AdminAllOrders;
