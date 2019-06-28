/* eslint-disable no-param-reassign */
module.exports = function definePropertyOnObjectFromDataSource(
  obj,
  data,
  id,
  initial = null,
  {
    Type = null,
    isArray = false,
  },
) {
  const value = typeof data[id] !== 'undefined' ? data[id] : initial;
  if (isArray && Type) obj[id] = value.map(item => new Type(item));
  else if (Type) obj[id] = new Type(value);
  else obj[id] = value;
};
