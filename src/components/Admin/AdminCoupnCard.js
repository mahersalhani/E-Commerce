import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getAllCoupon } from "./../../Redux/actions/couponAction";
import { ToastContainer } from "react-toastify";

const AdminCoupnCard = ({ coupon }) => {
  const formDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handelDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    handleClose();
    await dispatch(getAllCoupon(coupon._id));
  };

  return (
    <div className={`user-address-card my-3 px-2`}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من عملية الحذف</div>
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

      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div
            className="p-2"
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            {" "}
            اسم الكوبون {coupon.name}
          </div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: "none" }}>
              <div className="d-flex mx-2">
                <img alt="" className="ms-1 mt-2" src={editicon} height="17px" width="15px" />
                <p className="item-delete-edit"> تعديل</p>
              </div>
            </Link>
            <div className="d-flex" onClick={handleShow}>
              <img alt="" className="ms-1 mt-2" src={deleteicon} height="17px" width="15px" />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            تاريخ الانتهاء :
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {formDate(coupon.expire)}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            نسبة الخصم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount}%
          </div>
        </Col>
      </Row>

      <ToastContainer />
    </div>
  );
};

export default AdminCoupnCard;
