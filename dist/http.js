const n = (e, t, c = 1e3) => fetch(e, t).catch(() => new Promise((h) => {
  setTimeout(() => {
    n(e, t, c).then(h);
  }, c);
}));
export {
  n as fetchRetry
};
