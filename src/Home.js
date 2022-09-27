import React from "react";
import Common from "./Common";
import web from "../src/images/images.jpeg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your bussiness with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
