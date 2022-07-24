import React from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import style from "./auth.module.css";
import { ToastContainer } from "react-toastify";
import { ResetPasswordHook } from "./../../hook/auth/reset-password-hook";

const ResetPasswordPage = () => {
  const [
    //
    onChangeNewPassword,
    onChangeConfirmPassword,
    onSubmit,

    newPassword,
    confirmPassword,
    spinner,
  ] = ResetPasswordHook();

  return (
    <Container style={{ minHeight: "82vh" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <form onSubmit={onSubmit}>
          <Col sm="12" className="d-flex flex-column ">
            <label className={`mx-auto ${style["title-login"]}`}>ادخل كلمة السر الجديدة</label>

            <input
              //
              value={newPassword}
              onChange={onChangeNewPassword}
              placeholder="ادخل كلمة سر جديدة"
              type="password"
              className={`${style["user-input"]} my-3 text-center mx-auto`}
            />

            <input
              //
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="ادخل تاكيد كلمة سر جديدة"
              type="password"
              className={`${style["user-input"]} my-3 text-center mx-auto`}
            />

            {spinner && (
              <div className="center">
                <Spinner animation="border" role="status" />
              </div>
            )}

            <button
              //
              type="submit"
              className={`${style["btn-login"]} mx-auto mt-2`}
            >
              تغير كلمة المرور
            </button>
          </Col>
        </form>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default ResetPasswordPage;
