import React from "react";

import arrow_right from "../../assets/svg/arrow_right.svg";

const colors = {
  yellow: "#FAB632",
  orange: "#F07E29",
  red: "#E9493B",
  pink: "#F089B7",
  violet: "#BB5C9E",
  cyan: "#28BDEF",
  green: "#94C459",
};

export default function CustomButton({
  label = "Click me",
  color = "orange",
  outlined = false,
  className = "",
}) {
  return (
    <button
      style={{
        backgroundColor: colors[color],
        borderRadius: "16px",
        padding: "10px 15px",
      }}
      className={`uppercase flex items-center font-gotham-bold text-black xl:text-[25px] ${className}`}
    >
      {label}{" "}
      <img src={arrow_right} style={{ height: "40px" }} alt="arrow right" />
    </button>
  );
}
