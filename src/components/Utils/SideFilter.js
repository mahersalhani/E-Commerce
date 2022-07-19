import React, { Fragment, useState } from "react";
import { Row } from "react-bootstrap";
import sort from "../../images/sort.png";
import style from "./SideFilter.module.css";
import SidebarSearchHook from "./../../hook/search/sidebar-search-hook";

const SideFilter = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [
    //
    categorires,
    brands,
    clickCategorires,
    clickBrands,
    priceFrom,
    priceTo,
  ] = SidebarSearchHook();

  let localFrom = sessionStorage.getItem("priceFrom");
  let localTo = sessionStorage.getItem("priceTo");

  return (
    <Fragment>
      <div
        //
        className={` ${style["side-title"]} ${style["side-filter"]} mt-4`}
        onClick={() => setToggleFilter(!toggleFilter)}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <img width="20px" height="20px" className="ms-3" src={sort} alt="" />
        فلتر
      </div>
      <div className="position-relative p-3">
        {toggleFilter && (
          <Row className={style["filter-holder"]}>
            <div className="d-flex flex-column mt-2 ">
              <div className="filter-title">الفئة</div>
              <div className="d-flex mt-3">
                <input onChange={clickCategorires} type="checkbox" value="all" id="all" />
                <label htmlFor="all" className={`${style["filter-sub"]} me-2`}>
                  الكل
                </label>
              </div>

              {categorires.length > 0 ? (
                categorires.map((item, i) => {
                  return (
                    <div key={i} className="d-flex mt-2">
                      <input onChange={clickCategorires} type="checkbox" id={item._id} value={item._id} />
                      <label htmlFor={item._id} className={`${style["filter-sub"]} me-2`}>
                        {item.name}
                      </label>
                    </div>
                  );
                })
              ) : (
                <h6> لا يوجد تصنيفات</h6>
              )}
            </div>

            <div className="d-flex flex-column mt-2">
              <div className="filter-title mt-3">الماركة</div>
              <div className="d-flex mt-3">
                <input onChange={clickBrands} type="checkbox" id="a-5" value="all" />
                <label htmlFor="a-5" className={`${style["filter-sub"]} me-2`}>
                  الكل
                </label>
              </div>

              {brands.length > 0 ? (
                brands.map((item, i) => {
                  return (
                    <div key={i} className="d-flex mt-2">
                      <input onChange={clickBrands} type="checkbox" id={item._id} value={item._id} />
                      <label htmlFor={item._id} className={`${style["filter-sub"]} me-2`}>
                        {item.name}
                      </label>
                    </div>
                  );
                })
              ) : (
                <h6> لا يوجد ماركات</h6>
              )}
            </div>

            <div className={`${style["filter-title"]} my-3`}>السعر</div>
            <div className="d-flex mt-1">
              <p className={`${style["filter-sub"]} my-2`}>من:</p>
              <input
                //
                value={localFrom}
                onChange={priceFrom}
                className="m-2 text-center"
                type="number"
                min={0}
                style={{ width: "50px", height: "25px" }}
              />
            </div>
            <div className="d-flex mt-1">
              <p className={`${style["filter-sub"]} my-2`}>الي:</p>
              <input
                //
                value={localTo}
                onChange={priceTo}
                className="m-2 text-center"
                type="number"
                min={0}
                style={{ width: "50px", height: "25px" }}
              />
            </div>
          </Row>
        )}
      </div>
    </Fragment>
  );
};

export default SideFilter;
