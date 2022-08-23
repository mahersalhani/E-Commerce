import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import ProfileHook from "../../hook/user/profile-hook";
import editicon from "../../images/edit.png";
import style from "./UserProfile.module.css";

const UserProfile = () => {
  const {
    userData,

    name,
    email,
    show,

    handleShow,
    handelDelete,
    handleClose,

    onChnageName,
    onChnageEmail,

    chnagePassword,
    password,
    passwordConfirm,
    onPasswordChange,
    onPasswordConfirmChange,
  } = ProfileHook();

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تعديل البينات الشخصية</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={name} onChange={onChnageName} type="text" className={`${style["input-form"]} font d-block mt-3 px-3`} placeholder="اسم المستخدم" />
          <input value={email} onChange={onChnageEmail} type="text" className={`${style["input-form"]} font d-block mt-3 px-3`} placeholder="البريد الالكتروني" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="danger" onClick={handelDelete}>
            حفظ التعديل
          </Button>
        </Modal.Footer>
      </Modal>

      <div className={style["admin-content-text"]}>الصفحه الشخصية</div>
      <div className={`${style["user-address-card"]} my-3 px-2`}>
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم:</div>
            <div className={`p-1 ${style["item-delete-edit"]}`}>{userData.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div onClick={handleShow} style={{ cursor: "pointer" }} className="d-flex mx-2">
              <img alt="" className="ms-1 mt-2" src={editicon} height="17px" width="15px" />
              <p className={style["item-delete-edit"]}> تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الايميل:</div>
            <div className={`p-1 ${style["item-delete-edit"]}`}>{userData.email}</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className={style["admin-content-text"]}>تغير كملة المرور</div>
            <input
              //
              value={password}
              onChange={onPasswordChange}
              type="password"
              className={`${style["input-form"]} d-block mt-3 px-3`}
              placeholder="ادخل كلمة المرور الجديده"
            />
            <input
              //
              value={passwordConfirm}
              onChange={onPasswordConfirmChange}
              type="password"
              className={`${style["input-form"]} d-block mt-3 px-3`}
              placeholder="تاكيد كلمة السر"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button onClick={chnagePassword} className={`${style["btn-save"]} d-inline mt-2`}>
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UserProfile;
