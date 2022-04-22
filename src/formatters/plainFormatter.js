import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const makePlain = (node, ancestry = '') => {
  const arr = node.flatMap((child) => {
    const newAncestry = ancestry === ''
      ? _.join([ancestry, child.key], '')
      : _.join([ancestry, child.key], '.');
    if (!child.children) {
      switch (child.type) {
        case 'removed':
          return `Property '${newAncestry}' was removed`;
        case 'added':
          return `Property '${newAncestry}' was added with value: ${getValue(child.value)}`;
        case 'changed':
          return `Property '${newAncestry}' was updated. From ${getValue(child.value1)} to ${getValue(child.value2)}`;
        default:
          return [];
      }
    }
    return makePlain(child.children, newAncestry);
  });
  return arr.join('\n');
};

export default makePlain;
