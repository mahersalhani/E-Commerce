import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import RateItem from "./ReatItem";
import RatePost from "./RatePost";
import style from "./Rate.module.css";
import ViewAllReviewHook from "./../../hook/reviews/view-all-reviews-hook";
import { useParams } from "react-router-dom";
import Pagination from "./../Utils/Pagination";

const RateContainer = ({ rateAvg, rateQty }) => {
  const { id } = useParams();

  const [data, onPress] = ViewAllReviewHook(id);

  let pageCount = 0;

  if (data.paginationResults) {
    pageCount = data.paginationResults.numberOfPages;
  }

  return (
    <Container className={`${style["rate-container"]} mt-2`}>
      <Row>
        <Col className="d-flex">
          <div className={`${style["sub-tile"]} d-inline p-1 `}>التقيمات</div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className={`${style["cart-rate"]}  d-inline  p-1 pt-2`}>{rateAvg}</div>
          <div className={`${style["rate-count"]} d-inline p-1 pt-2`}>({rateQty} تقييم)</div>
        </Col>
      </Row>
      <RatePost />
      {data.data && data.data.length > 0 ? (
        data.data.map((item, i) => {
          return (
            <RateItem
              //
              id={item._id}
              key={i}
              review={item}
              user={item.user}
            />
          );
        })
      ) : (
        <h5 className="center mt-4">لا يوجد تقيمات الان</h5>
      )}
      {pageCount > 1 && <Pagination onPress={onPress} pageCount={pageCount} />}
    </Container>
  );
};

export default RateContainer;
