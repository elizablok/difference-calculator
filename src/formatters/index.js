import makeStylish from './stylishFormatter.js';
import makePlain from './plainFormatter.js';

const format = (ast, formatType = 'stylish') => {
  switch (formatType) {
    case 'plain':
      return makePlain(ast);
    case 'json':
      return JSON.stringify(ast);
    default:
      return makeStylish(ast);
  }
};
export default format;
