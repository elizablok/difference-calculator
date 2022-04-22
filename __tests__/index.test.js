import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import getDifference from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const testedElements = [
  ['file1.json', 'file2.json', 'stylish', 'stylishExpected.txt'],
  ['file1.json', 'file2.yaml', '', 'stylishExpected.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'stylishExpected.txt'],
  ['file1.json', 'file2.json', 'plain', 'plainExpected.txt'],
  ['file1.yaml', 'file2.yaml', 'plain', 'plainExpected.txt'],
  ['file1.json', 'file2.json', 'json', 'jsonExpected.txt'],
  ['file1.yaml', 'file2.yaml', 'json', 'jsonExpected.txt'],
];

test.each(testedElements)('Comparing stylish, plain, json formats for json and yaml extensions', (filename1, filename2, format, expected) => {
  const filepath1 = getFixturePath(filename1);
  const filepath2 = getFixturePath(filename2);
  const result = getDifference(filepath1, filepath2, format);
  expect(result).toEqual(readFile(expected));
});
