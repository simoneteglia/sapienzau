import React from "react";

import sec from "../../assets/logos/team_sec.png";
import cemm from "../../assets/logos/team_cemm.png";
import dex from "../../assets/logos/team_dex.png";
import ers from "../../assets/logos/team_ers.png";
import hra from "../../assets/logos/team_hra.png";
import it from "../../assets/logos/team_it.png";
import la from "../../assets/logos/team_la.png";
import pem from "../../assets/logos/team_pem.png";

export default function InfiniteScroll() {
  const logos = [
    { src: sec, alt: "SEC Logo" },
    { src: cemm, alt: "CEMM Logo" },
    { src: dex, alt: "DEX Logo" },
    { src: ers, alt: "ERS Logo" },
    { src: hra, alt: "HRA Logo" },
    { src: it, alt: "IT Logo" },
    { src: la, alt: "LA Logo" },
    { src: pem, alt: "PEM Logo" },
  ];

  // Logic: We repeat the list inside the <ul> to fill horizontal space,
  // then we repeat the entire <ul> itself for the seamless loop transition.
  const LOGO_REPETITIONS = 10;
  const displayLogos = Array(LOGO_REPETITIONS).fill(logos).flat();

  const ulClassName =
    "flex flex-nowrap items-center flex-shrink-0 [&_li]:mx-3 animate-infinite-scroll";

  return (
    <div className="w-screen inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
      <ul className={ulClassName}>
        {displayLogos.map((logo, index) => (
          <li key={`primary-${index}`}>
            <img src={logo.src} alt={logo.alt} className="max-w-[60px]" />
          </li>
        ))}
      </ul>
      <ul className={ulClassName} aria-hidden="true">
        {displayLogos.map((logo, index) => (
          <li key={`secondary-${index}`}>
            <img src={logo.src} alt={logo.alt} className="max-w-[60px]" />
          </li>
        ))}
      </ul>
    </div>
  );
}
