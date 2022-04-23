import yaml from 'js-yaml';

const parse = (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
      return yaml.load(content);
    case '.yaml':
      return yaml.load(content);
    default:
      return yaml.load(content);
  }
};

export default parse;
