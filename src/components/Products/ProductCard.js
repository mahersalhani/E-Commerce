import React from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import rate from "../../images/rate.png";
import style from "./Product.module.css";
import { ToastContainer } from "react-toastify";
import ProductCardHook from "./../../hook/products/product-card-hook";
// const { id } = useParams();

const ProductCard = ({ item, favProd }) => {
  const [spinner, favImg, handelFav] = ProductCardHook(favProd, item);

  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        {/* {id && ( */}
        <a href={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} alt={item.title} />
        </a>
        {/* )} */}
        {/* {!id && (
          <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
            <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} alt={item.title} />
          </Link>
        )} */}
        <div className="d-flex justify-content-end mx-2">
          {spinner ? (
            <Spinner className="mt-2" animation="border" variant="primary" />
          ) : (
            <img
              src={favImg}
              onClick={handelFav}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
                cursor: "pointer",
              }}
            />
          )}
        </div>
        <Card.Body>
          <Card.Title>
            <div className={style["card-title"]}>{item.title}</div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img className="" src={rate} alt="" height="16px" width="16px" />
                <div className={`${style["card-rate"]} mx-2`}>{item.ratingsAverage || 0}</div>
              </div>
              <div className="d-flex">
                <div className={`${style["card-currency"]} mx-1`}>TL</div>
                <div className={style["card-price"]}>{item.price}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
