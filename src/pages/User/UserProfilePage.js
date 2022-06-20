import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "./../../components/User/UserProfile";
import UserSideBar from "./../../components/User/UserSideBar";

const UserProfilePage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="3">
          <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="9">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};
export default UserProfilePage;
