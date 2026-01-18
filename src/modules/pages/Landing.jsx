import React from "react";
import { useState, useEffect } from "react";

// RESOURCES
import global from "../../resources/global.json";
import fotoAbbraccio from "../../assets/images/volunteers.webp";

// COMPONENTS
import BentoBox from "../components/BentoBox";

export default function Landing() {
  return (
    <div
      className="w-full flex items-center justify-center text-white font-objectsans"
      style={{
        height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
        marginTop: global.UTILS.NAV_HEIGHT,
        padding: global.UTILS.BENTO_BOX_PADDING,
      }}
    >
      <BentoBox
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${fotoAbbraccio})` }}
      ></BentoBox>
    </div>
  );
}
