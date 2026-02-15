import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// COMPONENTS
import BentoBox from "./BentoBox";
// RESOURCES
import GoldMember from "../../assets/images/cardflip/goldmember.png";
import BronzeMember from "../../assets/images/cardflip/bronzemember.png";

gsap.registerPlugin(useGSAP);

export default function CardFlipMobile() {
  const containerRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  const [isFlipped, setIsFlipped] = useState(false);

  useGSAP(
    () => {
      if (isFlipped) {
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
      } else {
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
      }
    },
    { scope: containerRef, dependencies: [isFlipped] },
  );
  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const cardFaceStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div className="w-full h-full p-1 flex justify-center items-center">
      <div
        ref={containerRef}
        onClick={handleFlip}
        className="relative w-full h-full cursor-pointer perspective-1000"
        style={{ perspective: "1000px" }}
      >
        {/*FRONT*/}
        <div ref={frontRef} style={{ ...cardFaceStyle, zIndex: 2 }}>
          <BentoBox
            className="w-full h-full shadow-md rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${GoldMember})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "black",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <span className="opacity-50 text-white text-sm mt-auto pb-4"></span>
            </div>
          </BentoBox>
        </div>

        {/* BACK */}
        <div
          ref={backRef}
          style={{ ...cardFaceStyle, transform: "rotateY(-180deg)" }}
        >
          <BentoBox className="w-full h-full shadow-md bg-gray-800 rounded-2xl">
            <div className="flex flex-col justify-center h-full p-10 text-center">
              <h2 className="text-[35px] text-white font-gotham-ultra font-bold">
                FORM
              </h2>
              {/* CONTENUTO FORM */}
            </div>
          </BentoBox>
        </div>
      </div>
    </div>
  );
}
