import _ from 'lodash';

const getSpace = (depth) => ' '.repeat(4 * depth - 2);

const getValue = (value, depth) => {
  if (_.isObject(value)) {
    const result = Object.entries(value).map(([innerKey, innerValue]) => `${getSpace(depth)}  ${innerKey}: ${getValue(innerValue, depth + 1)}`).join('\n');
    return `{\n${result}\n${getSpace(depth - 1)}  }`;
  }
  return value;
};

const getString = (sign, key, value, depth) => `${getSpace(depth)}${sign} ${key}: ${getValue(value, depth + 1)}`;

const makeStylish = (ast, depth = 1) => {
  const result = ast.map((child) => {
    if (child.type === 'object') {
      return `${getSpace(depth)}  ${child.key}: {\n${makeStylish(child.children, depth + 1).join('\n')}\n${getSpace(depth)}  }`;
    }
    if (child.type === 'removed') {
      return getString('-', child.key, child.value, depth);
    }
    if (child.type === 'added') {
      return getString('+', child.key, child.value, depth);
    }
    if (child.type === 'changed') {
      return `${getString('-', child.key, child.value1, depth)}\n${getString('+', child.key, child.value2, depth)}`;
    }
    return getString(' ', child.key, child.value, depth);
  });
  if (depth === 1) {
    return `{\n${result.join('\n')}\n}`;
  }
  return result;
};

export default makeStylish;
