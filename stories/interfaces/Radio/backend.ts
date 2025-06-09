import { act } from '../../mock-backend';

const data = {
  broadcasting: 0,
  listening: 1,
  frequency: 1459,
  minFrequency: 1441,
  maxFrequency: 1489,
  freqlock: 0,
  channels: [],
  command: 0,
  useCommand: 0,
  subspace: 0,
  subspaceSwitchable: 0,
  headset: 0,
  radio_noises: 100,
};

export function useBackend<TData>() {
  return {
    act,
    data: data as TData,
  };
}
