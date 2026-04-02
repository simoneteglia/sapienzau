const ensureMemberCount = (members, count) =>
  Array.from({ length: count }, (_, index) => ({
    ...members[index % members.length],
  }));

const baseTeamSections = [
  {
    id: "board",
    label: "Board",
    code: "BD",
    accent: "#ff5e73",
    eyebrow: "Direzione trasversale",
    description: "a",
    members: [
      {
        name: "Presidenza",
        role: "Visione, governance e direzione del progetto",
      },
      {
        name: "Coordinamento",
        role: "Priorita, ritmi operativi e allineamento tra team",
      },
      {
        name: "Produzione",
        role: "Timeline condivise, deliverable e momenti chiave",
      },
      {
        name: "Community",
        role: "Cultura interna, energia e cura delle persone",
      },
    ],
  },
  {
    id: "it-website",
    label: "IT & Website",
    code: "IT",
    accent: "#5db4ff",
    eyebrow: "Esperienza digitale",
    description: "b",
    members: [
      {
        name: "Frontend",
        role: "Interfacce, componenti e performance del sito",
      },
      {
        name: "Backend",
        role: "Dati, integrazioni e logiche a supporto del progetto",
      },
      {
        name: "Product & UX",
        role: "Flussi, accessibilita e chiarezza dei percorsi",
      },
      {
        name: "Newsletter",
        role: "CRM, invii e strumenti per restare in contatto",
      },
    ],
  },
  {
    id: "planning-event-management",
    label: "Planning & Event Management",
    code: "PM",
    accent: "#ffb347",
    eyebrow: "Macchina operativa",
    description: "c",
    members: [
      {
        name: "Production",
        role: "Run of show, scalette e coordinamento generale",
      },
      {
        name: "Logistica",
        role: "Setup, fornitori, spostamenti e tempi tecnici",
      },
      {
        name: "Hospitality",
        role: "Accrediti, ospitalita e cura dei flussi in venue",
      },
      {
        name: "Partner Ops",
        role: "Attivazioni on-site e raccordo con gli sponsor",
      },
    ],
  },
  {
    id: "legal-administrative",
    label: "Legal & Administrative",
    code: "LA",
    accent: "#c2b8ff",
    eyebrow: "Struttura e conformita",
    description: "d",
    members: [
      {
        name: "Contratti",
        role: "Accordi, revisioni e passaggi autorizzativi",
      },
      {
        name: "Amministrazione",
        role: "Budget, rimborsi e presidio economico",
      },
      {
        name: "Privacy",
        role: "Liberatorie, consenso e tutela dei dati",
      },
      {
        name: "Compliance",
        role: "Linee guida TEDx e rapporti con l'ateneo",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    code: "DE",
    accent: "#ff7cd6",
    eyebrow: "Identita visiva",
    description: "f",
    members: [
      {
        name: "Visual Identity",
        role: "Sistemi grafici, campagne e coerenza visiva",
      },
      {
        name: "Social Design",
        role: "Post, cover e asset per i lanci editoriali",
      },
      {
        name: "Stage & Print",
        role: "Allestimenti, signage e materiali fisici",
      },
      {
        name: "Motion",
        role: "Animazioni, reel e contenuti per gli schermi",
      },
    ],
  },
  {
    id: "speakers-event-curation",
    label: "Speakers & Event Curation",
    code: "SE",
    accent: "#58d39b",
    eyebrow: "Narrativa dell'evento",
    description: "g",
    members: [
      {
        name: "Theme Research",
        role: "Direzioni narrative, temi e domande forti",
      },
      {
        name: "Speaker Scouting",
        role: "Ricerca, outreach e selezione degli speaker",
      },
      {
        name: "Speaker Care",
        role: "Email, materiali, esigenze e accompagnamento",
      },
      {
        name: "Stage Coaching",
        role: "Timing, flow e prove prima del palco",
      },
    ],
  },
  {
    id: "human-resources-academy",
    label: "Human Resources & Academy",
    code: "HR",
    accent: "#8be0ff",
    eyebrow: "Persone e crescita",
    description: "h",
    members: [
      {
        name: "Recruiting",
        role: "Call, candidature e attivazione dei nuovi ingressi",
      },
      {
        name: "Interviste",
        role: "Screening, matching e colloqui conoscitivi",
      },
      {
        name: "Onboarding",
        role: "Rituali, passaggi e integrazione nel gruppo",
      },
      {
        name: "Academy",
        role: "Formazione interna, masterclass e crescita condivisa",
      },
    ],
  },
  {
    id: "external-relations-sponsor",
    label: "External Relations & Sponsor",
    code: "ER",
    accent: "#ffd84a",
    eyebrow: "Relazioni e partnership",
    description: "i",
    members: [
      {
        name: "Sponsor Scouting",
        role: "Prospecting, contatti e pipeline commerciali",
      },
      {
        name: "Partnerships",
        role: "Relazioni media, istituzioni e alleanze strategiche",
      },
      {
        name: "Proposal Design",
        role: "Offerte, deck e follow-up con i partner",
      },
      {
        name: "Bandi",
        role: "Call pubbliche, patrocini e rendicontazione",
      },
    ],
  },
  {
    id: "communication-editorial-marketing-media",
    label: "Communication, Editorial, Marketing & Media",
    code: "CM",
    accent: "#ff8e63",
    eyebrow: "Voce del progetto",
    description: "j",
    members: [
      {
        name: "Social Media",
        role: "Canali, calendario editoriale e publishing",
      },
      {
        name: "Editorial",
        role: "Articoli, newsletter e scrittura dei contenuti",
      },
      {
        name: "Photo & Video",
        role: "Copertura, montaggio e memoria visiva dell'evento",
      },
      {
        name: "Press Office",
        role: "Media kit, press release e relazioni con la stampa",
      },
    ],
  },
];

export const teamSections = baseTeamSections.map((team) => ({
  ...team,
  members: ensureMemberCount(team.members, 8),
}));
