// COMPONENTS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

// RESOURCES
import global from "../../resources/global.json";
import "../../resources/styles/navbar.css";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

//MEDIA
import logo_nero_sapienzau from "../../assets/logos/logo_nero_sapienzau.svg";
import logo_colorato_sapienzau from "../../assets/logos/logo_colorato_sapienzau.svg";
import logo_colorato_base_bianca from "../../assets/logos/logo_colorato_base_bianca_sapienzau.svg";

// Navbar component
// This component is responsible for rendering the navigation bar of the application
// It includes the logo, navigation links, and a section for additional content
// @author: Simone Teglia
export default function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState("homepage");

  useEffect(() => {
    // function that logs when the disclosurepanel is open or closed
  });

  const navigation = [
    {
      name: "Club",
      href: "/club",
      current: currentPage === "club",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
      className={`w-full top-0 left-0 fixed z-1 flex items-center bg-[${global.COLORS.GRIGIO_CHIARO}] font-objectsans`}
      style={{
        height: global.UTILS.NAV_HEIGHT,
      }}
    >
      <div className="relative hidden z-1 w-full xl:w-[85%] h-[75%] md:flex items-center rounded-[1rem] ">
        <Link to="/" onClick={() => setCurrentPage("homepage")}>
          <img
            src={logo_colorato_base_bianca}
            alt="Logo SapienzaU"
            className="w-[268px] ml-[30px] mr-[50px]"
          />
        </Link>
        <section
          id="middle-section"
          className="flex justify-between items-center 2xl:gap-20 xl:gap-15 gap-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-white text-[20px] hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-semibold",
              )}
              onClick={() => {
                setCurrentPage(item.name.toLowerCase());
              }}
            >
              {item.name}
            </Link>
          ))}
        </section>

        <div className="flex md:hidden"></div>
      </div>
    </Disclosure>
  );
}
