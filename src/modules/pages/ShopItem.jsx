import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useSearchParams } from "react-router";

import global from "../../resources/global.json";
import team_it from "../../assets/logos/team_it.png";
import team_la from "../../assets/logos/team_la.png";
import team_pem from "../../assets/logos/team_pem.png";

export default function ShopItem() {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("id");
  console.log(itemId);

  const images = [
    "https://www.repeatedcycle.com/cdn/shop/files/placeholder-tshirt-on-transparent-background-square-ratio.png?v=1769944980&width=1600",
    "https://images.squarespace-cdn.com/content/v1/5984c4a0cd39c369f61bbf0f/1729555802923-LTKNBTR6XZJTTR02I0RS/unisex-denim-t-shirt-garnet-red-front-6716ed50d3a96.jpg?format=1000w", // Placeholder for the second image
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="bg-black text-white w-[95%] mx-auto mb-10"
      style={{
        marginTop: `calc(${global.UTILS.NAV_HEIGHT} + 100px)`,
      }}
    >
      <div className="relative mb-4 md:mb-6">
        <img
          src={team_it}
          alt="deco"
          className="absolute top-[-40px] md:top-[-40px] left-0 w-[80px] md:w-[130px] h-auto -rotate-5 z-0 scale-90"
        />
        <h2 className="relative z-10 text-[16px] sm:text-[20px] md:text-[25px] lg:text-[35px] leading-[1.1] font-gotham-bold text-white">
          Categoria
        </h2>
        <img
          src={team_la}
          alt="deco"
          className="absolute top-0 right-0 w-[80px] md:w-[130px] h-auto rotate-15 z-0 scale-110"
        />
        <hr className="border-t relative border-gray-200 mb-10 w-full z-10" />
      </div>

      <section className="container mx-auto px-16 md:pt-5 relative">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4 mb-6 md:mb-0 z-10 ">
            <img
              src={images[activeIndex]}
              alt="Product Main"
              className="w-full h-auto object-cover border-white border-4 bg-black"
            />

            <div className="flex gap-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-20 h-20 border-2 transition-all bg-black ${
                    activeIndex === index
                      ? "border-violet-500 scale-105"
                      : "border-gray-500 opacity-70"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="flex flex-col gap-4 bg-white p-6 text-black mb-5">
              <h3 className="text-2xl font-gotham-bold">
                Nome Prodotto {itemId}
              </h3>
              <p className="font-gotham-book">
                Descrizione dettagliata del prodotto. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <span className="text-xl font-semibold text-[#32A32A]">
                €49.99
              </span>
              <hr className="border-t relative border-black w-full z-10" />
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
              </div>
            </div>
            <CustomButton label="Comprami! :)" color="violet" />
          </div>
        </div>
        <img
          src={team_pem}
          alt="deco"
          className="absolute bottom-[100px] hidden md:block left-0 w-[80px] md:w-[130px] h-auto rotate-35 z-0 scale-180"
        />
      </section>
    </div>
  );
}
