import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./auth.module.css";
import RegisetHook from "./../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    //
    name,
    email,
    password,
    passwordConfirm,
    loading,

    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,

    OnSubmit,
  ] = RegisetHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className={`py-5 d-flex justify-content-center ${style["hieght-search"]}`}>
        <Col sm="12" className="d-flex flex-column ">
          <label className={`mx-auto ${style["title-login"]}`}>تسجيل حساب جديد</label>

          <input
            //
            value={name}
            onChange={onChangeName}
            placeholder="اسم المستخدم..."
            type="text"
            className={`${style["user-input"]} mt-3 text-center mx-auto`}
          />

          <input
            //
            value={email}
            onChange={onChangeEmail}
            placeholder="الايميل..."
            type="email"
            className={`${style["user-input"]} mt-3 text-center mx-auto`}
          />

          <input
            //
            value={password}
            onChange={onChangePassword}
            placeholder="كلمه السر..."
            type="password"
            className={`${style["user-input"]} my-3 text-center mx-auto`}
          />

          <input
            //
            value={passwordConfirm}
            onChange={onChangeConfirmPassword}
            placeholder="تاكيد كلمة السر..."
            type="password"
            className={`${style["user-input"]} text-center mx-auto`}
          />

          <button
            //
            onClick={OnSubmit}
            className={`${style["btn-login"]} mx-auto mt-4`}
          >
            تسجيل الحساب
          </button>

          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                اضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
