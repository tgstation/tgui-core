import { act } from '@stories/mock-backend';

const data = {
  stored: 60,
  interval: 5,
  attached: 1,
  history: {
    supply: [
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000,
      200000, 200000, 200000, 200000, 200000, 200000,
    ],
    demand: [
      110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761,
      110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761,
      110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761,
      110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761, 110761,
      111661, 111661, 111661, 110761, 110761, 110761, 111661, 111661, 111661,
      111661, 111661, 111661, 111661, 111661, 111661, 111661, 111661, 111661,
      111661, 111661, 110761, 110761, 110761, 110761,
    ],
  },
  areas: [
    {
      name: 'Bitrunning Den',
      charge: 100,
      load: '2.03 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Mining Office',
      charge: 100,
      load: '680 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Central Primary Hallway',
      charge: 100,
      load: '730 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Brig',
      charge: 100,
      load: '890 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Arrival Shuttle Hallway',
      charge: 100,
      load: '2.38 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Construction Area',
      charge: 100,
      load: '1.648 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Science Division',
      charge: 100,
      load: '3.25 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Bridge',
      charge: 100,
      load: '390 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Atmospherics',
      charge: 100,
      load: '965 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Experimentation Lab',
      charge: 100,
      load: '1.45 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Chemistry',
      charge: 100,
      load: '7.23 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Engineering',
      charge: 100,
      load: '23.19 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Gravity Generator Room',
      charge: 100,
      load: '3.8 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Medical',
      charge: 100,
      load: '4.152 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Primary Tool Storage',
      charge: 100,
      load: '2.15 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Cargo Bay',
      charge: 100,
      load: '3.976 kW',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
    {
      name: 'Departure Lounge',
      charge: 100,
      load: '800 W',
      charging: 2,
      eqp: 3,
      lgt: 3,
      env: 3,
    },
  ],
  supply: '200 kW',
  demand: '110.761 kW',
};

export function useBackend<TData>() {
  return {
    act,
    data: data as TData,
  };
}
