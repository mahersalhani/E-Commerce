import React from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";

const CategoryContainer = ({ data, loading }) => {
  const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#ff6262", "#0034ff", "#ffd3e8"];

  return (
    <Container>
      <div className="admin-content-text mt-2 ">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {!loading ? (
          data ? (
            data.map((item, i) => {
              return <CategoryCard key={i} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />;
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
    </Container>
  );
};

export default CategoryContainer;
