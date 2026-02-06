import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";

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

// Register Draggable instead of (or in addition to) ScrollTrigger
gsap.registerPlugin(Draggable);

const items = [
  { id: 1, title: "para doxa", image: Paradoxa25, year: 2025 },
  { id: 2, title: "awards 2024", image: Awards24, year: 2024 },
  { id: 3, title: "countdown", image: Countdown24, year: 2024 },
  { id: 4, title: "Back to zero", image: Backtozero23, year: 2023 },
  { id: 5, title: "awards 2023", image: Awards23, year: 2023 },
  { id: 6, title: "Act: lead the change", image: Act22, year: 2022 },
  { id: 7, title: "awards 2022", image: Awards22, year: 2022 },
];

export default function HorizontalSlider() {
  const containerRef = useRef(null);
  const trackRef = useRef(null); // Renamed from sliderRef for clarity
  const draggableInstance = useRef(null);

  // State for button visibility
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;

      // Calculate boundaries
      const updateBounds = () => {
        const containerWidth = container.offsetWidth;
        const trackWidth = track.scrollWidth;
        // The furthest left the track can go (negative value)
        const minX = containerWidth - trackWidth;

        // If content is smaller than screen, center it or disable drag
        if (minX > 0) return;

        // Kill old instance if exists to prevent conflicts on resize
        if (draggableInstance.current) {
          draggableInstance.current[0].kill();
        }

        draggableInstance.current = Draggable.create(track, {
          type: "x",
          bounds: { minX: minX, maxX: 0 },
          inertia: true, // Requires InertiaPlugin for momentum, works as standard drag without it
          edgeResistance: 0.65,
          zIndexBoost: false,
          dragClickables: true,
          // Update button states while dragging
          onDrag: function () {
            handleUpdate(this.x, this.minX);
          },
          onThrowUpdate: function () {
            handleUpdate(this.x, this.minX);
          },
        });
      };

      // Helper to update React state based on GSAP position
      const handleUpdate = (x, minX) => {
        setIsAtStart(x >= -10); // 10px tolerance
        setIsAtEnd(x <= minX + 10);
      };

      // Initialize
      updateBounds();
      window.addEventListener("resize", updateBounds);

      // Cleanup listener inside context
      return () => window.removeEventListener("resize", updateBounds);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Button Click Handler
  const slide = (direction) => {
    const track = trackRef.current;
    const container = containerRef.current;

    // Safety check
    if (!track || !container) return;

    const currentX = gsap.getProperty(track, "x");
    const containerWidth = container.offsetWidth;
    const trackWidth = track.scrollWidth;
    const minX = containerWidth - trackWidth;

    // Slide by 50% of screen width for a nice "page" feel
    const slideAmount = containerWidth * 0.5;
    let targetX =
      direction === "next" ? currentX - slideAmount : currentX + slideAmount;

    // Clamp values
    targetX = Math.max(minX, Math.min(0, targetX));

    gsap.to(track, {
      x: targetX,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: function () {
        if (draggableInstance.current && draggableInstance.current[0]) {
          draggableInstance.current[0].update(); // Sync Draggable with tween
        }
        // Update buttons
        setIsAtStart(targetX >= -10);
        setIsAtEnd(targetX <= minX + 10);
      },
    });
  };

  return (
    <section
      style={{
        paddingTop: `calc(${global.UTILS.NAV_HEIGHT || "100px"} + 40px)`,
      }}
      className="w-full text-white flex flex-col pb-10 relative overflow-hidden"
    >
      {/* EVENTI */}
      <div className="px-[40px] pb-5 flex-shrink-0 relative">
        <h1 className="text-[90px] leading-none font-gotham-ultra uppercase">
          Eventi
        </h1>
        <h2 className="text-[30px] leading-none font-gotham max-w-4xl mt-2 ">
          consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </h2>
      </div>

      {/* SLIDER */}
      <div
        ref={containerRef}
        className="flex-grow flex items-center overflow-hidden w-full relative"
      >
        {/* NAVIGATION BUTTONS */}
        {/* INDIETRO */}
        <button
          onClick={() => slide("prev")}
          disabled={isAtStart}
          className={`absolute left-4 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black
            ${isAtStart ? "opacity-0 -translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* AVANTI */}
        <button
          onClick={() => slide("next")}
          disabled={isAtEnd}
          className={`absolute right-4 z-20 w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black
            ${isAtEnd ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* TRACK */}
        <div
          ref={trackRef}
          className="flex w-max px-[40px] cursor-grab active:cursor-grabbing"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="h-[45vh] w-[25vw] min-w-[300px] flex-shrink-0 mr-10"
            >
              <BentoBox
                className="w-full h-full bg-cover bg-center relative p-8 flex flex-col justify-end items-start rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <h2 className="text-5xl font-gotham-book text-white uppercase relative z-10 select-none">
                  {item.title}
                </h2>
                <div className="relative z-10 select-none">
                  <p className="text-lg">{item.year}</p>
                </div>
              </BentoBox>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="w-full flex justify-start px-[40px] mt-8">
        <CustomButton label="Scopri tutti gli eventi" color="green" />
      </div>
    </section>
  );
}
