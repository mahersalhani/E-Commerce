import React from "react";
import NavBarLogIn from "../../components/Utils/NavBarLogIn";
import Slider from "./../../components/home/Slider";

const HomePage = () => {
  return (
    <div className="font">
      <NavBarLogIn></NavBarLogIn>
      <Slider></Slider>
    </div>
  );
};

export default HomePage;
