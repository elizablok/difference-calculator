import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import getAst from './ast.js';
import format from './formatters/index.js';

const getDifference = (filepath1, filepath2, formatType = 'stylish') => {
  const file1 = fs.readFileSync(path.resolve(filepath1), 'utf8');
  const file2 = fs.readFileSync(path.resolve(filepath2), 'utf8');
  const obj1 = parse(file1, path.extname(filepath1).slice(1));
  const obj2 = parse(file2, path.extname(filepath2).slice(1));
  const ast = getAst(obj1, obj2);
  return format(ast, formatType);
};
export default getDifference;
