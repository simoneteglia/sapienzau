import React from "react";
import { useState, useEffect } from "react";

import global from "../../resources/global.json";
import ItemDetails from "../components/ItemDetails";

import Banner from "../../assets/images/shop/shop_banner.png";
import team_it from "../../assets/logos/team_it.png";

const productsData = [
  {
    id: 1,
    imageUrl: "placeholder1",
    title: "title1",
    description: "description1",
    price: "120.00",
  },
  {
    id: 2,
    imageUrl: "placeholder2",
    title: "title2",
    description: "description2",
    price: "35.00",
  },
  {
    id: 3,
    imageUrl: "placeholder3",
    title: "title3",
    description: "description3",
    price: "85.00",
  },
  {
    id: 4,
    imageUrl: "placeholder4",
    title: "title4",
    description: "description4",
    price: "150.00",
  },
];

const Shop = () => {
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

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        marginTop: isMobile
          ? `calc(${global.UTILS.NAV_HEIGHT} + 20px)`
          : `calc(${global.UTILS.NAV_HEIGHT}`,
      }}
    >
      <div className="relative bg-black h-[400px]">
        <img
          src={Banner}
          alt="Shop Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-black px-4 text-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
              Shop
            </h1>
          </div>
        </div>
      </div>

      {/* GRID */}
      <section className="container mx-auto px-16 py-16 pt-32">
        <div className="relative mb-4 md:mb-6">
          <img
            src={team_it}
            className="absolute top-[-30px] md:top-[-40px] left-0 w-[80px] md:w-[130px] h-auto -rotate-5 z-0"
          />
          <h2 className="relative z-10 text-[16px] sm:text-[20px] md:text-[25px] lg:text-[35px] leading-[1.1] font-gotham-ultra text-white">
            Prodotti
          </h2>
          <hr className="border-t border-gray-700 mb-10 w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {productsData.map((product) => (
            <ItemDetails
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
