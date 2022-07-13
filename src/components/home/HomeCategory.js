import React from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTiltle from "./../Utils/SubTitle";
import HomeCategoryHook from "./../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [category, colors, loading] = HomeCategoryHook();

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between p-3">
        {!loading ? (
          // eslint-disable-next-line valid-typeof
          category.data ? (
            category.data.slice(0, 6).map((item, i) => {
              return <CategoryCard key={i} title={item.name} img={item.image} background={colors[i]} />;
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

export default HomeCategory;
