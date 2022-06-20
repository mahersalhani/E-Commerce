import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import style from "./UserAllAddress.module.css";

const UserAllAddress = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />

      <Row className="justify-content-center">
        <Col sm="5" className="d-flex justify-content-center">
          <Link to="/user/add-address" style={{ textDecoration: "none" }}>
            <button className={style["btn-add-address"]}>اضافه عنوان جديد</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllAddress;
