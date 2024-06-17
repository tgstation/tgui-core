/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
function r() {
  let x = (/* @__PURE__ */ new Date()).getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = (x + Math.random() * 16) % 16 | 0;
    return x = Math.floor(x / 16), (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
export {
  r as createUuid
};
