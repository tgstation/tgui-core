import { act } from '@stories/mock-backend';

const data = {
  amount: 5,
  energy: 368900,
  maxEnergy: 400000,
  displayedUnits: 3689,
  displayedMaxUnits: 4000,
  showpH: 1,
  chemicals: [
    {
      title: 'Aluminium',
      id: 'Aluminium',
      pH: 7,
      color: '#A8A8A8',
      pHCol: 'green',
    }
  ],
  recipes: [],
  recordingRecipe: null,
  recipeReagents: [],
  beaker: {
    maxVolume: 100,
    transferAmounts: [5, 10, 15, 20, 25, 30, 50, 100],
    pH: 10,
    currentVolume: 35,
    contents: [
      { name: 'Space Drugs', volume: 20 },
      { name: 'Carpotoxin', volume: 10 },
      { name: 'Radium', volume: 5 },
    ],
  },
};

export function useBackend<TData>() {
  return {
    act,
    data: data as TData,
  };
}
