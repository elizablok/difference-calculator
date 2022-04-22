import yaml from 'js-yaml';

const parse = (file, extention) => (extention === 'json' ? JSON.parse(file) : yaml.load(file));

export default parse;
