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
      title: "questo",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "ARANCIONE",
    },
    {
      title: "quello",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "GIALLO",
    },
    {
      title: "l'altro",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "VERDE",
    },
    {
      title: "l'altro",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "AZZURRO",
    },
    {
      title: "questo",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "ROSA",
    },
    {
      title: "quello",
      desc: "consectetur adipiscing elit sed do eiusmod tempor",
      color: "BLU",
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
        className="w-full p-[40px] content-end items-center justify-center text-center text-white uppercase relative overflow-hidden"
        style={{
          height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
          marginTop: global.UTILS.NAV_HEIGHT,
        }}
      >
        <h1 className="xl:text-[120px] lg:text-[100px] md:text-[70px] pb-5 leading-none font-gotham-ultra overflow-hidden ">
          vuoi un sacco <br /> entrare nel club <br /> (ma non lo sai)
        </h1>
      </section>

      {/*TESTO CONVINCENTE*/}
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-black overflow-hidden">
        {/* LATO SX */}
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_it}
              className="absolute -top-20 left-10 w-[200px] md:w-[300px] h-auto -rotate-5 shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[80px] lg:text-[65px] md:text-[42px] leading-none font-gotham-ultra uppercase text-white">
              testo <br /> convincente
            </h1>
          </div>

          <h3 className="xl:text-[35px] lg:text-[25px] md:text-[15px] leading-tight font-gotham-book text-white max-w-2xl z-10">
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </div>
        {/*LATO DX*/}
        <BentoBox className="flex-1 w-full h-[50vh] md:h-auto overflow-hidden">
          <img src={fotoAbbraccio} className="w-full h-full object-cover" />
        </BentoBox>
      </section>

      {/*BENEFIT CLUB*/}
      <section className="w-full p-[40px] content-end items-center justify-center text-center text-white uppercase relative overflow-hidden">
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_la}
              className="absolute -top-10 right-10 w-[200px] md:w-[300px] h-auto rotate-15 shadow-2xl z-0"
            />
            <h1 className="relative z-10 xl:text-[120px] lg:text-[100px] md:text-[70px] pb-5 leading-none font-gotham-ultra uppercase text-white">
              benefit club
            </h1>
          </div>
        </div>
      </section>
      
      {/*GRID BENEFIT*/}
      <section className="w-full px-[40px] py-[80px] bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <h3
                className={`xl:text-[60px] lg:text-[50px] md:text-[40px] font-gotham-ultra uppercase`}
                style={{ color: global.COLORS_TEAM[item.color] }}
              >
                {item.title}
              </h3>
              <p className="text-white xl:text-[25px] lg:text-[15px] md:text-[5px] font-gotham-book max-w-[250px]">
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
            <h1 className="relative z-10 xl:text-[80px] lg:text-[60px] md:text-[40px] pb-5 leading-none font-gotham-ultra text-white overflow-hidden">
              Frase che fa gasare che anticipa il counter di membri..
            </h1>
          </div>
        </div>
        <div className="flex-1 relative flex flex-col justify-center p-[40px]">
          <div className="relative mb-6">
            <img
              src={team_dex}
              className="absolute  right-10 w-[200px] md:w-[300px] h-auto rotate-15 shadow-2xl z-0"
            />
            <h3
              className={`xl:text-[200px] lg:text-[160px] md:text-[120px] font-gotham-ultra uppercase`}
              style={{ color: global.COLORS_TEAM.ARANCIONE }}
            >
              <AnimatedNumber end={1253} duration={2500} />
            </h3>
          </div>
        </div>
        <h1 className="relative z-10 xl:text-[80px] lg:text-[60px] md:text-[40px] pb-5 leading-none font-gotham-ultra text-white overflow-hidden">
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
            <h1 className="relative z-10 xl:text-[60px] lg:text-[50px] md:text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden  text-white overflow-hidden">
              are you ready?
            </h1>
            <h1 className="relative z-10 xl:text-[120px] lg:text-[100px] md:text-[70px] pb-5 leading-none font-gotham-ultra overflow-hidden  text-white overflow-hidden">
              become a member
            </h1>
          </div>
        </div>
      </section>

      {/*GOLD AND SILVER MEMBER*/}
      <section className="flex flex-col md:flex-row w-full min-h-screen bg-black text-white">
        {/*LATO SX*/}
        <div className="flex-1 flex flex-col items-center justify-between p-12 border-r border-zinc-800">
          <div className="text-center mb-8">
            <h2
              className="xl:text-[60px] lg:text-[50px] md:text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden"
              style={{ color: global.COLORS.ARGENTO }}
            >
              SILVER
            </h2>
            <h2 className="xl:text-[60px] lg:text-[50px] md:text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden">
              MEMBER
            </h2>
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-zinc-800 mb-8">
            <img
              src={GoldMember}
              className="w-full h-full object-cover"
              alt="Bento"
            />
          </div>
          <h3 className="xl:text-[35px] lg:text-[25px] md:text-[15px] leading-tight font-gotham-book text-white max-w-2xl z-10">
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
              className="xl:text-[60px] lg:text-[50px] md:text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden"
              style={{ color: global.COLORS.ORO }}
            >
              GOLD
            </h2>
            <h2 className="xl:text-[60px] lg:text-[50px] md:text-[35px] pb-5 leading-none font-gotham-ultra overflow-hidden">
              MEMBER
            </h2>
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden bg-zinc-800 mb-8">
            <img
              src={GoldMember}
              className="w-full h-full object-cover"
              alt="Bento"
            />
          </div>
          <h3 className="xl:text-[35px] lg:text-[25px] md:text-[15px] leading-tight font-gotham-book text-white max-w-2xl z-10">
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
