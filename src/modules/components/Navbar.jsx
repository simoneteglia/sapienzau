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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// MEDIA
import logo_colorato_base_bianca from "../../assets/logos/logo_colorato_base_bianca_sapienzau.svg";
import marchio_colorato_base_bianca from "../../assets/logos/marchio_colorato_base_bianca.svg";
import arrow_right from "../../assets/svg/arrow_right.svg";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < global.UTILS.MOBILE_WIDTH);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Club", href: "/club", current: currentPage === "club" },
    {
      name: "Chi Siamo",
      href: "/contact",
      current: currentPage === "/contact",
      disabled: false,
    },
    {
      name: "Team",
      href: "/team",
      current: currentPage === "/team",
      disabled: false,
    },
    {
      name: "Eventi",
      href: "/events",
      current: currentPage === "/events",
      disabled: false,
    },
    {
      name: "Shop",
      href: "/shop",
      current: currentPage === "shop",
      disabled: false,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "w-full top-0 left-0 fixed z-50 flex items-center font-objectsans",
        isMobile ? "bg-black" : "",
      )}
      style={{
        height: global.UTILS.NAV_HEIGHT,
        backgroundColor: isMobile ? "black" : global.COLORS.GRIGIO_CHIARO,
      }}
    >
      {({ close, open }) => (
        <>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-full items-center justify-between">
              {/* --- MOBILE LAYOUT: LOGO LEFT, HAMBURGER RIGHT --- */}
              <div className="flex w-full items-center justify-between md:hidden">
                {open ? (
                  <DisclosureButton
                    to="/"
                    onClick={() => {
                      setCurrentPage("homepage");
                    }}
                  >
                    <img
                      src={marchio_colorato_base_bianca}
                      alt="Marchio SapienzaU"
                      className="w-[60px]"
                    />
                  </DisclosureButton>
                ) : (
                  <Link
                    to="/"
                    onClick={() => {
                      setCurrentPage("homepage");
                    }}
                  >
                    <img
                      src={marchio_colorato_base_bianca}
                      alt="Marchio SapienzaU"
                      className="w-[60px]"
                    />
                  </Link>
                )}

                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* --- DESKTOP LAYOUT --- */}
              <div className="hidden md:flex items-center w-full">
                <Link
                  to="/"
                  onClick={() => setCurrentPage("homepage")}
                  className="shrink-0"
                >
                  <img
                    src={logo_colorato_base_bianca}
                    alt="Logo SapienzaU"
                    className="w-[230px]"
                  />
                </Link>

                <section className="flex-1 flex items-center justify-end ml-[8%] lg:ml-[12%] gap-x-6">
                  <div className="flex gap-x-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? "text-white" : "hover:bg-gray-700",
                          "lg:text-[18px] md:text-[15px] rounded-md px-3 py-2  font-gotham-bold uppercase transition-colors duration-300",
                          item.disabled
                            ? "pointer-events-none text-gray-500"
                            : "text-white",
                        )}
                        onClick={() => setCurrentPage(item.name.toLowerCase())}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    key="join-us"
                    to="/"
                    className={classNames(
                      "lg:text-[18px] md:text-[15px] bg-white text-[#262626] hover:bg-gray-200 rounded-3xl px-5 py-1 font-gotham-bold uppercase transition-colors duration-300",
                    )}
                  >
                    Join us
                  </Link>
                </section>
              </div>
            </div>
          </div>

          {/* --- MOBILE DRAWER --- */}
          <DisclosurePanel
            transition
            className="md:hidden absolute right-0 w-3/4 shadow-lg transition duration-300 ease-out 
                      data-[closed]:translate-x-full data-[closed]:opacity-0 bg-black flex flex-col"
            style={{
              top: global.UTILS.NAV_HEIGHT,
              height: `calc(100vh - ${global.UTILS.NAV_HEIGHT})`,
            }}
          >
            <div className="flex flex-col h-full px-6 pt-10 pb-10 overflow-y-auto">
              <div className="space-y-6">
                {navigation.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full"
                  >
                    <DisclosureButton
                      as={Link}
                      to={item.href}
                      className={classNames(
                        `text-[32px] font-gotham-bold capitalize transition-all duration-500 transform ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`,
                        item.current ? "underline" : "",
                        item.disabled
                          ? "pointer-events-none text-gray-500"
                          : "text-white",
                      )}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onClick={() => setCurrentPage(item.name.toLowerCase())}
                    >
                      {item.name}
                    </DisclosureButton>

                    <DisclosureButton
                      as={Link}
                      to={item.href}
                      className={`text-white transition-all duration-500 transform ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      onClick={() => setCurrentPage(item.name.toLowerCase())}
                    >
                      <img
                        src={arrow_right}
                        alt="Freccia"
                        className="w-8 h-8 object-contain invert"
                      />
                    </DisclosureButton>
                  </div>
                ))}
              </div>

              {/* Tasto Join Us Mobile */}
              <div
                className={`mt-12 flex justify-end transition-all duration-500 transform ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${navigation.length * 100}ms` }}
              >
                <DisclosureButton
                  as={Link}
                  to="/"
                  className="text-[20px] bg-white text-[#262626] rounded-3xl px-6 py-2 font-gotham-bold uppercase text-center inline-block"
                  onClick={() => setCurrentPage("join us")}
                >
                  Join us
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
