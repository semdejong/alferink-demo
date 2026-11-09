export type JobPhoto = {
  id: string;
  src: string;
  w: number;
  h: number;
  alt: string;
  stamp: string;
};

export type JobGroup = {
  id: string;
  title: string;
  note?: string;
  photos: JobPhoto[];
};

function shot(
  folder: "schilderwerk" | "glaswerk" | "behangwerk" | "spuitwerk",
  file: string,
  w: number,
  h: number,
  stamp: string,
  alt: string,
): JobPhoto {
  return {
    id: file.replace(/\.(jpe?g|png)$/i, ""),
    src: `/img/${folder}/${file}`,
    w,
    h,
    stamp,
    alt,
  };
}

function spuit(file: string, stamp: string, alt: string, w = 1600, h = 1200): JobPhoto {
  return shot("spuitwerk", file, w, h, stamp, alt);
}

function batch(files: string[], stamp: string, alt: string): JobPhoto[] {
  return files.map((file) => spuit(file, stamp, alt));
}

export const schilderAlgemeen: JobPhoto[] = [
  shot(
    "schilderwerk",
    "img-1210.jpg",
    900,
    675,
    "SCHILDERWERK · HOOGWERKER",
    "Hoogwerker bij buitenschilderwerk aan een woning",
  ),
  shot(
    "schilderwerk",
    "img-0253.jpg",
    900,
    675,
    "SCHILDERWERK · HOOGWERKER",
    "Hoogwerker bij schilderwerk aan de gevel van een pand",
  ),
  shot(
    "schilderwerk",
    "img-0318.jpg",
    480,
    800,
    "SCHILDERWERK",
    "Schilderwerk aan een windmolen, met de bus van J & J Alferink op de voorgrond",
  ),
  shot(
    "schilderwerk",
    "dscn-1323.jpg",
    1175,
    881,
    "SCHILDERWERK",
    "Woning met de bus van J & J Alferink op de oprit",
  ),
  shot(
    "schilderwerk",
    "dscn-1312.jpg",
    850,
    1133,
    "SCHILDERWERK · BINNEN",
    "Binnenschilderwerk rond een kozijn, vensterbank afgeplakt",
  ),
  shot(
    "schilderwerk",
    "dscn-1314.jpg",
    900,
    675,
    "SCHILDERWERK · BINNEN",
    "Gesausde binnenwanden, haard afgeplakt tijdens schilderwerk",
  ),
  shot(
    "schilderwerk",
    "dscn-1322.jpg",
    950,
    677,
    "SCHILDERWERK",
    "Schilderen van een wit paneel met de kwast",
  ),
];

export const hengelo: JobGroup = {
  id: "hengelo",
  title: "Saus en schilderwerk · Hengelo",
  photos: [
    spuit(
      "bolsward-wa0070-1.jpg",
      "SCHILDERWERK · SAUS EN SCHILDERWERK · HENGELO",
      "Saus- en schilderwerk in Hengelo",
    ),
    spuit(
      "bolsward-wa0069-1.jpg",
      "SCHILDERWERK · SAUS EN SCHILDERWERK · HENGELO",
      "Saus- en schilderwerk in Hengelo",
    ),
    spuit(
      "bolsward-wa0062.jpg",
      "SCHILDERWERK · SAUS EN SCHILDERWERK · HENGELO",
      "Saus- en schilderwerk in Hengelo",
    ),
  ],
};

export const doetinchem: JobGroup = {
  id: "doetinchem",
  title: "Karwei · Doetinchem",
  photos: [
    spuit("bolsward-wa0074.jpg", "SCHILDERWERK · DOETINCHEM", "Schilderwerk in Doetinchem"),
  ],
};

export const glasPhoto: JobPhoto = shot(
  "glaswerk",
  "dscn-1329.jpg",
  1175,
  791,
  "GLAS · GLAS IN LOOD",
  "Glas in lood in een wit kozijn",
);

export const behangPhotos: JobPhoto[] = [
  shot(
    "behangwerk",
    "dscn-1289.jpg",
    1200,
    900,
    "BEHANGWERK",
    "Behangwerk: gestreepte wand met witte lijst",
  ),
  shot(
    "behangwerk",
    "dscn-1298.jpg",
    1200,
    900,
    "BEHANGWERK",
    "Behangwerk: donkerblauwe wand met lichte spikkels",
  ),
];

export const damwandPhoto: JobPhoto = spuit(
  "img-0901.jpg",
  "SPUITWERK",
  "Spuitwerk aan de gevel van een bedrijfspand",
  900,
  675,
);

const wildervank = "SPUITWERK · WILDERVANK · GRONINGEN";
const schoorsteen = "SPUITWERK · SCHOORSTEEN REINIGEN · HAAKSBERGEN";
const deventer = "SPUITWERK · STROOMHUISJES · DEVENTER";
const almere = "SPUITWERK · PIZZERIA · ALMERE";
const maasvlakte = "SPUITWERK · CONTAINERS · MAASVLAKTE";
const eibergen = "SPUITWERK · MULDER HONDENVOER · EIBERGEN";
const keuken = "SPUITWERK · KEUKEN · HAAKSBERGEN";

export const spuit2017: JobGroup[] = [
  {
    id: "wildervank",
    title: "Wildervank Groningen",
    photos: batch(
      ["img-4085-1.jpg", "img-4084.jpg", "img-4085.jpg"],
      wildervank,
      "Spuitwerk in Wildervank, Groningen",
    ),
  },
  {
    id: "schoorsteen-haaksbergen",
    title: "Schoorsteen reinigen Haaksbergen",
    photos: [spuit("img-4273.jpg", schoorsteen, "Schoorsteen reinigen in Haaksbergen")],
  },
  {
    id: "almelo",
    title: "Almelo",
    photos: batch(
      [
        "img-4779.jpg",
        "img-4777.jpg",
        "img-4776.jpg",
        "img-4770.jpg",
        "img-4766.jpg",
        "img-4768.jpg",
        "img-4769.jpg",
        "img-4706.jpg",
      ],
      "SPUITWERK · ALMELO",
      "Spuitwerk in Almelo",
    ),
  },
  {
    id: "hoofddorp",
    title: "Hoofddorp",
    photos: batch(
      ["img-4538.jpg", "img-4728.jpg", "img-4730.jpg", "img-4729.jpg"],
      "SPUITWERK · HOOFDDORP",
      "Spuitwerk in Hoofddorp",
    ),
  },
  {
    id: "dirkshorn",
    title: "Dirkshorn",
    photos: batch(["img-4231.jpg", "img-4239.jpg"], "SPUITWERK · DIRKSHORN", "Spuitwerk in Dirkshorn"),
  },
  {
    id: "deventer",
    title: "Stroomhuisjes Deventer",
    photos: batch(["img-4174.jpg", "img-4175.jpg"], deventer, "Spuitwerk aan stroomhuisjes in Deventer"),
  },
  {
    id: "almere",
    title: "Pizzeria Almere",
    photos: batch(["img-4113.jpg", "img-4114.jpg"], almere, "Spuitwerk aan een pizzeria in Almere"),
  },
  {
    id: "musselkanaal",
    title: "Musselkanaal",
    photos: batch(
      ["img-4091.jpg", "img-4092.jpg", "img-4101.jpg", "img-4102.jpg", "img-4105.jpg", "img-4104.jpg"],
      "SPUITWERK · MUSSELKANAAL",
      "Spuitwerk in Musselkanaal",
    ),
  },
  {
    id: "ens",
    title: "Ens",
    photos: batch(
      ["img-4082.jpg", "img-4081.jpg", "img-4080.jpg", "img-4078.jpg", "img-4079.jpg"],
      "SPUITWERK · ENS",
      "Spuitwerk in Ens",
    ),
  },
  {
    id: "maasvlakte",
    title: "Containers Maasvlakte",
    photos: batch(["img-4058.jpg", "img-4059.jpg"], maasvlakte, "Spuitwerk aan containers op de Maasvlakte"),
  },
  {
    id: "eibergen",
    title: "Mulder hondenvoer Eibergen",
    photos: batch(
      ["img-4019.jpg", "img-4048.jpg", "img-4049.jpg", "img-4018.jpg", "img-4051.jpg", "img-4052.jpg"],
      eibergen,
      "Spuitwerk bij Mulder hondenvoer in Eibergen",
    ),
  },
  {
    id: "keuken-haaksbergen",
    title: "Keuken Haaksbergen",
    photos: batch(["img-2094.jpg", "img-2095.jpg"], keuken, "Spuitwerk in een keuken in Haaksbergen"),
  },
];

export const bolswardVoor: JobGroup = {
  id: "bolsward-voor",
  title: "Bolsward · voor de tijd",
  note: "Een klus in Bolsward, voor de tijd.",
  photos: batch(
    ["bolsward-wa0042.jpg", "bolsward-wa0041.jpg", "bolsward-wa0059.jpg", "bolsward-wa0047.jpg"],
    "SPUITWERK · BOLSWARD · VOOR DE TIJD",
    "Spuitwerk in Bolsward, voor de tijd",
  ),
};

export const bolswardNa: JobGroup = {
  id: "bolsward-na",
  title: "Bolsward · na de tijd",
  note: "Na de tijd.",
  photos: [
    spuit("bolsward-wa0038.jpg", "SPUITWERK · BOLSWARD · NA DE TIJD", "Spuitwerk in Bolsward, na de tijd"),
    spuit(
      "bolsward-wa0039.jpg",
      "SPUITWERK · BOLSWARD · NA DE TIJD",
      "Spuitwerk in Bolsward, na de tijd",
      1600,
      900,
    ),
    spuit("bolsward-wa0036.jpg", "SPUITWERK · BOLSWARD · NA DE TIJD", "Spuitwerk in Bolsward, na de tijd"),
  ],
};

export const garagebox: JobGroup = {
  id: "garagebox",
  title: "Garageboxdeuren spuiten",
  note: "Garageboxdeuren die wij aan het spuiten zijn.",
  photos: [
    spuit(
      "bolsward-wa0061.jpg",
      "SPUITWERK · GARAGEBOXDEUREN",
      "Garageboxdeuren tijdens het spuiten",
    ),
  ],
};

export const sauswerk: JobGroup = {
  id: "sauswerk",
  title: "Sauswerk",
  note: "Sauswerk aanbrengen door middel van spuiten.",
  photos: batch(
    ["bolsward-wa0065.jpg", "bolsward-wa0066.jpg"],
    "SPUITWERK · SAUSWERK",
    "Sauswerk aangebracht met de spuit",
  ),
};

export const spuit2016: JobGroup[] = [bolswardVoor, bolswardNa, garagebox, sauswerk];

export const schilderGroups: JobGroup[] = [
  { id: "schilderwerk", title: "Binnen en buiten", photos: schilderAlgemeen },
  hengelo,
  doetinchem,
];

export const glasBehangGroups: JobGroup[] = [
  { id: "glas", title: "Glas", photos: [glasPhoto] },
  { id: "behang", title: "Behang", photos: behangPhotos },
];

export const spuitGroups: JobGroup[] = [
  { id: "spuitwerk-gevel", title: "Spuitwerk", photos: [damwandPhoto] },
  ...spuit2017,
  ...spuit2016,
];

export const projectGroups: { id: string; title: string; groups: JobGroup[] }[] = [
  { id: "groep-schilderwerk", title: "Schilderwerk", groups: schilderGroups },
  { id: "groep-glas-behang", title: "Glas en behang", groups: glasBehangGroups },
  { id: "groep-spuitwerk", title: "Spuitwerk en dak", groups: spuitGroups },
];

const featuredIds = [
  "img-1210",
  "dscn-1323",
  "dscn-1329",
  "dscn-1289",
  "img-4273",
  "img-4174",
  "img-4113",
  "img-4058",
];

const allPhotos: JobPhoto[] = projectGroups.flatMap((block) => block.groups.flatMap((group) => group.photos));

export const featuredPhotos: JobPhoto[] = featuredIds.map((id) => {
  const photo = allPhotos.find((item) => item.id === id);
  if (!photo) throw new Error(`Onbekende foto: ${id}`);
  return photo;
});
