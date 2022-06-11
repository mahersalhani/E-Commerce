import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utils/Pagination";
import SearchCountResult from "../../components/Utils/SearchCountResult";
import SideFilter from "../../components/Utils/SideFilter";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="اكثر من 600..." />
        <SideFilter />
        <CardProductsContainer title="" btntitle="" />
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
