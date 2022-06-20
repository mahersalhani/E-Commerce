import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "./../../components/User/UserSideBar";
import UserAllOrder from "./../../components/User/UserAllOrder";

const UserAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="9">
          <UserAllOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrdersPage;
