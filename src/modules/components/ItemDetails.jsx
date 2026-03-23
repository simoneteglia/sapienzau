import React from "react";
import CustomButton from "../components/CustomButton";

const ItemDetails = ({ id, imageUrl, title, description, price, onBuy }) => {
  return (
    <div className="bg-white p-3 pb-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-[300px] rounded-sm flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[250px] object-cover bg-gray-100 block"
      />

      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>

        <p className="mb-4 text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-gray-900">€ {price}</span>
          <CustomButton
            label="compra"
            color="pink"
            href={`/shop/item?id=${id}`}
          >
            Compra
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
