import { act } from '@stories/mock-backend';

const data = {
  locked: 0,
  failTime: 0,
  isOperating: 1,
  externalPower: 2,
  powerCellStatus: 100,
  chargeMode: 1,
  chargingStatus: 2,
  chargingPowerDisplay: '0 W',
  totalLoad: '2.15 kW',
  coverLocked: 1,
  remoteAccess: 0,
  siliconUser: 0,
  malfStatus: 0,
  emergencyLights: 1,
  nightshiftLights: 0,
  disable_nightshift_toggle: 0,
  powerChannels: [
    {
      title: 'Equipment',
      powerLoad: '760 W',
      status: 3,
      topicParams: {
        auto: { eqp: 3 },
        on: { eqp: 2 },
        off: { eqp: 1 },
      },
    },
    {
      title: 'Lighting',
      powerLoad: '1.28 kW',
      status: 3,
      topicParams: {
        auto: { lgt: 3 },
        on: { lgt: 2 },
        off: { lgt: 1 },
      },
    },
    {
      title: 'Environment',
      powerLoad: '110 W',
      status: 3,
      topicParams: {
        auto: { env: 3 },
        on: { env: 2 },
        off: { env: 1 },
      },
    },
  ],
};

export function useBackend() {
  return {
    act,
    data,
  };
}
