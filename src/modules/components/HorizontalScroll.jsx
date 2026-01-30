import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// RESOURCES
import Paradoxa25 from "../../assets/images/events/cover-paradoxa25.webp";
import Awards24 from "../../assets/images/events/awards24event.webp";
import Countdown24 from "../../assets/images/events/cover-countdown24.webp";
import Backtozero23 from "../../assets/images/events/cover-edizione23.webp";
import Awards23 from "../../assets/images/events/header_awards23.webp";
import Act22 from "../../assets/images/events/cover-edizione22.webp";
import Awards22 from "../../assets/images/events/awards2022.webp";

import global from "../../resources/global.json";

// COMPONENTS
import BentoBox from "./BentoBox";
import CustomButton from "./CustomButton";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { id: 1, title: "para doxa", image: Paradoxa25, year: 2025 },
  { id: 2, title: "awards 2024", image: Awards24, year: 2024 },
  { id: 3, title: "countdown", image: Countdown24, year: 2024 },
  { id: 4, title: "Back to zero", image: Backtozero23, year: 2023 },
  { id: 5, title: "awards 2023", image: Awards23, year: 2023 },
  { id: 6, title: "Act: lead the change", image: Act22, year: 2022 },
  { id: 7, title: "awards 2022", image: Awards22, year: 2022 },
];

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = sliderRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      const amountToScroll = totalWidth - windowWidth;

      gsap.to(sliderRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${global.UTILS.NAV_HEIGHT}`,
          end: "+=" + totalWidth,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-black text-white flex flex-col overflow-hidden"
    >
      <div className="px-[40px] pt-[40px] pb-5 flex-shrink-0 z-10">
        <h1 className="text-[90px] leading-none font-gotham-ultra uppercase">
          Eventi
        </h1>
        <h2 className="text-[30px] leading-none font-gotham max-w-4xl mt-2 ">
          consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </h2>
      </div>
      <div className="flex-grow flex items-center overflow-hidden">
        <div ref={sliderRef} className="flex w-max px-[40px]">
          {items.map((item) => (
            <div
              key={item.id}
              className="h-[45vh] w-[25vw] flex-shrink-0 mr-10 "
            >
              <BentoBox
                className="w-full h-full bg-cover bg-center relative p-8 flex-col content-end items-end rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h2 className="text-5xl font-gotham-book text-white uppercase relative z-10">
                  {item.title}
                </h2>
                <div className="relative z-10">
                  <p className="text-lg">{item.year}</p>
                </div>
              </BentoBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
