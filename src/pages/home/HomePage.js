import React from "react";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import DiscountSection from "../../components/home/DiscountSection";
import HomeCatagory from "../../components/home/HomeCategory";
import Slider from "./../../components/home/Slider";
import CardProductsContainer from "./../../components/Products/CardProductsContainer";
import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();

  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCatagory />
      <CardProductsContainer product={items} title={"الاكثر مبيعا"} btntitle={"المزيد"} pathText="/products" />
      <DiscountSection />
      <CardProductsContainer product={items} title={"احدث الازياء"} btntitle={"المزيد"} pathText="/products" />
      <BrandFeatured title={"اشهر الماركات"} btntitle={"المزيد"} />
    </div>
  );
};

export default HomePage;
