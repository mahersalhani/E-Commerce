import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import style from "./Rate.module.css";
import AddRateHook from "./../../hook/reviews/add-rate-hook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const RatePost = () => {
  const { id } = useParams();

  const [
    //
    onChangeRateText,
    onChangeRateValue,
    onSubmit,

    user,

    rateText,
    rateValue,
  ] = AddRateHook(id);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 0,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateValue(newValue);
    },
  };

  return (
    <div>
      {user !== "" ? (
        <>
          {user.role === "user" ? (
            <>
              <Row className="mt-3 ">
                <Col sm="12" className="me-5  d-flex">
                  <div className={`${style["rate-name"]}  d-inline ms-3 mt-1 `}>{user.name}</div>
                  <ReactStars {...setting} />
                </Col>
              </Row>
              <Row className="border-bottom mx-2">
                <Col className="d-felx me-4 pb-2">
                  <textarea
                    //
                    value={rateText}
                    onChange={onChangeRateText}
                    className="input-form-area p-2 mt-3"
                    rows="2"
                    cols="20"
                    placeholder="اكتب تعليقك...."
                  />
                  <div className=" d-flex justify-content-end al">
                    <div
                      //
                      onClick={onSubmit}
                      className={`${style["product-cart-add"]} px-3  py-2 text-center d-inline`}
                    >
                      اضف تعليق
                    </div>
                  </div>
                  <ToastContainer />
                </Col>
              </Row>
            </>
          ) : (
            <h4 className="center my-2">لا يسمح للادمن باضافة تعليق</h4>
          )}
        </>
      ) : (
        <h4 className="center my-2">يرجى تسجيل الدخول لاضافة تعليقك</h4>
      )}
    </div>
  );
};

export default RatePost;
