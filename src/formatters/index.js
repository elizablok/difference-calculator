import makeStylish from './stylishFormatter.js';
import makePlain from './plainFormatter.js';
import makeJSON from './jsonFormatter.js';

const format = (ast, formatType = 'stylish') => {
  switch (formatType) {
    case 'plain':
      return makePlain(ast);
    case 'json':
      return makeJSON(ast);
    default:
      return makeStylish(ast);
  }
};
export default format;
