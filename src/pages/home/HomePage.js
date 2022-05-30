import React from "react";
import HomeCatagory from "../../components/home/HomeCategory";
import NavBarLogIn from "../../components/Utils/NavBarLogIn";
import Slider from "./../../components/home/Slider";

const HomePage = () => {
  return (
    <div className="font">
      <NavBarLogIn />
      <Slider />
      <HomeCatagory />
    </div>
  );
};

export default HomePage;
