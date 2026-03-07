import React from "react";
import marchio_colorato_base_bianca from "../../assets/logos/marchio_colorato_base_bianca.svg";
import global from "../../resources/global.json";

export default function WIP() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <span className="text-yellow-400 font-bold tracking-wider uppercase text-sm mb-4 block">
            🚧 WORK IN PROGRESS
          </span>
          <h1 className="text-5xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
            Stiamo cucinando <br className="hidden md:block" />
            <span style={{ color: global.COLORS_TEAM.ARANCIONE }}>
              qualcosa! 🍜
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto md:mx-0">
            Dietro le quinte, stiamo mettendo gli ultimi ritocchi al nostro
            nuovo sito web. Prenditi un caffè e torna a trovarci presto—non
            vorrai perdertelo!
          </p>
          <button
            style={{
              backgroundColor: global.COLORS_TEAM.ARANCIONE,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/")}
            className="text-white font-bold py-3 px-8 rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white-500/30 duration-300"
          >
            Torna alla homepage
          </button>
        </div>

        <div className="flex-1 w-full flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-[450px] md:h-[450px] bg-slate-800 rounded-3xl border-4 border-dashed border-slate-700 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <img
              src={marchio_colorato_base_bianca}
              alt="Under Construction Mascot"
              className="absolute inset-0 w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
