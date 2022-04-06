import _ from 'lodash';

const ramify = (obj1, obj2) => {
  const entries = Object.entries(obj1).concat(Object.entries(obj2));
  const uniqueEntries = _.uniqWith(entries, _.isEqual);
  const sortedEntries = _.sortBy(uniqueEntries, ([key]) => key);
  return sortedEntries.map(([key, value]) => {
    if (_.get(obj1, key) !== _.get(obj2, key)) {
      return _.get(obj1, key) === value ? [`  - ${key}: ${value}`] : [`  + ${key}: ${value}`];
    }
    return [`  ${key}: ${value}`];
  });
};
export default ramify;
