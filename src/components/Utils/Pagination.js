import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPress }) => {
  const handlePageClick = (data) => {
    onPress(data.selected + 1);
  };

  return (
    <ReactPaginate
      //
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
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
