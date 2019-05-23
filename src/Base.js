const random = require('./utils/random');

class Base {
  constructor() {
    this._ = {};
    this._.random = random;
    this._.property = (data, defaultValue = null, Type = null, isArray = false) => {
      const value = typeof data !== 'undefined' ? data : defaultValue;
      if (!Type) return value;
      if (!isArray) return new Type(value);
      return value.map(item => new Type(item));
    };
  }
}

module.exports = Base;
