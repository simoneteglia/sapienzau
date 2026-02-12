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
import GoldMember from "../../assets/images/cardflip/goldmember.webp";

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
      color: "ARANCIONE",
    },
    {
      title: "newsletter",
      desc: "Accesso alla newsletter e a contenuti editoriali esclusivi",
      color: "VERDE",
    },
    {
      title: "workshop",
      desc: "Accesso prioritario alla prenotazione dei workshop",
      color: "AZZURRO",
    },
    {
      title: "eventi",
      desc: "Posti riservati agli eventi targati TEDxSapienzaU e SapienzaU",
      color: "ROSA",
    },
    {
      title: "tema",
      desc: "Accesso anticipato al tema degli eventi della prossima edizione",
      color: "BLU",
    },
    {
      title: "e molto altro...",
      desc: "",
      color: "GIALLO",
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

  return (
    <div>
      {/*TITOLO */}
      <section
        className="w-full relative p-[40px] content-center items-center justify-center text-center text-white uppercase relative overflow-hidden"
        style={{
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
        }}
      >
        <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] text-[50px] mb-5 leading-none font-gotham-ultra overflow-hidden ">
          vuoi un sacco <br /> entrare nel club <br /> (ma non lo sai)
        </h1>
        <InfiniteScroll className="absolute w-screen bottom-10 left-0" />
      </section>

      {/*TESTO CONVINCENTE*/}
      <section className="flex flex-col lg:flex-row w-full xl:h-screen md:min-h-[70vh] md:mt-0 mt-[100px] mb-[50px]">
        {/* LATO SX */}
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_it}
              className="absolute -top-20 left-10 w-[200px] md:w-[300px] h-auto -rotate-5 shadow-2xl z-1"
            />
            <h1 className="relative z-10 xl:text-[80px] lg:text-[65px] md:text-[55px] text-[40px] leading-none font-gotham-ultra uppercase text-white">
              la nostra visione
            </h1>
          </div>

          <h3 className="xl:text-[35px] lg:text-[22px] md:text-[20px] leading-tight font-gotham-book text-white max-w-2xl  min-w-xl z-10">
            SapienzaU Club nasce come evoluzione naturale del progetto SapienzaU e di TEDxSapienzaU, con l’obiettivo di consolidare una community che va oltre il singolo evento. Il Club è pensato per ex volontari e sostenitori che continuano a supportare l’associazione.
          </h3> 
        </div>
        {/*LATO DX*/}
        <img
          src={fotoAbbraccio}
          className="masked-image object-cover object-right lg:w-[1000px] hidden lg:inline lg:static"
        />
      </section>

      {/*BENEFIT CLUB*/}
      <section className="w-full p-[40px] content-end items-center justify-center text-center text-white uppercase relative overflow-hidden">
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_la}
              className="absolute -top-10 right-10 w-[200px] md:w-[300px] h-auto rotate-15 shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[120px] lg:text-[100px] md:text-[70px] text-[40px] md:pb-5 leading-none font-gotham-ultra uppercase text-white">
              benefit club
            </h1>
          </div>
        </div>
      </section>

      {/*GRID BENEFIT*/}
      <section className="w-full px-[40px] md:py-[80px] bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h3
                className={`xl:text-[55px] lg:text-[50px] md:text-[40px] text-[30px] font-gotham-ultra uppercase`}
                style={{ color: global.COLORS_TEAM[item.color] }}
              >
                {item.title}
              </h3>
              <p className="text-white xl:text-[25px] lg:text-[20px] md:text-[20px] font-gotham-book max-w-[300px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*COUNTER*/}
      <section className="w-full p-[40px] content-end items-center justify-center text-center text-white relative overflow-hidden">
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_pem}
              className="absolute -top-10 left-10 w-[200px] md:w-[300px] h-auto shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[80px] lg:text-[60px] md:text-[40px] text-[40px] pb-5 leading-none font-gotham-ultra text-white overflow-hidden">
              Frase che fa gasare che anticipa il counter di membri..
            </h1>
          </div>
        </div>
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_dex}
              className="absolute right-10 w-[200px] md:w-[300px] h-auto rotate-15 shadow-2xl z-[-1]"
            />
            <h3
              className={`xl:text-[200px] lg:text-[160px] md:text-[120px] font-gotham-ultra uppercase z-10`}
              style={{ color: global.COLORS_TEAM.ARANCIONE }}
            >
              <AnimatedNumber end={1253} duration={2500} />
            </h3>
          </div>
        </div>
        <h1 className="relative z-10 xl:text-[80px] lg:text-[60px] md:text-[40px] text-[30px] pb-5 leading-none font-gotham-ultra text-white overflow-hidden">
          joined the club :o
        </h1>
      </section>

      {/*BECOME A MEMBER*/}
      <section className="w-full p-[40px] content-end items-center justify-center text-center text-white uppercase relative overflow-hidden">
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_hra}
              className="absolute left-10 w-[200px] md:w-[300px] h-auto -rotate-15 shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[60px] lg:text-[50px] md:text-[35px] text-[40px] pb-5 leading-none font-gotham-ultra overflow-hidden  text-white overflow-hidden">
              are you ready?
            </h1>
            <h1 className="relative z-10 xl:text-[120px] lg:text-[100px] md:text-[70px] text-[40px] md:pb-5 leading-none font-gotham-ultra overflow-hidden  text-white overflow-hidden">
              become a member
            </h1>
          </div>
        </div>
      </section>

      {/*GOLD AND SILVER MEMBER*/}
      <section className="flex flex-col lg:flex-row w-full min-h-screen bg-black text-white">
        {/*LATO SX*/}
        <div className="flex-1 flex flex-col items-center justify-between p-12 border-r border-zinc-800">
          <div className="text-center mb-8">
            <h2
              className="xl:text-[50px] lg:text-[40px] md:text-[45px] text-[40px] pb-5 leading-none font-gotham-ultra overflow-hidden"
              style={{ color: global.COLORS.BRONZO }}
            >
              BRONZE
            </h2>
            <h2 className="xl:text-[45px] lg:text-[35px] md:text-[35px] text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden">
              MEMBER
            </h2>
          </div>
          <div className="xl:w-lg lg:w-md aspect-video rounded-3xl overflow-hidden bg-zinc-800 mb-8 drop-shadow-xl drop-shadow-bronze">
            <img
              src={GoldMember}
              className="w-full h-full object-cover"
              alt="Bento"
            />
          </div>
          <h3 className="xl:text-[30px] lg:text-[20px] md:text-[20px] leading-tight font-gotham-book text-white max-w-2xl z-10">
            {leftList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </h3>
          <div className="flex-1 relative flex flex-col justify-center p-[40px]">
            <div className="relative mb-6">
              <CustomButton label="JOIN THE CLUB :)" color="argento" />
            </div>
          </div>
        </div>
        {/*LATO DX*/}
        <div className="flex-1 flex flex-col items-center justify-between p-12 bg-zinc-950">
          <div className="text-center mb-8">
            <h2
              className="xl:text-[50px] lg:text-[40px] md:text-[45px] text-[40px] pb-5 leading-none font-gotham-ultra overflow-hidden"
              style={{ color: global.COLORS.ORO }}
            >
              GOLD
            </h2>
            <h2 className="xl:text-[45px] lg:text-[35px] md:text-[35px] text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden">
              MEMBER
            </h2>
          </div>
          <div className="xl:w-lg lg:w-md aspect-video rounded-3xl overflow-hidden bg-zinc-800 mb-8  drop-shadow-xl drop-shadow-gold">
            <img
              src={GoldMember}
              className="w-full h-full object-cover"
              alt="Bento"
            />
          </div>
          <h3 className="xl:text-[30px] lg:text-[20px] md:text-[20px] leading-tight font-gotham-book text-white max-w-2xl z-10">
            {rightList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </h3>
          <div className="flex-1 relative flex flex-col justify-center p-[40px]">
            <div className="relative mb-6">
              <img
                src={team_cemm}
                className="absolute -top-10 left-30 w-[200px] md:w-[300px] h-auto shadow-2xl z-0 rotate-5"
              />
              <CustomButton
                className="relative z-10"
                label="JOIN THE CLUB :)"
                color="oro"
              />
            </div>
          </div>
        </div>
      </section>
      <ImageSlider />
    </div>
  );
}
