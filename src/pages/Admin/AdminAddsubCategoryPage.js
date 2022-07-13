import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAddSubCategory from "../../components/Admin/AdminAddSubCategory";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddsubCategoryPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="9">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddsubCategoryPage;
