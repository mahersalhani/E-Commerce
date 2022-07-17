import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import style from "./AdminAllProducts.module.css";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className={style["admin-content-text"]}>ادارة جميع المنتجات</div>
      <Row className="justify-content-start">
        {products && products.data ? (
          products.data.map((product, i) => {
            return <AdminAllProductsCard key={i} product={product} />;
          })
        ) : (
          <h2 className="center">لا يوجد بينات للعرض</h2>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
