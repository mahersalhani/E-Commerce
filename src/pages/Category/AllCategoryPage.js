import React from "react";
import Pagination from "../../components/Utils/Pagination";
import CategoryContainer from "./../../components/Category/CategoryContainer";
// import baseUrl from "./../../Api/baseURL";
import AllcategoryHook from "./../../hook/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllcategoryHook();

  return (
    <div style={{ minHeight: "750px" }}>
      <CategoryContainer data={category.data} loading={loading} />

      {pageCount > 1 && <Pagination pageCount={pageCount} onPress={getPage} />}
    </div>
  );
};

export default AllCategoryPage;
