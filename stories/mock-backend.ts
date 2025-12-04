import { useState } from 'react';

/** Mocked act function. Just logs! This sends to the 'server' */
export function act(str: string, obj?: Record<string, any>) {
  console.log(str, obj);
}

/** Mocked shared state. Sets it locally. Does nothing with the id. */
export function useSharedState<TState>(_id: string, initial: TState) {
  const [someState, setSomeState] = useState<TState>(initial);

  return [someState, setSomeState] as const;
}
