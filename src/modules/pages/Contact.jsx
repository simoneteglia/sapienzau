import React from "react";
import global from "../../resources/global.json";
export default function Contact() {
  const navbarHeight = global?.UTILS?.NAV_HEIGHT || "80px"; 

  return (
    <div 
      className="w-full bg-black"
      style={{ 
        minHeight: `calc(100vh - ${navbarHeight})`,
        paddingTop: navbarHeight 
      }}
    >
      <div 
        className="w-full overflow-hidden"
        style={{ height: `calc(100vh - ${navbarHeight})` }}
      >
        <iframe
          src="https://www.tedxsapienzau.com/join-us?embed=true"
          title="TEDxSapienzaU Contact Stream"
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}