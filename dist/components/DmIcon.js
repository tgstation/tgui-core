import { useState as o, useEffect as c } from "react";
import { resolveAsset as n } from "../common/assets.js";
function i(a) {
  o("");
  const [r, t] = o("unloaded");
  return c(() => {
    fetch(n("icon_ref_map.json")).then((e) => e.text()).then((e) => {
      try {
        const s = JSON.parse(e);
        t("success " + Object.keys(s).length.toString());
      } catch {
        t(e);
      }
    }).catch((e) => {
      t(e.message);
    });
  }, []), r;
}
export {
  i as DmIcon
};
