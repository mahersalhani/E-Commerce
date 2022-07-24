import React from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./auth.module.css";
import LoginHook from "./../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [
    //
    email,
    password,
    ,
    spinner,

    onChangeEmail,
    onChangePassword,
    onSubmit,
  ] = LoginHook();

  return (
    <Container style={{ minHeight: "82vh" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <form onSubmit={onSubmit}>
          <Col sm="12" className="d-flex flex-column ">
            <label className={`mx-auto ${style["title-login"]}`}>تسجيل الدخول</label>

            <input
              //
              value={email}
              onChange={onChangeEmail}
              placeholder="الايميل..."
              type="text"
              className={`${style["user-input"]} my-3 text-center mx-auto`}
            />

            <input
              //
              value={password}
              onChange={onChangePassword}
              placeholder="كلمه السر..."
              type="password"
              className={`${style["user-input"]} text-center mx-auto`}
            />

            <button
              //
              type="submit"
              className={`${style["btn-login"]} mx-auto mt-4`}
            >
              تسجيل الدخول
            </button>

            <label className="mx-auto my-4">
              ليس لديك حساب ؟{" "}
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>

            <label className="mx-auto ">
              <Link to="/user/forget-password" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer", fontSize: "18px", fontWeight: "bold" }} className="text-danger">
                  نسيت كلمة السر ؟{" "}
                </span>
              </Link>
            </label>

            {spinner && (
              <div className="center">
                <Spinner animation="border" role="status" />
              </div>
            )}
          </Col>
        </form>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
