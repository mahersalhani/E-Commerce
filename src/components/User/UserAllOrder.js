import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import style from "./UserAllOrder.module.css";

const UserAllOrder = () => {
  return (
    <div>
      <div className={`${style["admin-content-text"]} pb-4`}>اهلا محمد على</div>
      <Row className="justify-content-between">
        <UserAllOrderItem />
        <UserAllOrderItem />
        <UserAllOrderItem />
      </Row>
    </div>
  );
};

export default UserAllOrder;
