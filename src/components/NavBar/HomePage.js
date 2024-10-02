import "./HomePage.css";
import Home from "./Home.js";
import Trust from "./Trust.js";
import Total from "./Total.js";
import React from "react";
import Evalution from "./Evolution.js";
import ClientsProject from "./ClientsProject.js";
import ReviewsCon from "./ReviewsCon.js";
import Call from "./Call.js";


function HomePage(){
    return (
        <>
          <Home/>
          <Trust/>
          <Total/>
          <Evalution/>
          <ClientsProject/>
          {/* <Grid/> */}
          <ReviewsCon/>
          <Call/>
        </>
    );
}

export default HomePage;