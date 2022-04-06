import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ramify from './ramifying.js';
import format from './formats/formatting.js';

const parse = (file, extention) => (extention === 'json' ? JSON.parse(file) : yaml.load(file));

const getDifference = (filepath1, filepath2, formatType) => {
  const file1 = fs.readFileSync(path.resolve(filepath1), 'utf8');
  const file2 = fs.readFileSync(path.resolve(filepath2), 'utf8');
  const obj1 = parse(file1, path.extname(filepath1));
  const obj2 = parse(file2, path.extname(filepath2));
  const ramification = ramify(obj1, obj2);
  return format(ramification, formatType);
};
export default getDifference;
