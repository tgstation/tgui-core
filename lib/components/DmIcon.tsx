import { ReactNode, useEffect, useState } from 'react';

import { resolveAsset } from '../common/assets';
import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';

enum Direction {
  NORTH = 1,
  SOUTH = 2,
  EAST = 4,
  WEST = 8,
  NORTHEAST = NORTH | EAST,
  NORTHWEST = NORTH | WEST,
  SOUTHEAST = SOUTH | EAST,
  SOUTHWEST = SOUTH | WEST,
}

type Props = {
  /** Required: The path of the icon */
  icon: string;
  /** Required: The state of the icon */
  icon_state: string;
} & Partial<{
  /** Facing direction. See direction enum. Default is South */
  direction: Direction;
  /** Fallback icon. */
  fallback: ReactNode;
  /** Frame number. Default is 1 */
  frame: number;
  /** Movement state. Default is false */
  movement: BooleanLike;
}> &
  BoxProps;

let refMap: Record<string, string>;

export function DmIcon(props: Props) {
  const {
    // className,
    // direction = Direction.SOUTH,
    // fallback,
    // frame = 1,
    // icon_state,
    icon,
    // movement = false,
    // ...rest
  } = props;

  const [_, setIconRef] = useState('');
  const [displayText, setDisplayText] = useState('unloaded');

  // const query = `${iconRef}?state=${icon_state}&dir=${direction}&movement=${movement}&frame=${frame}`;

  useEffect(() => {
    if (refMap) {
      setDisplayText(Object.keys(refMap).length.toString());
      setIconRef(refMap[icon]);
      return;
    }

    fetch(resolveAsset('icon_ref_map.json'))
      .then((response) => {
        setDisplayText(response.statusText);
        return response.json();
      })
      .then((data) => {
        refMap = data;
        setIconRef(data[icon]);
      })
      .catch((error) => {
        // Ignore errors
        setDisplayText(error.message);
      });
  }, []);

  // if (!iconRef) return fallback;

  return { displayText };
}
