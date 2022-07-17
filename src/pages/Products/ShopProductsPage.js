import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utils/Pagination";
import SearchCountResult from "../../components/Utils/SearchCountResult";
import SideFilter from "../../components/Utils/SideFilter";
import ViewSearchProductHook from "./../../hook/products/view-search-product-hook";

const ShopProductsPage = () => {
  const [items, pagination, onPress] = ViewSearchProductHook();

  console.log(pagination);

  let pageCount = 0;

  if (pagination) {
    if (pagination.numberOfPages) pageCount = pagination.numberOfPages;
  }

  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title={`يوجد ${items.length} نتيجة بحث`} />
        <SideFilter />
        <CardProductsContainer product={items} title="" btntitle="" />
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
