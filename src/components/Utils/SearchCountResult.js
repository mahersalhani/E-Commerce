import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
import style from "./SearchCountResult.module.css";

const SearchCountResult = ({ title, onClick }) => {
  const handler = () => {};

  const clickMe = (key) => {
    sessionStorage.setItem("sortType", key);
    onClick();
  };

  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className={style["sub-title"]}>{title}</div>
      <div className={`${style["search-count-text"]} d-flex `}>
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1">
              <img width="20px" height="20px" className="ms-1" src={sort} alt="" />
              ترتيب حسب
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className={style["card-filter"]}>
            <div onClick={() => clickMe("")} className={`border-bottom ${style["card-filter-item"]}`}>
              بدون ترتيب
            </div>
            <div onClick={() => clickMe("الاكثر مبيعا")} className={`border-bottom ${style["card-filter-item"]}`}>
              الاكثر مبيعا
            </div>
            <div onClick={() => clickMe("الاعلي تقييما")} className={`border-bottom ${style["card-filter-item"]}`}>
              الاعلي تقييما
            </div>
            <div onClick={() => clickMe("السعر من الاقل للاعلي")} className={`border-bottom ${style["card-filter-item"]}`}>
              السعر من الاقل للاعلي
            </div>
            <div onClick={() => clickMe("السعر من الاعلي للاقل")} className={style["card-filter-item"]}>
              السعر من الاعلي للاقل
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
