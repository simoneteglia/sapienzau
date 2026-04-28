import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useSearchParams } from "react-router";

import global from "../../resources/global.json";
import team_it from "../../assets/logos/team_it.png";
import team_la from "../../assets/logos/team_la.png";
import team_pem from "../../assets/logos/team_pem.png";
import { productsData } from "../../data/productsData.js";

export default function ShopItem() {
  const [searchParams] = useSearchParams();
  const itemId = searchParams.get("id");
  console.log(itemId);

  const selectedProduct = productsData.find(
    (product) => product.id === parseInt(itemId, 10),
  );

  let images = [];
  if (selectedProduct) {
    const keys = Object.keys(selectedProduct).filter(key => key.startsWith('imageUrl'));
    keys.sort((a, b) => {
      const aNum = a === 'imageUrl' ? 1 : parseInt(a.replace('imageUrl', ''), 10);
      const bNum = b === 'imageUrl' ? 1 : parseInt(b.replace('imageUrl', ''), 10);
      return aNum - bNum;
    });

    images = keys.map(key => selectedProduct[key]).filter(url => url && !url.includes("placeholder"));
  }

  if (images.length === 0) {
    images = ["https://www.repeatedcycle.com/cdn/shop/files/placeholder-tshirt-on-transparent-background-square-ratio.png?v=1769944980&width=1600"];
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const productColors = selectedProduct
    ? selectedProduct.colors || selectedProduct.color
    : null;

  const colorsArray = Array.isArray(productColors)
    ? productColors
    : productColors
    ? [productColors]
    : [];

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
        <h2 className="relative z-10 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] leading-[1.1] font-gotham-bold text-white">
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
                {selectedProduct
                  ? selectedProduct.title
                  : `Nome Prodotto ${itemId}`}
              </h3>
              <p className="font-gotham-book">
                {selectedProduct
                  ? selectedProduct.description
                  : `Descrizione dettagliata del prodotto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
              </p>
              <span className="text-xl font-semibold text-[#32A32A]">
                € {selectedProduct ? selectedProduct.price : "NON DISPONIBILE"}
              </span>
              <hr className="border-t relative border-black w-full z-10" />
              {colorsArray.length > 0 && (
                <div className="flex gap-4">
                  {colorsArray.map((c, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full cursor-pointer border border-gray-400"
                      style={{ backgroundColor: c }}
                      onClick={() => {
                        if (index < images.length) {
                          setActiveIndex(index);
                        }
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            <CustomButton 
              label="Comprami! :)" 
              color="violet" 
              href={selectedProduct ? selectedProduct.link : "#"}
            />
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
