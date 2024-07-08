import { useState as r, useEffect as i } from "react";
import { resolveAsset as u } from "../common/assets.js";
let e;
function p(c) {
  const {
    // className,
    // direction = Direction.SOUTH,
    // fallback,
    // frame = 1,
    // icon_state,
    icon: o
    // movement = false,
    // ...rest
  } = c, [a, s] = r(""), [f, n] = r("unloaded");
  return i(() => {
    if (e) {
      n(Object.keys(e).length.toString()), s(e[o]);
      return;
    }
    fetch(u("icon_ref_map.json")).then((t) => (n(t.statusText), t.json())).then((t) => {
      e = t, s(t[o]);
    }).catch((t) => {
      n(t.message);
    });
  }, []), f;
}
export {
  p as DmIcon
};
