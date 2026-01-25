import React from "react";
import { useState, useEffect } from "react";

// RESOURCES
import global from "../../resources/global.json";
import fotoAbbraccio from "../../assets/images/volunteers.webp";
import marchio_colorato_base_bianca from "../../assets/logos/marchio_colorato_base_bianca.svg";

// COMPONENTS
import BentoBox from "../components/BentoBox";
import HorizontalScroll from "../components/HorizontalScroll";

export default function Landing() {
  return (
    <div>
      <>
        <section
          className="w-full p-[40px] flex items-end text-white uppercase relative overflow-hidden"
          style={{
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
          }}
        >
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] leading-none font-gotham-ultra overflow-hidden ">
            Frase <br /> d'effetto <br /> con animazione
          </h1>
          <img
            src={marchio_colorato_base_bianca}
            alt="Marchio Colorato"
            className="absolute w-[450px] right-[40px] top-[50px]"
          />
        </section>
        <HorizontalScroll />
        <section
          className="w-full p-[40px] flex items-end justify-end text-white relative overflow-hidden"
          style={{
            height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            marginTop: global.UTILS.NAV_HEIGHT,
          }}
        >
          <BentoBox
            className="flex w-full h-full flex items-end justify-end flex-col gap-[20px] text-right p-[40px]"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fotoAbbraccio})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] leading-none font-gotham-ultra overflow-hidden uppercase">
              Il Team
            </h1>
            <p className="font-gotham-book lg:text-[35px] w-xl">
              consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
          </BentoBox>
        </section>
      </>
    </div>
  );
}
