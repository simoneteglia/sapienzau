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
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Added icons

// MEDIA
import logo_colorato_base_bianca from "../../assets/logos/logo_colorato_base_bianca_sapienzau.svg";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("homepage");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigation = [
    { name: "Club", href: "/club", current: currentPage === "club" },
    {
      name: "Chi Siamo",
      href: "/contact",
      current: currentPage === "/contact",
      disabled: true,
    },
    {
      name: "Team",
      href: "/team",
      current: currentPage === "/team",
      disabled: true,
    },
    {
      name: "Eventi",
      href: "/events",
      current: currentPage === "/events",
      disabled: true,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="w-full top-0 left-0 fixed z-50 flex items-center font-objectsans"
      style={{
        height: global.UTILS.NAV_HEIGHT,
        backgroundColor: global.COLORS.GRIGIO_CHIARO,
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
                      src={logo_colorato_base_bianca}
                      alt="Logo SapienzaU"
                      className="w-[180px]"
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
                      src={logo_colorato_base_bianca}
                      alt="Logo SapienzaU"
                      className="w-[180px]"
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
                <Link to="/" onClick={() => setCurrentPage("homepage")}>
                  <img
                    src={logo_colorato_base_bianca}
                    alt="Logo SapienzaU"
                    className="w-[230px] mr-[50px]"
                  />
                </Link>
                <section className="flex justify-between items-center gap-5">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-[20px] hover:bg-gray-700 ",
                        "rounded-md px-3 py-2 text-sm font-semibold",
                        item.disabled
                          ? "pointer-events-none text-gray-500"
                          : "text-white",
                      )}
                      onClick={() => setCurrentPage(item.name.toLowerCase())}
                    >
                      {item.name}
                    </Link>
                  ))}
                </section>
              </div>
            </div>
          </div>

          {/* --- MOBILE DRAWER --- */}
          <DisclosurePanel
            transition
            className="md:hidden absolute left-0 w-full h-screen shadow-lg transition duration-300 ease-out 
                      data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[closed]:delay-500"
            style={{
              backgroundColor: global.COLORS.GRIGIO_CHIARO,
              top: global.UTILS.NAV_HEIGHT,
            }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <DisclosureButton
                  key={index}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    `block rounded-md px-3 py-2 text-[50px] font-gotham-bold uppercase transition-all duration-500 transform ${open ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-0"}`,
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
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
