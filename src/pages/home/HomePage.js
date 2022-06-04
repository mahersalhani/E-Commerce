import React from "react";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import DiscountSection from "../../components/home/DiscountSection";
import HomeCatagory from "../../components/home/HomeCategory";
import Slider from "./../../components/home/Slider";
import CardProductsContainer from "./../../components/Products/CardProductsContainer";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCatagory />
      <CardProductsContainer title={"الاكثر مبيعا"} btntitle={"المزيد"} />
      <DiscountSection />
      <CardProductsContainer title={"احدث الازياء"} btntitle={"المزيد"} />
      <BrandFeatured title={"احدث الازياء"} btntitle={"المزيد"} />
    </div>
  );
};

export default HomePage;
