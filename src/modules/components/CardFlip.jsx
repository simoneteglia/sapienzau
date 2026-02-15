import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// COMPONENTS
import BentoBox from "./BentoBox";
// RESOURCES
import GoldMember from "../../assets/images/cardflip/goldmember.png";
import BronzeMember from "../../assets/images/cardflip/bronzemember.png";

gsap.registerPlugin(useGSAP);

const FlipCard = ({
  frontContent,
  backContent,
  className = "",
  frontWrapperClass = "",
  backWrapperClass = "",
  frontStyle = {},
  backStyle = {},
}) => {
  const containerRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const onEnter = contextSafe(() => {
    gsap.to(frontRef.current, {
      duration: 0.6,
      rotateY: 180,
      ease: "power2.inOut",
      overwrite: "auto",
    });

    gsap.to(backRef.current, {
      duration: 0.6,
      rotateY: 0,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(frontRef.current, {
      duration: 0.6,
      rotateY: 0,
      ease: "power2.inOut",
      overwrite: "auto",
    });

    gsap.to(backRef.current, {
      duration: 0.6,
      rotateY: -180,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  });

  const cardStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "90%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer perspective-1000 flex items-center justify-center ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ perspective: "1000px" }}
    >
      {/* FRONT */}
      <div ref={frontRef} style={{ ...cardStyle, zIndex: 2 }}>
        <BentoBox
          className={`w-full h-full shadow-md ${frontWrapperClass}`}
          style={frontStyle}
        >
          {frontContent}
        </BentoBox>
      </div>

      {/* BACK */}
      <div
        ref={backRef}
        style={{ ...cardStyle, transform: "rotateY(-180deg)" }}
      >
        <BentoBox
          className={`w-full h-full shadow-md ${backWrapperClass}`}
          style={backStyle}
        >
          {backContent}
        </BentoBox>
      </div>
    </div>
  );
};

export default function CardFlip() {
  return (
    <div className="flex w-full h-full gap-4 p-1">
      {/* LEFT CARD */}
      <FlipCard
        className="flex-1 h-full"
        frontWrapperClass="bg-yellow-500"
        backWrapperClass="bg-purple-600"
        frontContent={
          <div className="flex flex-col justify-center gap-4 p-4 h-full ">
            <h2 className=" xl:text-[60px] lg:text-[50px] md:text-[35px] text-white font-gotham-ultra text-4xl font-bold">
              U are gold
            </h2>
            <p className="text-500 text-black mt-4"></p>
          </div>
        }
        backContent={
          <div className="flex flex-col items-center justify-center h-full p-10 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Dietro benefit club
            </h3>
            <p className="text-black">testo extra</p>
          </div>
        }
      />

      {/* RIGHT CARD */}
      <FlipCard
        className="flex-1 h-full"
        frontStyle={{
          backgroundImage: `url(${GoldMember})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
        backWrapperClass="bg-gray-800"
        frontContent={
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-4xl font-bold"></h2>
            <p className="text-gray-500 mt-4"></p>
          </div>
        }
        backContent={
          <div className="flex flex-col justify-center h-full p-10 text-center">
            <h2 className=" xl:text-[60px] lg:text-[50px] md:text-[35px] text-white font-gotham-ultra text-4xl font-bold">
              FORM
            </h2>
          </div>
        }
      />
    </div>
  );
}
