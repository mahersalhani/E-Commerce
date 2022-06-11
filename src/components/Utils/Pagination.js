import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      //
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      pageCount={100}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3 mt-5"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
