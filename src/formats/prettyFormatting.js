const makePretty = (ramification) => {
  const str = ramification.join('\n');
  return `{\n${str}\n}`;
};
export default makePretty;
