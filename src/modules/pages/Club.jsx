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
      {/* TITOLO */}
      <section
        className="w-full relative px-[20px] md:px-[40px] pt-[20px] pb-[30px] flex flex-col items-center justify-center text-center text-white uppercase overflow-hidden bg-black"
        style={{
          marginTop: `calc(${global.UTILS.NAV_HEIGHT} + 120px)`,
        }}
      >
        <h1 className="xl:text-[100px] lg:text-[85px] md:text-[70px] text-[42px] sm:text-[48px] leading-[1] font-gotham-ultra max-w-[90vw] md:max-w-none">
          {/* I <br /> sono visibili solo da tablet in su (md:) */}
          vuoi un sacco <br className="hidden md:block" /> entrare nel club{" "}
          <br className="hidden md:block" />{" "}
          <span className="text-white">(ma ancora non lo sai)</span>
        </h1>
      </section>

      {/* TESTO CONVINCENTE */}
      <section className="flex flex-col lg:flex-row w-full items-center justify-between pt-[40px] pb-0 md:py-[50px] bg-black"
      style={{
          marginTop: `calc(${global.UTILS.NAV_HEIGHT} + 80px)`,
        }}>
        {/* LATO SX: Testo che non interseca più */}
        <div className="w-full lg:w-[65%] lg:shrink-0 relative flex flex-col justify-center px-[40px] lg:pl-[80px] z-10">
          <div className="relative mb-10 md:mb-6">
            <img
              src={team_it}
              className="absolute -top-12 left-0 w-[140px] md:w-[260px] h-auto -rotate-5 z-0"
            />
            <h2 className="relative z-10 xl:text-[70px] lg:text-[60px] md:text-[50px] text-[40px] leading-none font-gotham-ultra uppercase text-white">
              la nostra visione
            </h2>
          </div>
          <p className="xl:text-[34px] lg:text-[30px] md:text-[28px] text-[26px] leading-snug font-gotham-book text-white max-w-xl z-10">
            SapienzaU Club nasce come evoluzione naturale del progetto SapienzaU
            e di TEDxSapienzaU, con l’obiettivo di consolidare una community che
            va oltre il singolo evento. Il Club è pensato per ex volontari e
            sostenitori che continuano a supportare l’associazione.
          </p>
        </div>

        {/* LATO DX */}
        <div className="w-full lg:w-[65%] lg:shrink-0 mt-10 lg:mt-0 flex justify-end relative">
          <img
            src={fotoAbbraccio}
            className="masked-image object-cover w-[90%] md:w-full max-h-[400px] md:max-h-[800px] translate-x-[5%] lg:translate-x-[-25%]"
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
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h3
                className="text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-gotham-ultra uppercase leading-[0.9]"
                style={{ color: global.COLORS_TEAM[item.color] }}
              >
                {item.title}
              </h3>
              <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-gotham-book max-w-[400px] leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*COUNTER*/}
      {/* <section className="w-full p-[40px] content-end items-center justify-center text-center text-white relative overflow-hidden">
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
      </section> */}
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

      {/*GOLD AND BRONZE MEMBER*/}
      <section
        id="benefits"
        className="w-full bg-black text-white pb-0 px-[20px] md:px-[40px]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
          {/* --- BRONZE COLUMN --- */}
          <div className="flex flex-col gap-8 lg:pr-12 lg:border-r lg:border-zinc-800">
            {/* Bronze Header & Image */}
            <div className="flex flex-col items-center text-center">
              {/* Container Titolo: rimosso mb-8 e gestito con margin-bottom più stretto */}
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
              {/* Container del titolo con interlinea corretta */}
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

      <ImageSlider />
    </div>
  );
}
