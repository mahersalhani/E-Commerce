import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import style from "./AdminAllProducts.module.css";

const AdminAllProducts = () => {
  return (
    <div>
      <div className={style["admin-content-text"]}>ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
