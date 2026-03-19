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
        className="w-full px-[15px] min-[480px]:px-[60px] flex flex-col min-[480px]:flex-row items-center justify-center min-[480px]:justify-between text-white uppercase relative overflow-hidden bg-black"
        style={{
          minHeight: isMobile
            ? "auto"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "120px" : global.UTILS.NAV_HEIGHT,
          paddingBottom: isMobile ? "60px" : "0px",
        }}
      >
        <div className="flex flex-col min-[480px]:flex-row items-center min-[480px]:justify-between w-full min-[480px]:max-w-[1600px] mx-auto min-[480px]:gap-10">
          <div className="w-full min-[480px]:w-auto text-center min-[480px]:text-left flex flex-col items-center min-[480px]:items-start">
            <h1 className="flex flex-col text-[9.5vw] min-[480px]:text-[7vw] leading-[0.8] font-gotham-ultra m-0 min-[480px]:ml-[80px] whitespace-nowrap">
              <span>Sapienza is</span>
            </h1>
          </div>
          <div className="w-full min-[480px]:w-auto flex justify-center min-[480px]:justify-end mt-4 min-[480px]:mt-0 px-2 min-[480px]:px-0">
            <img
              src={marchio_colorato_base_bianca}
              alt="Marchio Colorato"
              className="w-[90%] max-w-full min-[480px]:w-[30vw] min-[480px]:max-w-[620px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full text-white relative overflow-hidden bg-black"
        style={{
          marginTop: isMobile ? "20px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        {/* DESKTOP: BENTO */}
        <div className="hidden min-[480px]:flex w-full p-[40px] items-end justify-end">
          <BentoBox
            className="flex w-full h-auto min-h-[50vh] md:h-full flex-col justify-end items-end text-right p-6 md:p-[40px] rounded-2xl overflow-hidden"
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
        </div>

        {/* MOBILE: BLOB E TESTO ASSOLUTI */}
        <div className="flex min-[480px]:hidden relative w-full flex-col items-end pt-[10px] pb-[230px]">
          {/* LATO TESTO */}
          <div className="w-[75%] relative z-10 text-right pr-[20px]">
            <h1 className="text-[10vw] leading-none font-gotham-ultra uppercase text-white mb-2">
              Team
            </h1>
            <p className="text-[4vw] leading-snug font-gotham-book text-white w-[60%] ml-auto">
              I team di SapienzaU sono il cuore del progetto. Divisione del
              lavoro, idee e impegno sono i valori che rapprestano al meglio
              l’identità di ogni gruppo.
            </p>
          </div>

          {/* LATO IMMAGINE */}
          <div className="absolute top-[120px] left-[-15%] w-[80%] z-0 pointer-events-none">
            <img
              src={fotoAbbraccio}
              className="masked-image2 object-cover w-full h-[300px]"
            />
          </div>
        </div>
      </section>

      <HorizontalSlider />

      <section
        className="w-full px-[20px] pt-[20px] pb-[40px] md:p-[40px] flex flex-col justify-end text-white relative overflow-hidden mb-0 md:mb-[100px]"
        style={{
          height: isMobile
            ? "auto"
            : `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: isMobile ? "0px" : global.UTILS.NAV_HEIGHT,
        }}
      >
        <div className="shrink-0 flex flex-col items-end text-right w-full pt-4 md:pt-0">
          <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] pb-5 leading-none font-gotham-ultra overflow-hidden uppercase">
            Club
          </h1>
          <h2 className="xl:text-[35px] lg:text-[25px] md:text-[20px] pb-5 md:pb-[50px] leading-tight md:leading-none font-gotham-book w-full max-w-2xl break-words">
            Sei pronto a “clubare” con noi? Unisciti all’esclusivo Club di
            SapienzaU per rimanere aggiornato su ogni novità.
          </h2>
        </div>
        {isMobile ? (
          <div className="block md:hidden w-full h-[200px] mt-4">
            <CardFlipMobile />
          </div>
        ) : (
          <div className="flex-1 w-full min-h-0">
            <CardFlip />
          </div>
        )}
      </section>
    </div>
  );
}
