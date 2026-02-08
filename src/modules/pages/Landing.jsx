import React from "react";
import { useState, useEffect } from "react";

// RESOURCES
import global from "../../resources/global.json";
import fotoAbbraccio from "../../assets/images/volunteers.webp";
import marchio_colorato_base_bianca from "../../assets/logos/marchio_colorato_base_bianca.svg";

// COMPONENTS
import BentoBox from "../components/BentoBox";
import HorizontalScroll from "../components/HorizontalScroll";
import HorizontalSlider from "../components/HorizontalSlider";
import CustomButton from "../components/CustomButton";
import ColorBends from "../components/ColorBends";
import InfiniteScroll from "../components/InfiniteScroll";
import CardFlip from "../components/CardFlip";
import CardFlipMobile from "../components/CardFlipMobile";

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < global.UTILS.MOBILE_WIDTH);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section
        className="w-full p-[40px] content-end text-white uppercase relative overflow-hidden"
        style={{
          height: isMobile
            ? `calc(50vh - ${global.UTILS.NAV_HEIGHT})`
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "90px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[8vw] pb-5 leading-none font-gotham-ultra overflow-hidden ">
          Frase <br /> d'effetto <br /> con animazione
        </h1>
        <div className="w-full flex justify-end pr-10">
          <CustomButton label="Scopri chi siamo" />
        </div>

        <img
          src={marchio_colorato_base_bianca}
          alt="Marchio Colorato"
          className="absolute w-[30vw] right-[40px] top-[50px]"
        />
      </section>
      <section
        className="w-full p-[40px] flex items-end justify-end text-white relative overflow-hidden"
        style={{
          height: isMobile
            ? "auto"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "20px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        <BentoBox
          className="flex w-full h-auto md:h-full flex-col justify-end items-end gap-4 md:gap-[20px] text-right p-6 md:p-[40px] rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fotoAbbraccio})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] pb-5 leading-none font-gotham-ultra overflow-hidden uppercase">
            Il Team
          </h1>
          <p className="xl:text-[35px] lg:text-[25px] md:text-[20px] pb-5 leading-none overflow-hidden font-gotham-book w-full max-w-xl">
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <CustomButton label="Scopri il team" color="violet" />
        </BentoBox>
      </section>

      <HorizontalSlider />

      <section
        className="w-full p-[40px] flex flex-col justify-end text-white relative overflow-hidden"
        style={{
          height: isMobile
            ? "50vh"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "0px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        <div className="shrink-0 flex flex-col items-end text-right w-full">
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] pb-5 leading-none font-gotham-ultra overflow-hidden uppercase">
            Il Club
          </h1>
          <h2 className="xl:text-[35px] lg:text-[25px] md:text-[20px] pb-5 leading-tight md:leading-none font-gotham-book w-full max-w-xl break-words">
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h2>
        </div>
        {isMobile ? (
          <div className="block md:hidden w-full h-[200px]">
            <CardFlipMobile />
          </div>
        ) : (
          <div className="flex-1 w-full min-h-0">
            {" "}
            <CardFlip />
          </div>
        )}
      </section>
    </div>
  );
}
