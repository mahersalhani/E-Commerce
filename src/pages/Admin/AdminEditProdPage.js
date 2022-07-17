import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminEditProducts from "./../../components/Admin/AdminEditProducts";

const AdminEditProdPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="9">
          <AdminEditProducts />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminEditProdPage;
