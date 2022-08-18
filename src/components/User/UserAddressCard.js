import React, { useEffect, useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import style from "./UserAddressCard.module.css";
import { useDispatch } from "react-redux";
import { deleteAddress, getAllAddresses } from "../../Redux/actions/addressAction";

const UserAddressCard = ({ content }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handelDelete = async () => {
    await dispatch(deleteAddress(content._id));
    handleClose();
    await dispatch(getAllAddresses());
  };

  return (
    <>
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

      <div className={`${style["user-address-card"]} my-3 px-2`}>
        <Row className="d-flex justify-content-between  ">
          <Col xs="4">
            <div className="p-2">{content.alias}</div>
          </Col>
          <Col xs="4" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
              <div className="d-flex mx-2">
                <img alt="" className="ms-1 mt-2" src={editicon} height="17px" width="15px" />
                <Link to={`/user/edit-address/${content._id}`} style={{ textDecoration: "none" }}>
                  <p className="item-delete-edit"> تعديل</p>
                </Link>
              </div>
              <div className="d-flex" onClick={handleShow}>
                <img alt="" className="ms-1 mt-2" src={deleteicon} height="17px" width="15px" />
                <p className="item-delete-edit"> ازاله</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <div
              style={{
                color: "#555550",
                fontFamily: "Almarai",
                fontSize: "14px",
              }}
            >
              {content.details}
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
              رقم الهاتف:
            </div>

            <div
              style={{
                color: "#979797",
                fontFamily: "Almarai",
                fontSize: "16px",
              }}
              className="mx-2"
            >
              {content.phone}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserAddressCard;
