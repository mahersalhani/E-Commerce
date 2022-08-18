import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AdminEditCoupon from "../../components/Admin/AdminEditCoupon";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminEditCouponPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="9">
          <AdminEditCoupon />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditCouponPage;
