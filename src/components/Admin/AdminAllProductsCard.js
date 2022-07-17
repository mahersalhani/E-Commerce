import React, { useState, useEffect } from "react";
import { Col, Card, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import prod1 from "../../images/prod1.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "./../../Redux/actions/productsAction";
import notify from "./../../hook/useNotify";
import { ToastContainer } from "react-toastify";

const AdminAllProductsCard = (product) => {
  let prod = {};
  if (product.product) prod = product.product;

  const dispatch = useDispatch();
  const res = useSelector((state) => state.product.deleteProd);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelDelete = async () => {
    await dispatch(deleteProduct(prod._id));

    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  useEffect(() => {
    if (res)
      if (res === "تم الحذف بنجاح") {
        notify("تم الحذف بنجاح", "success");
      } else if (res.length === 0) {
      } else {
        notify("هناك مشكلة بعملية الحذف", "error");
      }
  }, [res]);

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="font">تاكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">هل انت متاكد من عملية الحذف للمنتج</div>
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

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              ازاله
            </div>
            <Link to={`/admin/editproduct/${prod._id}`} style={{ textDecoration: "none" }}>
              <div className="d-inline item-delete-edit">تعديل</div>
            </Link>
          </Col>
        </Row>
        <a href={`/products/${prod._id}`} style={{ textDecoration: "none" }}>
          <Card.Img alt={"prod photo"} style={{ height: "228px", width: "100%" }} src={prod.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">{prod.title} </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{prod.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">TL</div>
                  <div className="card-price">{prod.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default AdminAllProductsCard;
