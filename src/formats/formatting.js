import makePretty from './prettyFormatting.js';

const format = (ramification, formatType) => {
  if (formatType === 'pretty') {
    return makePretty(ramification);
  }
  return {};
};
export default format;
