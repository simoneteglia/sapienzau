import global from "../resources/global.json"

const ensureMemberCount = (members, count) =>
  Array.from({ length: count }, (_, index) => ({
    ...members[index % members.length],
  }));

const baseTeamSections = [
  {
    id: "board",
    label: "Board",
    code: "BOARD",
    accent: global.COLORS.ROSSO_TED,
    description: "",
    members: [
      {
        name: "Gloria Marinelli",
        role: "Organizer",
      },
      {
        name: "Silvia Scardini",
        role: "Co-Organizer",
      },
      {
        name: "Alessandra Amicucci",
        role: "Tesoriere",
      },
      {
        name: "Luca Manco",
        role: "Segretario Generale",
      },
      {
        name: "Simone Teglia",
        role: "Coordinator",
      },
      {
        name: "Sabrina Piteri",
        role: "Coordinator",
      },
      {
        name: "Sophie-Claire Touadi",
        role: "Coordinator",
      },
      {
        name: "Alessio Scanu",
        role: "Coordinator",
      },
      {
        name: "Alice Milan",
        role: "Coordinator",
      },
      {
        name: "Alice Lazzaro",
        role: "Coordinator",
      },
      {
        name: "Riccardo Moscatello",
        role: "ERS Coordinator",
      },
      {
        name: "Ascanio Frugoni",
        role: "ERS Coordinator",
      },
    ],
  },
  {
    id: "it-website",
    label: "IT & Website",
    code: "IT",
    accent: global.COLORS_TEAM.IT,
    eyebrow: "IT",
    description:
      "Il team IT & Website garantisce il corretto funzionamento del sito web, lato front-end e back-end, gestisce la web app ufficiale e coordina la newsletter, assicurando un'esperienza utente ottimale. Supporta la regia tecnica durante gli eventi.",
    members: [
      {
        name: "Stefano D'Agnese",
        role: "",
      },
      {
        name: "Luce Adami",
        role: "",
      },
      {
        name: "Leonardo Marasca",
        role: "",
      },
      {
        name: "Hamza Adbul Kader",
        role: "",
      },
    ],
  },
  {
    id: "external-relations-sponsor",
    label: "External Relations & Sponsor",
    code: "ERS",
    accent: global.COLORS_TEAM.ERS,
    eyebrow: "ERS",
    description:
      "Il team External Relations & Sponsor gestisce sponsorizzazioni, partnership, patrocini e bandi pubblici. Si occupa della ricerca di aziende, startup, PMI, media, associazioni, enti e istituzioni e della firma dei contratti, coltivando collaborazioni reciprocamente vantaggiose. I fondi raccolti finanziano il progetto e le iniziative del TEDxSapienzaU.",
    members: [
      { name: "Nicoletta Mattogno" },
      { name: "Cecilia Segatto" },
      { name: "Maxim De Brasi" },
      { name: "Federica Forte" },
      { name: "Luca Bertoldi" },
      { name: "Elena  Cardelli" },
      { name: "Marco  Abbati" },
      { name: "Parthkumar Girdharbhai Vekariya" },
      { name: "Andrea  Tezza" },
    ],
  },
  {
    id: "planning-event-management",
    label: "Planning & Event Management",
    code: "PEM",
    accent: global.COLORS_TEAM.PEM,
    eyebrow: "PEM",
    description:
      "Il team Planning and Event Management pianifica e gestisce gli aspetti organizzativi delle conferenze TEDxSapienzaU e di altri eventi dedicati agli studenti Sapienza, anche in collaborazione con gli Sponsor. Si occupa delle richieste di preventivi alle aziende, della ricerca degli spazi per gli eventi e della loro promozione.",
    members: [
      { name: "Maria Vittoria Pascucci" },
      { name: "Andrea Carafa" },
      { name: "Claudia Fontana" },
      { name: "Martina Strangis" },
      { name: "Matteo Lupi" },
      { name: "Arabela Ioana Gherghel" },
      { name: "Sofia Bruca" },
      { name: "Maria Federica Russo" },
      { name: "Giorgia Crispini" },
      { name: "Awais Ali Memon" },
    ],
  },
  {
    id: "legal-administrative",
    label: "Legal & Administrative",
    code: "LA",
    accent: global.COLORS_TEAM.LA,
    eyebrow: "LA",
    description:
      "Il team Legal & Administrative gestisce gli aspetti giuridici e amministrativi degli eventi TEDxSapienzaU. Si occupa della stesura dei contratti, della contabilità, della ricerca dei bandi per il recupero fondi. Garantisce il rispetto delle regole TEDx e delle linee guida dell'Ateneo, insieme alla tutela della privacy e del diritto d'autore.",
    members: [
      { name: "Lucia Monsone" },
      { name: "Laura Vila Marra" },
      { name: "Francesco  Ghelardini" },
      { name: "Elisa Battocchi" },
      { name: "Carlotta Coluzzi" },
      { name: "Camilla Bottaro" },
      { name: "Flavia  Curti" },
    ],
  },
  {
    id: "design",
    label: "Design",
    code: "DEX",
    accent: global.COLORS_TEAM.DEX,
    eyebrow: "DEX",
    description:
      "Il team Design si occupa della progettazione grafica dell’evento. Crea l'identità visiva e grafica, gestisce l’ideazione e la realizzazione di prodotti e allestimenti, assicurando un'esperienza visiva coinvolgente e coerente con il tema dell’evento.",
    members: [
      { name: "Nicholas Barbieri" },
      { name: "Kevin Shkreli" },
      { name: "Alice Ronchetti" },
      { name: "Chiara Giancamilli" },
      { name: "Stephen Roan Olan Lariosa" },
      { name: "Giulia Traini" },
      { name: "Angelica Hernandez Abanilla" },
      { name: "Angela Altimari" },
      { name: "Maria Zaharia" },
      { name: "Valerio Vicentino" },
      { name: "Lisa De candido" },
      { name: "Alessia Bellucci" },
      { name: "Francesca D'Eramo" },
      { name: "Ludovica Berto" },
      { name: "Laura Minelli" },
      { name: "Sara Altamura" },
      { name: "Pasquale Ciardiello" },
    ],
  },
  {
    id: "speakers-event-curation",
    label: "Speakers & Event Curation",
    code: "SEC",
    accent: global.COLORS_TEAM.SEC,
    eyebrow: "SEC",
    description:
      "Il team Speakers & Event Curation propone i temi degli eventi, seleziona gli Speakers e ne cura i dettagli burocratici e pratici (email, contatti, slides, speech). Si occupa di ogni fase del rapporto con gli Speakers, garantendo attenzione alle loro necessità e assicurando una preparazione ottimale.",
    members: [
      { name: "Francesco D'Amico" },
      { name: "Miriana Mazzei" },
      { name: "Marianna  Barile" },
      { name: "Giacomo Gatto" },
      { name: "Allegra Flamini" },
      { name: "Sofia Colozza" },
      { name: "Ludovica Pallotta" },
      { name: "Agnese Carbonari" },
      { name: "Giulia Elena Ilie" },
      { name: "Martina Ulzega" },
      { name: "Alessio Chisari" },
      { name: "Giovanni Maria Marsella" },
      { name: "Lucia Santulli" },
    ],
  },
  {
    id: "human-resources-academy",
    label: "Human Resources & Academy",
    code: "HRA",
    accent: global.COLORS_TEAM.HRA,
    eyebrow: "HRA",
    description:
      "Il team Human Resources & Academy gestisce la selezione dei volontari attraverso candidature e colloqui conoscitivi, e ne promuove il benessere promuovendo un ambiente creativo e produttivo. Si occupa inoltre della formazione interna tramite masterclass, create e esposte da membri interni e collaboratori esterni.",
    members: [
      { name: "Mariangela Pisanelli" },
      { name: "Ascanio Frugoni" },
      { name: "Carlotta Riccardi" },
      { name: "Vera Tomasella" },
      { name: "Valeria Scardini" },
      { name: "Martina Flagiello" },
      { name: "Ludovica Demofonti" },
      { name: "Gaia Vaccari" },
      { name: "Federico Di Vaio" },
      { name: "Francesca Caiaffa" },
      { name: "Flavia Marta Torrisi" },
      { name: "Angela Conte" },
    ],
  },
  {
    id: "communication-editorial-marketing-media",
    label: "Communication, Editorial, Marketing & Media",
    code: "CEMM",
    accent: global.COLORS_TEAM.CEMM,
    eyebrow: "CEMM",
    description:
      "Il team Communication, Editorial & Marketing si occupa della comunicazione di TEDxSapienzaU. Pianifica e cura la reputazione online, l'awareness e le campagne per coinvolgere il pubblico. Realizza comunicati stampa, newsletter, articoli e contenuti visuali e video, curando l’efficacia dei messaggi. Gestisce la collaborazione con i Media Partner.",
    members: [
      { name: "Milena Dalpiaz" },
      { name: "Nicola Nappi" },
      { name: "Elena  Marafatto" },
      { name: "Davide Sparacino" },
      { name: "Emanuele Turano" },
      { name: "Chiara D'Aleo" },
      { name: "Raffaella Pirone" },
      { name: "Federico Massella" },
      { name: "Sofia Stoppele" },
      { name: "Zi Jie Liu" },
      { name: "Petra Federica De Rienzo" },
      { name: "Giulia Ugona" },
      { name: "Angela Victoria Consuelo Moncada Chunga" },
      { name: "Donato De Nuzzo" },
      { name: "Alexandra Silvestri" },
      { name: "Sofia Vecchi" },
      { name: "Chiara Pescosolido" },
    ],
  },
];

export const teamSections = baseTeamSections.map((team) => ({
  ...team,
  // members: ensureMemberCount(team.members, 8),
  members: team.members,
}));
