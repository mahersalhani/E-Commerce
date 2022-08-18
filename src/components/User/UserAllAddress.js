import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAddressCard from "./UserAddressCard";
import style from "./UserAllAddress.module.css";
import ViewAllAddressHook from "./../../hook/user/view-all-address-hook";

const UserAllAddress = () => {
  const { data } = ViewAllAddressHook();

  return (
    <div>
      <div className="admin-content-text pb-4">دفتر العنوانين</div>
      {data.length > 0 ? (
        data.map((e) => {
          return <UserAddressCard content={e} key={e._id} />;
        })
      ) : (
        <h4>لا يوجد عناوين للعرض</h4>
      )}

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
