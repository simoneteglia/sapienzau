// -------------COMPONENTS-------------
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "./InfiniteScroll";
import { Link } from "react-router-dom";

// -------------RESOURCES-------------
import global from "../../resources/global.json";
import "../../index.css";

// -------------MEDIA-------------
import {
  faFacebook,
  faFlickr,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo_colorato_sapienzau from "../../assets/logos/logo_colorato_sapienzau.svg";
import logo_colorato_base_bianca_sapienzau from "../../assets/logos/logo_colorato_base_bianca_sapienzau.svg";

export default function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  const SocialIcon = ({ icon, link }) => {
    return (
      <a className="mr-8" aria-current="page" href={link}>
        <FontAwesomeIcon style={{ color: "white" }} icon={icon} size="xl" />
      </a>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-[15px] text-white">
      <InfiniteScroll />
      <footer className={`z-1 flex w-screen flex-wrap gap-[40px]  p-[30px]`}>
        <div>
          <img
            src={logo_colorato_base_bianca_sapienzau}
            alt="Logo SapienzaU"
            className="w-[200px] md:w-[200px] lg:w-[220px]"
          />
          <p className="w-[220px] md:w-[300px] lg:w-[400px] tertiary-text mt-[5px] mb-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <SocialIcon
            icon={faLinkedin}
            link="https://www.linkedin.com/company/tedxsapienzau/mycompany/"
          />
          <SocialIcon
            icon={faInstagram}
            link="https://www.instagram.com/tedxsapienzau/"
          />
          <SocialIcon
            icon={faTiktok}
            link="https://www.tiktok.com/@tedxsapienzau?is_from_webapp=1&sender_device=pc"
          />
          <SocialIcon
            icon={faYoutube}
            link="https://www.youtube.com/@tedxsapienzau/playlists"
          />
          <SocialIcon
            icon={faFlickr}
            link="https://www.flickr.com/photos/tedxsapienzau/albums"
          />
        </div>
        <div className="flex flex-col gap-2 md:ml-8 font-gotham-bold uppercase text-lg [&_a:nth-child(1)]:cursor-pointer [&_a:nth-child(n+2)]:text-gray-400">
          <a href="/club">Club</a>
          <a>Chi Siamo</a>
          <a>Team</a>
          <a>Eventi</a>
        </div>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-3 justify-between">
          <div>
            <small>
              <a className="underline" href="/privacypolicy">
                Privacy Policy
              </a>
            </small>
            <small className="tertiary-text">
              <a
                className="underline ml-[10px]"
                href="/images/Statuto2024-25.pdf"
              >
                Statuto
              </a>
            </small>
          </div>
          <small className="">
            &copy; Copyright 2026 | SapienzaU | All Rights Reserved
          </small>
        </div>
      </footer>
    </section>
  );
}
