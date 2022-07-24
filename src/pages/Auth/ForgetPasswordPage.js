import React from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import style from "./auth.module.css";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "./../../hook/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const [OnChangeEmail, email, onSubmit, spinner] = ForgetPasswordHook();

  return (
    <Container style={{ minHeight: "82vh" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <form onSubmit={onSubmit}>
          <Col sm="12" className="d-flex flex-column ">
            <label className={`mx-auto ${style["title-login"]}`}>نسيت كلمة السر</label>

            <input
              //
              value={email}
              onChange={OnChangeEmail}
              placeholder="ادخل الايميل..."
              type="text"
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
              ارسال الكود
            </button>
          </Col>
        </form>
      </Row>

      <ToastContainer />
    </Container>
  );
};

export default ForgetPasswordPage;
