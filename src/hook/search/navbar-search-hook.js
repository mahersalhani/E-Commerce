import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ViewSearchProductHook from "./../products/view-search-product-hook";

const NavbarSearchHook = () => {
  const [, , , , getProduct] = ViewSearchProductHook();

  const [searchWord, setSearchWord] = useState("");

  const nav = useNavigate();

  // when user type any word
  const onChangeSearch = (e) => {
    sessionStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);

    const path = window.location.pathname;
    if (path !== "/products") {
      nav("/products");
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      getProduct();
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [searchWord]);

  return [onChangeSearch, searchWord];
};

export default NavbarSearchHook;
