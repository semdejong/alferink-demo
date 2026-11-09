/**
 * J & J Alferink Schilderwerken — alleen geverifieerde feiten.
 * Kleuren en bedrijfsgegevens voor de hele site.
 */

const phoneDisplay = "06-54244846";
const phoneHref = "tel:+31654244846";
const email = "info@alferink-schilderwerken.nl";

export const content = {
  slug: "alferink-demo",

  company: {
    name: "J & J Alferink Schilderwerken",
    shortName: "J & J Alferink",
    legalStyle: "J & J ALFERINK · SCHILDER, GLAS & SPUITWERKEN",
    tagline: "Schilder, glas & spuitwerken · Haaksbergen",
    description:
      "Schilder-, glas-, behang- en spuitwerk vanuit Haaksbergen. Opgericht in 1997 door Johan Alferink. Actief in Twente, Achterhoek en Salland.",
    logo: "/img/logo/logo.png",
    logoWidth: 282,
    logoHeight: 204,
    keurmerken: "/img/logo/keurmerken.png",
    keurmerkenWidth: 179,
    keurmerkenHeight: 58,
    keurmerkenAlt: "Onderhoud NL en Savantis Erkend Leerbedrijf",
    city: "Haaksbergen",
    region: "Twente, Achterhoek en Salland",
    founded: 1997,
    bus: "/img/bus/bus-alferink.jpg",
    busWidth: 1600,
    busHeight: 1200,
    busAlt:
      "Witte bus van J & J Alferink met opschrift schilder, glas en spuitwerken, Haaksbergen",
  },

  colors: {
    primary: "#0674CB",
    primaryForeground: "#ffffff",
    accent: "#2E9A32",
    background: "#F3F1EB",
    foreground: "#121D1F",
    muted: "#FFFFFF",
    ink: "#121D1F",
    bladgroen: "#2E9A32",
    bladgroenText: "#1F7A24",
    glasblauw: "#0674CB",
    link: "#0460A8",
    papier: "#F3F1EB",
    kitgrijs: "#6B7280",
    kitText: "#5B6370",
    signaalrood: "#C62828",
    amber: "#E5A100",
  },

  seo: {
    title: "J & J Alferink Schilderwerken | Schilder, glas & spuitwerk Haaksbergen",
    description:
      "Schilderwerk, 24-uur glasservice, behang- en spuitwerk door J & J Alferink in Haaksbergen. Bel 06-54244846.",
    lang: "nl",
  },

  contact: {
    owner: "Johan Alferink",
    phoneDisplay,
    phoneHref,
    email,
    emailHref: `mailto:${email}`,
    street: "Huurnerhof 7",
    postalCode: "7481 EK",
    city: "Haaksbergen",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Huurnerhof+7,+7481+EK+Haaksbergen",
    mapsLabel: "Huurnerhof 7 op de kaart",
  },

  diensten: [
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Glaswerk", href: "/glaswerk" },
    { label: "Behangwerk", href: "/behangwerk" },
    { label: "Spuitwerk & dak", href: "/spuitwerk" },
  ],

  nav: [
    { label: "Projecten", href: "/projecten" },
    { label: "Over Johan", href: "/over-johan" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Haaksbergen · sinds 1997",
    title: "Schilder, glas en spuitwerk vanuit Haaksbergen — sinds 1997.",
    lede: "Binnen- en buitenschilderwerk, glas zetten, behangen en spuitwerk. Vanaf Haaksbergen werken wij in Twente, Achterhoek en Salland, en ook daarbuiten.",
    stamp: "SCHILDERWERK · HOOGWERKER",
    image: "/img/schilderwerk/img-1210.jpg",
    imageWidth: 900,
    imageHeight: 675,
    imageAlt: "Hoogwerker bij buitenschilderwerk aan een woning",
  },

  aboutLead:
    "Johan Alferink heeft meer dan 35 jaar ervaring op het gebied van schilder-, glas-, behang- en spuitwerk. In 1997 heeft hij Alferink Schilderwerken opgericht.",

  staff: "Onze medewerkers hebben jarenlange ervaring en zijn gediplomeerd.",

  area: "Vanaf Haaksbergen zijn wij actief in de regio’s Twente, Achterhoek en Salland, maar ook daarbuiten.",

  facts: ["Sinds 1997", "Haaksbergen", "Schilder, glas, behang, spuit", "Twente, Achterhoek, Salland"],

  reasons: [
    {
      title: "24-uur glasservice",
      text: "Moet uw glas per direct worden vervangen? Wij komen snel naar u toe om het glaswerk te repareren.",
    },
    {
      title: "Jarenlange ervaring",
      text: "Johan Alferink heeft meer dan 35 jaar ervaring. In 1997 heeft hij Alferink Schilderwerken opgericht.",
    },
    {
      title: "Productkennis & voorlichting",
      text: "Wij adviseren u graag vrijblijvend over de mogelijkheden, of het nu om verf, behang of beglazing gaat.",
    },
    {
      title: "Zeer flexibel",
      text: "Voor particulieren en zakelijke opdrachtgevers. Wij komen graag langs om de situatie ter plekke te bekijken.",
    },
    {
      title: "Afspraak is afspraak",
      text: "Met opdrachtgevers maken wij duidelijke afspraken. Kwaliteit staat daarbij voorop.",
    },
    {
      title: "Persoonlijk contact",
      text: "Uw eisen en wensen staan bij ons centraal. Bel of mail ons gerust.",
    },
  ],

  voorWie: ["Particulieren", "Bedrijven", "Woningbouwcorporaties", "Gemeenten", "Instellingen"],

  archivePlaces: [
    { label: "Haaksbergen", href: "/projecten#schoorsteen-haaksbergen" },
    { label: "Hengelo", href: "/projecten#hengelo" },
    { label: "Doetinchem", href: "/projecten#doetinchem" },
    { label: "Almelo", href: "/projecten#almelo" },
    { label: "Deventer", href: "/projecten#deventer" },
    { label: "Eibergen", href: "/projecten#eibergen" },
    { label: "Wildervank", href: "/projecten#wildervank" },
    { label: "Musselkanaal", href: "/projecten#musselkanaal" },
    { label: "Ens", href: "/projecten#ens" },
    { label: "Dirkshorn", href: "/projecten#dirkshorn" },
    { label: "Hoofddorp", href: "/projecten#hoofddorp" },
    { label: "Almere", href: "/projecten#almere" },
    { label: "Bolsward", href: "/projecten#bolsward-voor" },
    { label: "Maasvlakte", href: "/projecten#maasvlakte" },
  ],

  faqs: [
    {
      q: "Bieden jullie een 24-uur glasservice?",
      a: "Ja. Moet uw glas per direct worden vervangen? Wij komen snel naar u toe om het glaswerk te repareren. Bel 06-54244846.",
    },
    {
      q: "Welke garantie geldt op isolerende beglazing?",
      a: "Bij ons heeft u tien jaar garantie op isolerende beglazing. De beglazing wordt geplaatst volgens NEN, CE en KOMO normen.",
    },
    {
      q: "Kan ik een onderhoudscontract afsluiten?",
      a: "Ja. Met een onderhoudscontract wordt uw woning of pand periodiek bijgehouden, zodat het goed in de verf staat.",
    },
    {
      q: "Spuiten jullie ook damwanden en dakcoating?",
      a: "Ja. Wij spuiten onder meer deuren, kozijnen, wanden, plafonds, damwandplaten en houten wanden. Daarnaast reinigen wij daken en brengen wij een nieuwe dakcoating aan, waardoor uw dak er weer als nieuw uitziet en de dakpannen een langere levensduur hebben.",
    },
    {
      q: "In welke regio werken jullie?",
      a: "Vanaf Haaksbergen zijn wij actief in de regio’s Twente, Achterhoek en Salland, maar ook daarbuiten. In het fotoarchief staan onder meer Hengelo, Doetinchem, Almelo, Deventer, Bolsward en de Maasvlakte.",
    },
    {
      q: "Welke glassoorten plaatsen jullie?",
      a: "HR++ glas, Triple glas, hardglas, gefigureerd glas, glas in lood, veiligheidsglas, spiegels en hardglazen deuren. Dat doen wij kleinschalig en projectmatig.",
    },
    {
      q: "Voor wie werken jullie?",
      a: "Voor particulieren, bedrijven, woningbouwcorporaties, gemeenten en instellingen. Een instelling kan bijvoorbeeld een school zijn. Voor gemeenten denken wij aan monumentale panden, parkeermeters en gemeente paaltjes.",
    },
  ],

  glassTypes: [
    "HR++ glas",
    "Triple glas",
    "Hardglas",
    "Gefigureerd glas",
    "Glas in lood",
    "Veiligheidsglas",
    "Spiegels",
    "Hardglazen deuren",
  ],

  behangTypes: ["Vinyl", "Vliesbehang", "Glasweefsel", "Normaal behang"],

  offerteDiensten: [
    "Schilderwerk",
    "Behangwerk",
    "Glaswerk",
    "Spuitwerk",
    "Dakreiniging of -coating",
    "24-uur glasservice",
    "Anders",
  ],

  gebouwtypes: [
    { value: "woning", label: "Woning" },
    { value: "zakelijk", label: "Zakelijk" },
    { value: "anders", label: "Anders" },
  ],

  footer: {
    text: "J & J Alferink Schilderwerken · Haaksbergen",
  },
};
