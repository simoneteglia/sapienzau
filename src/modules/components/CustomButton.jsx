import React from "react";
import global from "../../resources/global.json";
import arrow_right from "../../assets/svg/arrow_right.svg";

const colors = {
  yellow: "#FAB632",
  orange: "#F07E29",
  red: "#E9493B",
  pink: "#F089B7",
  violet: "#BB5C9E",
  cyan: "#28BDEF",
  green: "#94C459",
  argento: global.COLORS.ARGENTO,
  oro: global.COLORS.ORO,
  bronzo: global.COLORS.BRONZO,
};

export default function CustomButton({
  label = "Click me",
  color = "orange",
  outlined = false,
  className = "",
  href = "#",
  size = "normal", // ("normal" | "small")
}) {
  const isSmall = size === "small";

  const padding = isSmall ? "6px 12px" : "10px 15px";
  const borderRadius = isSmall ? "8px" : "16px";
  const iconHeight = isSmall ? "20px" : "40px";

  const textSizeClass = isSmall
    ? "text-[14px] md:text-[16px]"
    : "text-[18px] xl:text-[25px]";

  return (
    <button
      style={{
        backgroundColor: colors[color],
        borderRadius: borderRadius,
        padding: padding,
      }}
      onClick={() => {
        if (href !== "#") {
          if (href.startsWith("http")) {
            window.open(href, "_blank", "noopener,noreferrer");
          } else {
            window.location.href = href;
          }
        }
      }}
      className={`uppercase flex items-center justify-center font-gotham-bold text-black cursor-pointer ${isSmall ? "gap-1" : "gap-2"} ${textSizeClass} ${className}`}
    >
      {label}
      <img src={arrow_right} style={{ height: iconHeight }} alt="arrow right" />
    </button>
  );
}
