import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserEditAddress from "./../../components/User/UserEditAddress";

const UserEditAddressPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="9">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  );
};
export default UserEditAddressPage;
