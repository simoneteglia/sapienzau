import React from "react";
import { useState, useEffect } from "react";

// RESOURCES
import global from "../../resources/global.json";
import fotoAbbraccio from "../../assets/images/volunteers.webp";
import team_it from "../../assets/logos/team_it.png";
import team_la from "../../assets/logos/team_la.png";
import team_pem from "../../assets/logos/team_pem.png";
import team_dex from "../../assets/logos/team_dex.png";
import team_hra from "../../assets/logos/team_hra.png";
import team_cemm from "../../assets/logos/team_cemm.png";
import GoldMember from "../../assets/images/cardflip/goldmember.png";
import BronzeMember from "../../assets/images/cardflip/bronzemember.png";
import arrow_right from "../../assets/svg/arrow_right.svg";

// COMPONENTS
import BentoBox from "../components/BentoBox";
import CustomButton from "../components/CustomButton";
import InfiniteScroll from "../components/InfiniteScroll";
import AnimatedNumber from "../components/AnimatedNumber";
import ImageSlider from "../components/ImageSlider";

export default function Club() {
  const benefits = [
    {
      title: "tessera ",
      desc: "La tessera digitale personalizzata di SapienzaU",
      color: "IT",
    },
    {
      title: "newsletter",
      desc: "Accesso alla newsletter e a contenuti editoriali esclusivi",
      color: "SEC",
    },
    {
      title: "workshop",
      desc: "Accesso prioritario alla prenotazione dei workshop",
      color: "LA",
    },
    {
      title: "eventi",
      desc: "Posti riservati agli eventi targati TEDxSapienzaU e SapienzaU",
      color: "ERS",
    },
    {
      title: "tema",
      desc: "Accesso anticipato al tema degli eventi della prossima edizione",
      color: "HRA",
    },
    {
      title: "e molto altro...",
      desc: "",
      color: "DEX",
    },
  ];

  const leftList = [
    "consectetur adipiscing elit sed do eiusmod tempor",
    "consectetur adipiscing elit sed do eiusmod tempor",
    "consectetur adipiscing elit sed do eiusmod tempor",
  ];
  const rightList = [
    "consectetur adipiscing elit sed do eiusmod tempor",
    "consectetur adipiscing elit sed do eiusmod tempor",
    "consectetur adipiscing elit sed do eiusmod tempor",
  ];

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
      {/* TITOLO */}
      <section
        className="w-full relative px-[20px] md:px-[40px] pt-[10px] md:pt-[20px] pb-0 md:pb-[30px] flex flex-col items-center justify-center text-center text-white uppercase overflow-hidden bg-black"
        style={{
          marginTop: isMobile
            ? `calc(${global.UTILS.NAV_HEIGHT} + 40px)`
            : `calc(${global.UTILS.NAV_HEIGHT} + 120px)`,
        }}
      >
        <h1 className="xl:text-[100px] lg:text-[85px] md:text-[70px] text-[32px] sm:text-[48px] leading-[1] font-gotham-ultra max-w-[90vw] md:max-w-none m-0">
          vuoi un sacco <br className="hidden md:block" /> entrare nel club{" "}
          <br className="hidden md:block" />{" "}
          <span className="text-white text-[18px] sm:text-[24px] md:text-[35px] lg:text-[42px] xl:text-[50px]">
            (ma ancora non lo sai)
          </span>
        </h1>
        <div className="mt-8 md:mt-12 flex flex-col items-center animate-bounce">
          <img src={arrow_right} className="w-10 h-10 md:w-14 md:h-14 rotate-90 invert" alt="Scroll down" />
        </div>
      </section>

      {/*TESTO CONVINCENTE*/}
      <section
        className="flex flex-col md:flex-row w-full items-center justify-between pt-[30px] md:pt-[40px] pb-[30px] md:py-[50px] bg-black overflow-hidden"
        style={{
          marginTop: isMobile
            ? "60px"
            : `calc(${global.UTILS.NAV_HEIGHT} + 160px)`,
        }}
      >
        {/* LATO SX */}
        <div className="w-full md:w-[65%] shrink-0 relative flex flex-col justify-center px-[20px] md:px-0 md:pl-[80px] z-10 items-start md:items-start text-left md:text-left">
          <div className="relative mb-4 md:mb-6">
            <img
              src={team_it}
              className="absolute top-[-10px] md:top-[-20px] left-0 w-[120px] md:w-[260px] h-auto -rotate-5 z-0"
            />
            <h2 className="relative z-10 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[70px] leading-[1.1] font-gotham-ultra uppercase text-white">
              la nostra <br /> visione
            </h2>
          </div>
          <h2 className="text-[16px] sm:text-[18px] md:text-[26px] lg:text-[34px] leading-relaxed font-gotham-book text-white max-w-xl z-10 mt-2">
            SapienzaU Club nasce come evoluzione naturale del progetto SapienzaU
            e di TEDxSapienzaU, con l’obiettivo di consolidare una community che
            va oltre il singolo evento. Il Club è pensato per ex volontari e
            sostenitori che continuano a supportare l’associazione.
          </h2>
        </div>

        {/* LATO DX */}
        <div className="w-full md:w-[35%] lg:w-[65%] shrink-0 flex justify-start md:justify-end px-[20px] md:px-0 relative mt-10 md:mt-0">
          <img
            src={fotoAbbraccio}
            className="masked-image3 object-cover w-[80%] max-w-[350px] h-[250px] md:max-w-none md:w-full md:h-auto md:max-h-[800px] translate-x-0 md:translate-x-[-25%]"
          />
        </div>
      </section>

      {/* BENEFIT CLUB */}
      <section className="w-full px-[20px] pt-[60px] pb-4 md:px-[40px] md:pt-[100px] md:pb-8 flex flex-col items-center justify-end text-center text-white uppercase relative bg-black">
        <div className="relative w-full max-w-[1600px] mx-auto">
          <div className="relative inline-block">
            <img
              src={team_la}
              className="absolute -top-12 -right-4 md:-top-16 md:-right-12 w-[110px] md:w-[300px] h-auto rotate-12 z-0"
            />
            <h1 className="relative z-10 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] xl:text-[140px] leading-[0.8] font-gotham-ultra uppercase text-white">
              benefit club
            </h1>
          </div>
        </div>
      </section>

      {/* GRID BENEFIT */}
      <section className="w-full px-[20px] md:px-[40px] py-[20px] md:py-[40px] bg-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-24 gap-y-10 md:gap-y-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 md:space-y-4"
            >
              <h3
                className="text-[22px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-gotham-ultra uppercase leading-[0.9]"
                style={{ color: global.COLORS_TEAM[item.color] }}
              >
                {item.title}
              </h3>
              <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-gotham-book max-w-[400px] leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*BECOME A MEMBER*/}
      <section className="w-full p-[40px] content-end items-center justify-center text-center text-white uppercase relative overflow-hidden">
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_hra}
              className="absolute left-10 w-[200px] md:w-[300px] h-auto -rotate-15 shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[60px] lg:text-[50px] md:text-[35px] text-[40px] pb-5 leading-none font-gotham-ultra overflow-hidden  text-white">
              are you ready?
            </h1>
            <h1 className="relative z-10 xl:text-[120px] lg:text-[100px] md:text-[70px] text-[40px] md:pb-5 leading-none font-gotham-ultra overflow-hidden  text-white">
              become a member
            </h1>
          </div>
        </div>
      </section>

      {/*GOLD AND BRONZE MEMBER*/}
      <section
        id="benefits"
        className="w-full bg-black text-white pb-[40px] md:pb-[100px] px-[20px] md:px-[40px]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          {/* --- BRONZE COLUMN --- */}
          <div className="flex flex-col gap-8 lg:pr-12 lg:border-r lg:border-zinc-800">
            {/* Bronze Header & Image */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex flex-col items-center">
                <h2
                  className="xl:text-[70px] lg:text-[60px] md:text-[55px] text-[50px] leading-[0.8] font-gotham-ultra uppercase"
                  style={{ color: global.COLORS.BRONZO }}
                >
                  BRONZE
                </h2>
                <h2 className="xl:text-[65px] lg:text-[55px] md:text-[50px] text-[45px] leading-[0.8] font-gotham-ultra uppercase">
                  MEMBER
                </h2>
              </div>

              {/* Card Immagine */}
              <div className="w-full max-w-md aspect-video rounded-3xl overflow-hidden bg-zinc-800 drop-shadow-xl drop-shadow-bronze">
                <img
                  src={BronzeMember}
                  className="w-full h-full object-cover"
                  alt="Bronze Member"
                />
              </div>
            </div>
            {/* Bronze Bento Box */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[30px] flex flex-col flex-1">
              <div className="mb-6">
                <h2
                  className="text-[40px] md:text-[50px] font-gotham-ultra mb-1 uppercase leading-none"
                  style={{ color: global.COLORS.BRONZO }}
                >
                  Bronze
                </h2>
                <p className="text-[24px] font-gotham-ultra text-white uppercase opacity-80">
                  15 EURO
                </p>
              </div>
              <ul className="space-y-4 text-white font-gotham-book text-[16px] md:text-[18px] flex-grow">
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Newsletter SapienzaU
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Inserimento nel Google Group dedicato
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Poster dell'edizione
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Accesso prioritario ai workshop
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Tessera associativa digitale
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  <span>
                    1 Posto riservato agli eventi targati TEDxSapienzaU e
                    SapienzaU
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Accesso anticipato al tema dell'edizione
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Sezione dedicata su sito e Instagram
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.BRONZO }}>•</span>
                  Possibilità di partecipare agli eventi associativi
                </li>
              </ul>
              <div className="mt-8">
                <CustomButton
                  label="JOIN BRONZE"
                  color="bronzo"
                  className="w-full justify-center"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd2qpgFR1eUBXCXRrrO78-o7LRWAfitZ45y6Wopm-0HHdbiUA/viewform"
                />
              </div>
            </div>
          </div>

          {/* --- GOLD COLUMN --- */}
          <div className="flex flex-col gap-8 lg:pl-12">
            {/* Gold Header & Image */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex flex-col items-center">
                <h2
                  className="xl:text-[70px] lg:text-[60px] md:text-[55px] text-[50px] leading-[0.8] font-gotham-ultra uppercase"
                  style={{ color: global.COLORS.ORO }}
                >
                  GOLD
                </h2>
                <h2 className="xl:text-[65px] lg:text-[55px] md:text-[50px] text-[45px] leading-[0.8] font-gotham-ultra uppercase">
                  MEMBER
                </h2>
              </div>

              {/* Card Immagine */}
              <div className="w-full max-w-md aspect-video rounded-3xl overflow-hidden bg-zinc-800 drop-shadow-xl drop-shadow-gold">
                <img
                  src={GoldMember}
                  className="w-full h-full object-cover"
                  alt="Gold Member"
                />
              </div>
            </div>
            {/* Gold Bento Box */}
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[30px] flex flex-col relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[80px] rounded-full"></div>
              <div className="mb-6 relative z-10">
                <h2
                  className="text-[40px] md:text-[50px] font-gotham-ultra mb-1 uppercase leading-none"
                  style={{ color: global.COLORS.ORO }}
                >
                  Gold
                </h2>
                <p className="text-[24px] font-gotham-ultra text-white uppercase opacity-80">
                  25 EURO
                </p>
                <p className="font-gotham-ultra text-zinc-500 mt-2 uppercase text-[16px] tracking-widest">
                  Tutti i benefit del piano Bronze +
                </p>
              </div>
              <ul className="space-y-4 text-white font-gotham-book text-[16px] md:text-[18px] flex-grow relative z-10">
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Contenuti editoriali extra nella newsletter
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Poster evento autografato dagli speaker
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Prenotazione workshop con posto garantito
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Tessera associativa fisica
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>1 posto
                  extra riservato per gli eventi targati TEDxSapienzaU e
                  SapienzaU
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Accesso ai Team Building associativi
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: global.COLORS.ORO }}>★</span>
                  Possibilità di partecipare all'Opening Event
                </li>
              </ul>
              <div className="mt-8 relative z-10">
                <CustomButton
                  label="JOIN GOLD"
                  color="oro"
                  className="w-full justify-center"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd2qpgFR1eUBXCXRrrO78-o7LRWAfitZ45y6Wopm-0HHdbiUA/viewform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-black pb-[60px] md:pb-[140px]">
        <ImageSlider />
      </div>
    </div>
  );
}
