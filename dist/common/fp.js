/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const l = (...t) => (e, ...o) => {
  let r = e;
  for (let f of t)
    Array.isArray(f) ? r = l(...f)(r, ...o) : f && (r = f(r, ...o));
  return r;
};
export {
  l as flow
};
