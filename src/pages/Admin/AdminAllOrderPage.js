import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminAllOrders from "../../components/Admin/AdminAllOrders";
import Pagination from "../../components/Utils/Pagination";
import AdminSideBar from "./../../components/Admin/AdminSideBar";

const AdminAllOrderPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="9">
          <AdminAllOrders />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default AdminAllOrderPage;
