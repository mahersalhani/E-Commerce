import React from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import style from "./auth.module.css";
import { ToastContainer } from "react-toastify";
import VerifyCodeHook from "./../../hook/auth/verify-code-Hook";

const VerifyCodePage = () => {
  const [OnChangeCode, code, onSubmit, spinner] = VerifyCodeHook();

  return (
    <Container style={{ minHeight: "82vh" }}>
      <Row className="py-5 d-flex justify-content-center ">
        <form onSubmit={onSubmit}>
          <Col sm="12" className="d-flex flex-column ">
            <label className={`mx-auto ${style["title-login"]}`}>ادخل رمز المرسل الى الايميل</label>

            <input
              //
              value={code}
              onChange={OnChangeCode}
              placeholder="ادخل الرمز"
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

export default VerifyCodePage;
