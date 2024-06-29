function h(e, t, c = 1e3) {
  return fetch(e, t).catch(() => new Promise((n) => {
    setTimeout(() => {
      h(e, t, c).then(n);
    }, c);
  }));
}
export {
  h as fetchRetry
};
