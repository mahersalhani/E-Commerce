import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAddProducts from "../../components/Admin/AdminAddProducts";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddProductPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="9">
          <AdminAddProducts />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAddProductPage;
