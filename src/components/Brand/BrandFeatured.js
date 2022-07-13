import React, { Fragment } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import SubTiltle from "../Utils/SubTitle";
import BrandCard from "./BrandsCard";
import HomeBrandHook from "./../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [brands, loading] = HomeBrandHook();

  console.log(brands);

  return (
    <Container>
      {!loading && brands[0] !== 201 && brands.data.length > 0 && (
        <Fragment>
          <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
          <Row className="my-1 d-flex justify-content-between">
            {!loading ? (
              brands.data ? (
                brands.data.slice(0, 5).map((item, i) => {
                  return <BrandCard key={i} img={item.image} />;
                })
              ) : (
                <h4 className="center">لا يوجد تصنيفات</h4>
              )
            ) : (
              <div className="center">
                <Button variant="primary" disabled>
                  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                  Loading...
                </Button>
              </div>
            )}
          </Row>
        </Fragment>
      )}
    </Container>
  );
};

export default BrandFeatured;
