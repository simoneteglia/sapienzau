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
        className="w-full px-[20px] lg:px-[60px] flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between text-white uppercase relative overflow-hidden bg-black"
        style={{
          minHeight: isMobile
            ? "auto"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "120px" : global.UTILS.NAV_HEIGHT,
          paddingBottom: isMobile ? "60px" : "0px",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-[1600px] mx-auto lg:gap-10">
          <div className="w-full lg:w-auto text-left">
            <h1 className="flex flex-col xl:text-[110px] lg:text-[90px] md:text-[80px] text-[15vw] leading-[0.8] font-gotham-ultra ml-[20px] md:ml-[80px]">
              <span>Sapienza is</span>
            </h1>
            {/* <div className="w-full flex justify-end pr-10">
          <CustomButton label="Scopri chi siamo" />
        </div> */}
          </div>
          <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src={marchio_colorato_base_bianca}
              alt="Marchio Colorato"
              className="w-[60vw] lg:w-[30vw] max-w-[300px] lg:max-w-[620px] h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full p-[40px] flex items-end justify-end text-white relative overflow-hidden"
        style={{
          marginTop: isMobile ? "20px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        <BentoBox
          className="flex w-full h-auto min-h-[50vh] md:h-full flex-col justify-end items-end gap-4 md:gap-[20px] text-right p-6 md:p-[40px] rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fotoAbbraccio})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] pb-5 leading-none font-gotham-ultra overflow-hidden uppercase">
            Team
          </h1>
          <p className="xl:text-[35px] lg:text-[25px] md:text-[20px] text-[16px] pb-5 leading-none overflow-hidden font-gotham-book w-full max-w-2xl">
            I team di SapienzaU sono il cuore del progetto. Divisione del
            lavoro, idee e impegno sono i valori che rapprestano al meglio
            l’identità di ogni gruppo.
          </p>
          {/* <CustomButton label="Scopri il team" color="violet" /> */}
        </BentoBox>
      </section>

      <HorizontalSlider />

      <section
        className="w-full p-[40px] flex flex-col justify-end text-white relative overflow-hidden"
        style={{
          height: isMobile
            ? "60vh"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "0px" : global.UTILS.NAV_HEIGHT, //modifica se testo club tagliato
        }}
      >
        <div className="shrink-0 flex flex-col items-end text-right w-full">
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] pb-5 leading-none font-gotham-ultra overflow-hidden uppercase">
            Club
          </h1>
          <h2 className="xl:text-[35px] lg:text-[25px] md:text-[20px] pb-5 leading-tight md:leading-none font-gotham-book w-full max-w-2xl break-words">
            Sei pronto a “clubare” con noi? Unisciti all’esclusivo Club di
            SapienzaU per rimanere aggiornato su ogni novità.
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
