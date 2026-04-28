import { color } from "three/src/nodes/tsl/TSLCore.js";

export const productsData = [
  {
    id: 1,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1260033_IMG_14-59-45-5945134214299851193429_600.png",
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1260035_IMG_14-59-45-5945134214299855243678_600.png",
    title: "Felpa TEDxSapienzaU",
    description: "Felpa organica girocollo, prodotta con 6 bottiglie di plastica riciclate",
    price: "24.00",
    link: "https://sapienzaushop.teetaly.com/IT/felpa-uomo-girocollo-cotone-organico-bc-wu31b-17",
    color: "#000"
  },
  {
    id: 2,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259808_IMG_19-35-33-3533134212737339495823_600.png",
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1259810_IMG_19-35-34-3534134212737342236023_600.png",
    title: "T-Shirt TEDxSapienzaU",
    description: "T-shirt unisex in cotone organico",
    price: "13.00",
    link: "https://sapienzaushop.teetaly.com/IT/t-shirt-unisex-light-cotton-gildan-gl3000-24",
    color: "#000"
  },
  {
    id: 3,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259397_IMG_12-46-23-4623134210763835933658_600.png",
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1259399_IMG_12-46-23-4623134210763839417415_600.png",
    title: "Felpa Bianca TEDxSapienzaU",
    description: "Felpa organica girocollo, prodotta con 6 bottiglie di plastica riciclate",
    price: "24.00",
    link: "https://sapienzaushop.teetaly.com/IT/felpa-uomo-girocollo-cotone-organico-bc-wu31b-14",
    color: "#fff"
  },
  {
    id: 4,
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1259390_IMG_12-25-44-2544134210751446112040_600.png",
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259389_IMG_12-25-44-2544134210751444444769_600.png",
    title: "T-Shirt TEDxSapienzaU",
    description: "T-shirt unisex in cotone organico",
    price: "13.00",
    link: "https://sapienzaushop.teetaly.com/IT/t-shirt-unisex-light-cotton-gildan-gl3000-23",
    color: ["#fff", "#000"]
  },
  {
    id: 5,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1243204_IMG_12-50-56-5056134173614561417341_600.png",
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1243206_IMG_12-50-56-5056134173614564331394_600.png",
    title: "T-Shirt SapienzaU",
    description: "T-shirt unisex in cotone organico",
    price: "15.00",
    link: "https://sapienzaushop.teetaly.com/IT/t-shirt-boxlogo-sapienzau",
    color: "#000"
  },
  {
    id: 6,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1260044_IMG_15-06-15-615134214303752452712_600.png",
    title: "Cappellino TEDxSapienzaU",
    description: "Cappellino low profile in cotone",
    price: "12.00",
    link: "https://sapienzaushop.teetaly.com/IT/cappellino-low-profile-vintage-beechfield-b655-23",
    color: "#191919"
  },
  {
    id: 7,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1260038_IMG_14-59-55-5955134214299951820185_600.png",
    title: "Cappellino X",
    description: "Cappellino low profile in cotone",
    price: "12.00",
    link: "https://sapienzaushop.teetaly.com/IT/cappellino-low-profile-vintage-beechfield-b655-20",
    color: "#191919"
  },
  {
    id: 8,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259806_IMG_19-35-25-3525134212737256745399_600.png",
    title: "Quadernini A5 (2pz)",
    description: "Set 2 quaderni A5",
    price: "9.00",
    link: "https://sapienzaushop.teetaly.com/IT/quadernini-a5-2-pz",
    color: "#fff"
  },
  {
    id: 9,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259804_IMG_19-35-19-3519134212737195138127_600.png",
    title: "Tazza in ceramica",
    description: "Capacità 350ml",
    price: "12.00",
    link: "https://sapienzaushop.teetaly.com/IT/tazza-in-ceramica-20",
    color: "#fff"
  },
  {
    id: 10,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259800_IMG_19-34-52-3452134212736923798003_600.png",
    title: "Borraccia 800ml",
    description: "Borraccia in alluminio, capacità 800ml",
    price: "15.00",
    link: "https://sapienzaushop.teetaly.com/IT/borraccia-800ml-2",
    color: "#fff"
  },
  {
    id: 11,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259798_IMG_19-34-45-3445134212736854562241_600.png",
    title: "Tote Bag TEDxSapienzaU",
    description: "Shopping bag in cotone canvas",
    price: "15.00",
    link: "https://sapienzaushop.teetaly.com/IT/shopper-spessa-in-tela-westford-mill-w108-2",
    color: "#fff"
  },
  {
    id: 12,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259793_IMG_19-34-35-3435134212736751682915_600.png",
    imageUrl2: "https://teetalyimmages.blob.core.windows.net/thumbs/1259794_IMG_19-34-35-3435134212736753689251_600.png",
    imageUrl3: "https://teetalyimmages.blob.core.windows.net/thumbs/1259795_IMG_19-34-35-3435134212736756727349_600.png",
    imageUrl4: "https://teetalyimmages.blob.core.windows.net/thumbs/1259797_IMG_19-34-36-3436134212736760365701_600.png",
    title: "Cappellino TEDxSapienzaU",
    description: "Cappellino low profile in cotone",
    price: "12.00",
    link: "https://sapienzaushop.teetaly.com/IT/cappellino-low-profile-vintage-beechfield-b655-19",
    colors: ["#5f605a", "#7e6363", "#bfb6af", "#000"]
  },
  {
    id: 13,
    imageUrl: "https://teetalyimmages.blob.core.windows.net/thumbs/1259802_IMG_19-35-12-3512134212737128265773_600.png",
    title: "5 Spille",
    description: "5 spille con la stessa grafica, formato 37mm",
    price: "7.00",
    link: "https://sapienzaushop.teetaly.com/IT/5-spille-3",
    color: "#fff"
  },
];
