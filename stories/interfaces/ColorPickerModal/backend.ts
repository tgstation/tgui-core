import { act } from '@stories/mock-backend';

const data = {
  timeout: 0,
  message: "Select a colour",
  title: "Color Testing UI",
  autofocus: 0,
  default_color: '#ffcc00',
};

export function useBackend<TData>() {
  return {
    act,
    data: data as TData,
  };
}
