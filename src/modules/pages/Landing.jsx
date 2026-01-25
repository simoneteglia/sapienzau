import React from "react";
import { useState, useEffect } from "react";

// RESOURCES
import global from "../../resources/global.json";
import fotoAbbraccio from "../../assets/images/volunteers.webp";
import marchio_colorato_base_bianca from "../../assets/logos/marchio_colorato_base_bianca.svg";

// COMPONENTS
import BentoBox from "../components/BentoBox";
import HorizontalScroll from "../components/HorizontalScroll"

export default function Landing() {
  return (
    <div>
    <div
      className="w-full p-[40px] flex items-end text-white uppercase relative overflow-hidden"
      style={{
        height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
        marginTop: global.UTILS.NAV_HEIGHT,
      }}
    >
      <h1 className="text-[120px] leading-none font-gotham-ultra overflow-hidden ">Frase <br /> d'effetto <br /> con animazione</h1>
      <img 
        src={marchio_colorato_base_bianca} 
        alt="Marchio Colorato" 
        className="absolute w-[450px] right-[40px] top-[50px]"
      />
    </div>
    <div>
    <HorizontalScroll/>
    </div>
    </div>
  );
}
