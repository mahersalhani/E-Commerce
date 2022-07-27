import React, { useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import style from "./Rate.module.css";
import DeleteRateHook from "./../../hook/reviews/delete-rate-hook";
import EditRateHook from "./../../hook/reviews/edit-rate-hook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ review, user }) => {
  const [
    //
    isUser,
    showDelete,

    handleClose,
    handleShow,
    handelDelete,
  ] = DeleteRateHook(user, review._id);

  const [
    //
    showEdit,
    onChangeRateText,
    onChangeRateValue,

    handleCloseEdit,
    handleShowEdit,
    handelEdit,
    newRateText,
    newRateValue,
  ] = EditRateHook(review);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
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
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من حذف التقييم</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="danger" onClick={handelDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactStars {...setting} />

          <input
            //
            value={newRateText}
            onChange={onChangeRateText}
            type={"text"}
            className="font w-100"
            style={{ border: "2px #ccc solid", padding: "10px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            تراجع
          </Button>
          <Button variant="danger" onClick={handelEdit}>
            تعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="d-felx me-5">
          <div className={`${style["rate-name"]}  d-inline ms-2`}>{review.user.name}</div>
          <img className="" src={rate} alt="" height="16px" width="16px" />
          <div className={`${style["cart-rate"]}  d-inline  p-1 pt-2`}>{review.ratings}</div>
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2 m-2">
          <div className={`${style["rate-description"]}  d-inline ms-2`}>{review.title}</div>

          {isUser && (
            <div className="d-inline d-flex justify-content-end">
              <img
                //
                onClick={handleShow}
                alt="delete"
                src={deleteicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
              />
              <img
                //
                onClick={handleShowEdit}
                alt="delete"
                src={editicon}
                width="20px"
                height="20px"
                className="me-3"
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default RateItem;
