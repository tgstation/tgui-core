type Gas = {
  color: string;
  id: string;
  label: string;
  name: string;
  path: string;
};

// UI states, which are mirrored from the BYOND code.
export const UI_INTERACTIVE = 2;
export const UI_UPDATE = 1;
export const UI_DISABLED = 0;
export const UI_CLOSE = -1;

// All game related colors are stored here
export const COLORS = {
  // Damage type colors
  damageType: {
    brute: '#e74c3c',
    burn: '#e67e22',
    oxy: '#3498db',
    toxin: '#2ecc71',
  },
  // Department colors
  department: {
    captain: '#c06616',
    cargo: '#f39c12',
    centcom: '#00c100',
    engineering: '#f1c40f',
    medbay: '#3498db',
    other: '#c38312',
    science: '#9b59b6',
    security: '#e74c3c',
    service: '#7cc46a',
  },
  // reagent / chemistry related colours
  reagent: {
    acidicbuffer: '#fbc314',
    basicbuffer: '#3853a4',
  },
} as const;

// Colors defined in CSS
export const CSS_COLORS = [
  'average',
  'bad',
  'black',
  'blue',
  'brown',
  'good',
  'green',
  'grey',
  'label',
  'olive',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'transparent',
  'violet',
  'white',
  'yellow',
] as const;

export type CssColor = (typeof CSS_COLORS)[number];

/* IF YOU CHANGE THIS KEEP IT IN SYNC WITH CHAT CSS */
export const RADIO_CHANNELS = [
  {
    color: '#8f4a4b',
    freq: 1213,
    name: 'Syndicate',
  },
  {
    color: '#ff4444',
    freq: 1215,
    name: 'Red Team',
  },
  {
    color: '#3434fd',
    freq: 1217,
    name: 'Blue Team',
  },
  {
    color: '#34fd34',
    freq: 1219,
    name: 'Green Team',
  },
  {
    color: '#fdfd34',
    freq: 1221,
    name: 'Yellow Team',
  },
  {
    color: '#2681a5',
    freq: 1337,
    name: 'CentCom',
  },
  {
    color: '#b88646',
    freq: 1347,
    name: 'Supply',
  },
  {
    color: '#6ca729',
    freq: 1349,
    name: 'Service',
  },
  {
    color: '#c68cfa',
    freq: 1351,
    name: 'Science',
  },
  {
    color: '#fcdf03',
    freq: 1353,
    name: 'Command',
  },
  {
    color: '#57b8f0',
    freq: 1355,
    name: 'Medical',
  },
  {
    color: '#f37746',
    freq: 1357,
    name: 'Engineering',
  },
  {
    color: '#dd3535',
    freq: 1359,
    name: 'Security',
  },
  {
    color: '#d65d95',
    freq: 1447,
    name: 'AI Private',
  },
  {
    color: '#1ecc43',
    freq: 1459,
    name: 'Common',
  },
] as const;

const GASES = [
  {
    color: 'blue',
    id: 'o2',
    label: 'O₂',
    name: 'Oxygen',
    path: '/datum/gas/oxygen',
  },
  {
    color: 'yellow',
    id: 'n2',
    label: 'N₂',
    name: 'Nitrogen',
    path: '/datum/gas/nitrogen',
  },
  {
    color: 'grey',
    id: 'co2',
    label: 'CO₂',
    name: 'Carbon Dioxide',
    path: '/datum/gas/carbon_dioxide',
  },
  {
    color: 'pink',
    id: 'plasma',
    label: 'Plasma',
    name: 'Plasma',
    path: '/datum/gas/plasma',
  },
  {
    color: 'lightsteelblue',
    id: 'water_vapor',
    label: 'H₂O',
    name: 'Water Vapor',
    path: '/datum/gas/water_vapor',
  },
  {
    color: 'teal',
    id: 'hypernoblium',
    label: 'Hyper-nob',
    name: 'Hyper-noblium',
    path: '/datum/gas/hypernoblium',
  },
  {
    color: 'bisque',
    id: 'n2o',
    label: 'N₂O',
    name: 'Nitrous Oxide',
    path: '/datum/gas/nitrous_oxide',
  },
  {
    color: 'brown',
    id: 'no2',
    label: 'Nitrium',
    name: 'Nitrium',
    path: '/datum/gas/nitrium',
  },
  {
    color: 'limegreen',
    id: 'tritium',
    label: 'Tritium',
    name: 'Tritium',
    path: '/datum/gas/tritium',
  },
  {
    color: 'mediumpurple',
    id: 'bz',
    label: 'BZ',
    name: 'BZ',
    path: '/datum/gas/bz',
  },
  {
    color: 'mediumslateblue',
    id: 'pluoxium',
    label: 'Pluoxium',
    name: 'Pluoxium',
    path: '/datum/gas/pluoxium',
  },
  {
    color: 'olive',
    id: 'miasma',
    label: 'Miasma',
    name: 'Miasma',
    path: '/datum/gas/miasma',
  },
  {
    color: 'paleturquoise',
    id: 'freon',
    label: 'Freon',
    name: 'Freon',
    path: '/datum/gas/freon',
  },
  {
    color: 'white',
    id: 'hydrogen',
    label: 'H₂',
    name: 'Hydrogen',
    path: '/datum/gas/hydrogen',
  },
  {
    color: 'salmon',
    id: 'healium',
    label: 'Healium',
    name: 'Healium',
    path: '/datum/gas/healium',
  },
  {
    color: 'greenyellow',
    id: 'proto_nitrate',
    label: 'Proto-Nitrate',
    name: 'Proto Nitrate',
    path: '/datum/gas/proto_nitrate',
  },
  {
    color: 'darkgreen',
    id: 'zauker',
    label: 'Zauker',
    name: 'Zauker',
    path: '/datum/gas/zauker',
  },
  {
    color: 'purple',
    id: 'halon',
    label: 'Halon',
    name: 'Halon',
    path: '/datum/gas/halon',
  },
  {
    color: 'aliceblue',
    id: 'helium',
    label: 'He',
    name: 'Helium',
    path: '/datum/gas/helium',
  },
  {
    color: 'maroon',
    id: 'antinoblium',
    label: 'Anti-Noblium',
    name: 'Antinoblium',
    path: '/datum/gas/antinoblium',
  },
  {
    color: 'brown',
    id: 'nitrium',
    label: 'Nitrium',
    name: 'Nitrium',
    path: '/datum/gas/nitrium',
  },
] as const;

// Returns gas label based on gasId
export function getGasLabel(gasId: string, fallbackValue?: string): string {
  if (!gasId) return fallbackValue || 'None';

  const gasSearchString = gasId.toLowerCase();

  for (let idx = 0; idx < GASES.length; idx++) {
    if (GASES[idx].id === gasSearchString) {
      return GASES[idx].label;
    }
  }

  return fallbackValue || 'None';
}

// Returns gas color based on gasId
export function getGasColor(gasId: string): string {
  if (!gasId) return 'black';

  const gasSearchString = gasId.toLowerCase();

  for (let idx = 0; idx < GASES.length; idx++) {
    if (GASES[idx].id === gasSearchString) {
      return GASES[idx].color;
    }
  }

  return 'black';
}

// Returns gas object based on gasId
export function getGasFromId(gasId: string): Gas | undefined {
  if (!gasId) return;

  const gasSearchString = gasId.toLowerCase();

  for (let idx = 0; idx < GASES.length; idx++) {
    if (GASES[idx].id === gasSearchString) {
      return GASES[idx];
    }
  }
}

// Returns gas object based on gasPath
export function getGasFromPath(gasPath: string): Gas | undefined {
  if (!gasPath) return;

  for (let idx = 0; idx < GASES.length; idx++) {
    if (GASES[idx].path === gasPath) {
      return GASES[idx];
    }
  }
}

export const COMPONENT_COLORS = {
  spectrum: [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'gold',
  ],
  states: [
    'default',
    'good',
    'average',
    'bad',
    'black',
    'white',
    'transparent',
  ],
} as const;
