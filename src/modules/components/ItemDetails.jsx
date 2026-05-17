import React from "react";
import CustomButton from "../components/CustomButton";

const ItemDetails = ({ id, imageUrl, title, description, price }) => {
  return (
    <div
      className="z-10 bg-white p-1 pb-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-[300px] mx-auto flex flex-col cursor-pointer"
      onClick={() => (window.location.href = `/shop/item?id=${id}`)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[250px] object-contain bg-white block"
      />

      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="mx-2 mb-2 text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mx-2 mb-4 text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-center mt-auto px-2">
          <span className="text-xl font-bold text-gray-900">€ {price}</span>

          <CustomButton
            label="Compra"
            color="pink"
            href={`/shop/item?id=${id}`}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
