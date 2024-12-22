import { useEffect as i } from "react";
import { listenForKeyEvents as t } from "../common/hotkeys.js";
function r(n) {
  return i(() => {
    const o = t((e) => {
      n.onKey && n.onKey(e), e.isDown() && n.onKeyDown && n.onKeyDown(e), e.isUp() && n.onKeyUp && n.onKeyUp(e);
    });
    return () => {
      o();
    };
  }, []), null;
}
export {
  r as KeyListener
};
