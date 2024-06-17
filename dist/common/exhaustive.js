const r = (e) => {
  throw new Error(`Unhandled case: ${e}`);
};
export {
  r as exhaustiveCheck
};
