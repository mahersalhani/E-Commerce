import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import Pagination from "./../../components/Utils/Pagination";

const AllBrandPage = () => {
  return (
    <div style={{ minHeight: "750px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrandPage;
