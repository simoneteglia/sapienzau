import React from "react";

import twitter from "../../assets/logos/twitter.png";
import linkedin from "../../assets/logos/linkedin.png";
import youtube from "../../assets/logos/youtube.png";

export default function InfiniteScroll() {
  const logos = [
    { src: twitter, alt: "Twitter Logo" },
    { src: linkedin, alt: "LinkedIn Logo" },
    { src: youtube, alt: "YouTube Logo" },
    // You can easily add more here:
    // { src: logo4, alt: "Logo 4" },
  ];

  // Logic: We repeat the list inside the <ul> to fill horizontal space,
  // then we repeat the entire <ul> itself for the seamless loop transition.
  const LOGO_REPETITIONS = 10;
  const displayLogos = Array(LOGO_REPETITIONS).fill(logos).flat();

  const ulClassName =
    "flex flex-nowrap items-center flex-shrink-0 [&_li]:mx-4 animate-infinite-scroll";

  return (
    <div className="w-screen inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
      <ul className={ulClassName}>
        {displayLogos.map((logo, index) => (
          <li key={`primary-${index}`}>
            <img src={logo.src} alt={logo.alt} className="max-w-none" />
          </li>
        ))}
      </ul>
      <ul className={ulClassName} aria-hidden="true">
        {displayLogos.map((logo, index) => (
          <li key={`secondary-${index}`}>
            <img src={logo.src} alt={logo.alt} className="max-w-none" />
          </li>
        ))}
      </ul>
    </div>
  );
}
