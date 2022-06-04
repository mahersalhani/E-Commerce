import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./auth.module.css";

const LoginPage = () => {
  return (
    <Container style={{ minHeight: "82vh" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className={`mx-auto ${style["title-login"]}`}>تسجيل الدخول</label>
          <input placeholder="الايميل..." type="text" className={`${style["user-input"]} my-3 text-center mx-auto`} />
          <input placeholder="كلمه السر..." type="password" className={`${style["user-input"]} text-center mx-auto`} />
          <button className={`${style["btn-login"]} mx-auto mt-4`}>تسجيل الدخول</button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              الدخول ادمن
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger mx-3">
              الدخول مستخدم
            </span>
          </Link>
        </label>
      </Row>
    </Container>
  );
};

export default LoginPage;
