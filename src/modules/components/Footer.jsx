// -------------COMPONENTS-------------
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <a
        className="bento-box-no-padding"
        aria-current="page"
        href={link}
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          backgroundColor: "#ffffff1a",
        }}
      >
        <FontAwesomeIcon style={{ color: "white" }} icon={icon} size="xl" />
      </a>
    );
  };

  return (
    <section className="p-[24px] flex flex-col items-center justify-center gap-[15px] text-white">
      <footer className="bento-box flex w-full justify-between flex-wrap gap-[40px] ">
        <div>
          <div className="flex flex-wrap gap-[12px] mt-[10px]">
            <SocialIcon
              icon={faFacebook}
              link="https://www.facebook.com/tedxsapienzau/"
            />
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
        </div>
      </footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          flexWrap: "wrap",
          fontFamily: "Fira Sans Extra Condensed",
        }}
      >
        <div>
          <small style={{ marginRight: "20px" }} className="tertiary-text">
            <a
              className="secondary-text"
              style={{
                textDecoration: "underline",
              }}
              href="/privacypolicy"
            >
              Privacy Policy
            </a>
          </small>
          <small className="tertiary-text">
            <a
              className="secondary-text"
              style={{ textDecoration: "underline" }}
              href="/images/Statuto2024-25.pdf"
            >
              Statuto
            </a>
          </small>
        </div>
        <small className="secondary-text">
          &copy; Copyright 2026 | TEDxSapienzaU | All Rights Reserved
        </small>
      </div>
    </section>
  );
}
