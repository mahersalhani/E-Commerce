import React from "react";
import Pagination from "../../components/Utils/Pagination";
import CategoryContainer from "./../../components/Category/CategoryContainer";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "750px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
