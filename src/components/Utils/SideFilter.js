import React, { Fragment, useState } from "react";
import { Row } from "react-bootstrap";
import sort from "../../images/sort.png";
import style from "./SideFilter.module.css";

const SideFilter = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <Fragment>
      <div
        //
        className={`filter-title ${style["side-filter"]} mt-4`}
        onClick={() => setToggleFilter(!toggleFilter)}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <img width="20px" height="20px" className="ms-3" src={sort} alt="" />
        فلتر
      </div>
      <div className="position-relative p-3">
        {toggleFilter && (
          <Row className="filter-holder">
            <div className="d-flex flex-column mt-2 ">
              <div className="filter-title">الفئة</div>
              <div className="d-flex mt-3">
                <input type="checkbox" value="" id="all" />
                <label htmlFor="all" className="filter-sub me-2 ">
                  الكل
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a-1" value="" />
                <label htmlFor="a-1" className="filter-sub me-2 ">
                  اجهزة منزلية
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a2" value="" />
                <label htmlFor="a2" className="filter-sub me-2 ">
                  اجهزة منزلية
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a-3" value="" />
                <label htmlFor="a-3" className="filter-sub me-2 ">
                  اجهزة منزلية
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a-4" value="" />
                <label htmlFor="a-4" className="filter-sub me-2 ">
                  اجهزة منزلية
                </label>
              </div>
            </div>

            <div className="d-flex flex-column mt-2">
              <div className="filter-title mt-3">الماركة</div>
              <div className="d-flex mt-3">
                <input type="checkbox" id="a-5" value="" />
                <label htmlFor="a-5" className="filter-sub me-2 ">
                  الكل
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a-6" value="" />
                <label htmlFor="a-6" className="filter-sub me-2 ">
                  ابل
                </label>
              </div>
              <div className="d-flex mt-2">
                <input type="checkbox" id="a-7" value="" />
                <label htmlFor="a-7" className="filter-sub me-2 ">
                  سامسونج
                </label>
              </div>
            </div>

            <div className="filter-title my-3">السعر</div>
            <div className="d-flex mt-1">
              <p className="filter-sub my-2">من:</p>
              <input className="m-2 text-center" type="number" style={{ width: "50px", height: "25px" }} />
            </div>
            <div className="d-flex mt-1">
              <p className="filter-sub my-2">الي:</p>
              <input className="m-2 text-center" type="number" style={{ width: "50px", height: "25px" }} />
            </div>
          </Row>
        )}
      </div>
    </Fragment>
  );
};

export default SideFilter;
