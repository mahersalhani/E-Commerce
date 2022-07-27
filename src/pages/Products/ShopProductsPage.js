import React from "react";
import { Container } from "react-bootstrap";
import CategoryHeader from "../../components/Category/CategoryHeader";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import Pagination from "../../components/Utils/Pagination";
import SearchCountResult from "../../components/Utils/SearchCountResult";
import SideFilter from "../../components/Utils/SideFilter";
import ViewSearchProductHook from "./../../hook/products/view-search-product-hook";

const ShopProductsPage = () => {
  const [results, items, pagination, onPress, getProduct] = ViewSearchProductHook();

  let pageCount = 0;

  if (pagination) {
    if (pagination.numberOfPages) pageCount = pagination.numberOfPages;
  }

  return (
    <div style={{ minHeight: "720px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult onClick={getProduct} title={`يوجد ${results} نتيجة بحث`} />
        <SideFilter />
        {results > 0 ? (
          <CardProductsContainer product={items} title="" btntitle="" />
        ) : (
          //
          <h1 className="no_results">لا يوجد نتائج...</h1>
        )}
        {pageCount > 1 && <Pagination pageCount={pageCount} onPress={onPress} />}
      </Container>
    </div>
  );
};

export default ShopProductsPage;
