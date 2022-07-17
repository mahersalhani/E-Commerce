import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAllProducts from "../../components/Admin/AdminAllProducts";
import Pagination from "../../components/Utils/Pagination";
import AdminSideBar from "./../../components/Admin/AdminSideBar";
import ViewAdminProductsHook from "./../../hook/admin/view-product-admin-hook";

const AdminAllProductsPage = () => {
  const [item, pagination, onPress] = ViewAdminProductsHook();

  let count = 0;
  if (pagination) {
    if (pagination.numberOfPages) {
      count = pagination.numberOfPages;
    }
  }

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="4" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="8" md="9">
          <AdminAllProducts products={item} />
        </Col>
        {count > 1 && <Pagination pageCount={count} onPress={onPress} />}
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
