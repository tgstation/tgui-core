/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const t = 2, n = 1, i = 0, m = -1, c = {
  // Department colors
  department: {
    captain: "#c06616",
    security: "#e74c3c",
    medbay: "#3498db",
    science: "#9b59b6",
    engineering: "#f1c40f",
    cargo: "#f39c12",
    service: "#7cc46a",
    centcom: "#00c100",
    other: "#c38312"
  },
  // Damage type colors
  damageType: {
    oxy: "#3498db",
    toxin: "#2ecc71",
    burn: "#e67e22",
    brute: "#e74c3c"
  },
  // reagent / chemistry related colours
  reagent: {
    acidicbuffer: "#fbc314",
    basicbuffer: "#3853a4"
  }
}, u = [
  "average",
  "bad",
  "black",
  "blue",
  "brown",
  "good",
  "green",
  "grey",
  "label",
  "olive",
  "orange",
  "pink",
  "purple",
  "red",
  "teal",
  "transparent",
  "violet",
  "white",
  "yellow"
], d = [
  {
    name: "Syndicate",
    freq: 1213,
    color: "#8f4a4b"
  },
  {
    name: "Red Team",
    freq: 1215,
    color: "#ff4444"
  },
  {
    name: "Blue Team",
    freq: 1217,
    color: "#3434fd"
  },
  {
    name: "Green Team",
    freq: 1219,
    color: "#34fd34"
  },
  {
    name: "Yellow Team",
    freq: 1221,
    color: "#fdfd34"
  },
  {
    name: "CentCom",
    freq: 1337,
    color: "#2681a5"
  },
  {
    name: "Supply",
    freq: 1347,
    color: "#b88646"
  },
  {
    name: "Service",
    freq: 1349,
    color: "#6ca729"
  },
  {
    name: "Science",
    freq: 1351,
    color: "#c68cfa"
  },
  {
    name: "Command",
    freq: 1353,
    color: "#fcdf03"
  },
  {
    name: "Medical",
    freq: 1355,
    color: "#57b8f0"
  },
  {
    name: "Engineering",
    freq: 1357,
    color: "#f37746"
  },
  {
    name: "Security",
    freq: 1359,
    color: "#dd3535"
  },
  {
    name: "AI Private",
    freq: 1447,
    color: "#d65d95"
  },
  {
    name: "Common",
    freq: 1459,
    color: "#1ecc43"
  }
], e = [
  {
    id: "o2",
    path: "/datum/gas/oxygen",
    name: "Oxygen",
    label: "O₂",
    color: "blue"
  },
  {
    id: "n2",
    path: "/datum/gas/nitrogen",
    name: "Nitrogen",
    label: "N₂",
    color: "yellow"
  },
  {
    id: "co2",
    path: "/datum/gas/carbon_dioxide",
    name: "Carbon Dioxide",
    label: "CO₂",
    color: "grey"
  },
  {
    id: "plasma",
    path: "/datum/gas/plasma",
    name: "Plasma",
    label: "Plasma",
    color: "pink"
  },
  {
    id: "water_vapor",
    path: "/datum/gas/water_vapor",
    name: "Water Vapor",
    label: "H₂O",
    color: "lightsteelblue"
  },
  {
    id: "hypernoblium",
    path: "/datum/gas/hypernoblium",
    name: "Hyper-noblium",
    label: "Hyper-nob",
    color: "teal"
  },
  {
    id: "n2o",
    path: "/datum/gas/nitrous_oxide",
    name: "Nitrous Oxide",
    label: "N₂O",
    color: "bisque"
  },
  {
    id: "no2",
    path: "/datum/gas/nitrium",
    name: "Nitrium",
    label: "Nitrium",
    color: "brown"
  },
  {
    id: "tritium",
    path: "/datum/gas/tritium",
    name: "Tritium",
    label: "Tritium",
    color: "limegreen"
  },
  {
    id: "bz",
    path: "/datum/gas/bz",
    name: "BZ",
    label: "BZ",
    color: "mediumpurple"
  },
  {
    id: "pluoxium",
    path: "/datum/gas/pluoxium",
    name: "Pluoxium",
    label: "Pluoxium",
    color: "mediumslateblue"
  },
  {
    id: "miasma",
    path: "/datum/gas/miasma",
    name: "Miasma",
    label: "Miasma",
    color: "olive"
  },
  {
    id: "freon",
    path: "/datum/gas/freon",
    name: "Freon",
    label: "Freon",
    color: "paleturquoise"
  },
  {
    id: "hydrogen",
    path: "/datum/gas/hydrogen",
    name: "Hydrogen",
    label: "H₂",
    color: "white"
  },
  {
    id: "healium",
    path: "/datum/gas/healium",
    name: "Healium",
    label: "Healium",
    color: "salmon"
  },
  {
    id: "proto_nitrate",
    path: "/datum/gas/proto_nitrate",
    name: "Proto Nitrate",
    label: "Proto-Nitrate",
    color: "greenyellow"
  },
  {
    id: "zauker",
    path: "/datum/gas/zauker",
    name: "Zauker",
    label: "Zauker",
    color: "darkgreen"
  },
  {
    id: "halon",
    path: "/datum/gas/halon",
    name: "Halon",
    label: "Halon",
    color: "purple"
  },
  {
    id: "helium",
    path: "/datum/gas/helium",
    name: "Helium",
    label: "He",
    color: "aliceblue"
  },
  {
    id: "antinoblium",
    path: "/datum/gas/antinoblium",
    name: "Antinoblium",
    label: "Anti-Noblium",
    color: "maroon"
  },
  {
    id: "nitrium",
    path: "/datum/gas/nitrium",
    name: "Nitrium",
    label: "Nitrium",
    color: "brown"
  }
], b = (a, o) => {
  if (!a)
    return o || "None";
  const r = a.toLowerCase();
  for (let l = 0; l < e.length; l++)
    if (e[l].id === r)
      return e[l].label;
  return o || "None";
}, s = (a) => {
  if (!a)
    return "black";
  const o = a.toLowerCase();
  for (let r = 0; r < e.length; r++)
    if (e[r].id === o)
      return e[r].color;
  return "black";
}, g = (a) => {
  if (!a)
    return;
  const o = a.toLowerCase();
  for (let r = 0; r < e.length; r++)
    if (e[r].id === o)
      return e[r];
}, p = (a) => {
  if (a) {
    for (let o = 0; o < e.length; o++)
      if (e[o].path === a)
        return e[o];
  }
};
export {
  c as COLORS,
  u as CSS_COLORS,
  d as RADIO_CHANNELS,
  m as UI_CLOSE,
  i as UI_DISABLED,
  t as UI_INTERACTIVE,
  n as UI_UPDATE,
  s as getGasColor,
  g as getGasFromId,
  p as getGasFromPath,
  b as getGasLabel
};
