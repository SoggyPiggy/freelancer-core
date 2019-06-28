/* eslint-disable no-param-reassign */
module.exports = function definePropertyOnObjectFromDataSource(
  obj,
  data,
  id,
  {
    value = null,
    Type = null,
    isArray = false,
  },
) {
  const v = typeof data[id] !== 'undefined' ? data[id] : value;
  if (isArray && Type) obj[id] = v.map(item => new Type(item));
  else if (Type) obj[id] = new Type(v);
  else obj[id] = v;
};
