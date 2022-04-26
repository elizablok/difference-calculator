import yaml from 'js-yaml';

const parse = (data, dataType) => {
  switch (dataType) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      return yaml.load(data);
  }
};

export default parse;
