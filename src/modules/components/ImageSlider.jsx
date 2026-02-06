import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap, Draggable } from "gsap/all";

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

// Register Draggable
gsap.registerPlugin(Draggable);

const items = [
  { id: 1, image: Paradoxa25 },
  { id: 2, image: Awards24 },
  { id: 3, image: Countdown24 },
  { id: 4, image: Backtozero23 },
  { id: 5, image: Awards23 },
  { id: 6, image: Act22 },
  { id: 7, image: Awards22 },
];

export default function ImageSlider() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
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
        const minX = containerWidth - trackWidth;

        // If content is smaller than screen, center it or disable drag
        if (minX > 0) return;

        // Kill old instance if exists
        if (draggableInstance.current) {
          if (Array.isArray(draggableInstance.current)) {
            draggableInstance.current[0].kill();
          } else {
            draggableInstance.current.kill();
          }
        }

        draggableInstance.current = Draggable.create(track, {
          type: "x",
          bounds: { minX: minX, maxX: 0 },
          inertia: true,
          edgeResistance: 0.65,
          zIndexBoost: false,
          dragClickables: true,
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
        setIsAtStart(x >= -10);
        setIsAtEnd(x <= minX + 10);
      };

      // Initialize
      updateBounds();
      window.addEventListener("resize", updateBounds);

      // Cleanup
      return () => window.removeEventListener("resize", updateBounds);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Button Click Handler
  const slide = (direction) => {
    const track = trackRef.current;
    const container = containerRef.current;

    if (!track || !container) return;

    const currentX = gsap.getProperty(track, "x");
    const containerWidth = container.offsetWidth;
    const trackWidth = track.scrollWidth;
    const minX = containerWidth - trackWidth;

    const slideAmount = containerWidth * 0.5;
    let targetX =
      direction === "next" ? currentX - slideAmount : currentX + slideAmount;

    targetX = Math.max(minX, Math.min(0, targetX));

    gsap.to(track, {
      x: targetX,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: function () {
        if (draggableInstance.current && draggableInstance.current[0]) {
          draggableInstance.current[0].update();
        }
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
      className="w-full flex flex-col pb-10 relative overflow-hidden"
    >
      {/* SLIDER SECTION */}
      <div
        ref={containerRef}
        className="flex-grow flex items-center overflow-hidden w-full relative"
      >
        {/* BUTTONS */}
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
                className="w-full h-full bg-cover bg-center relative rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300 shadow-xl"
                style={{ backgroundImage: `url(${item.image})` }}
              ></BentoBox>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
