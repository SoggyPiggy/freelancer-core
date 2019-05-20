const random = require('./utils/random');

class Base {
  constructor() {
    this._ = {};
    this._.random = random;
    this._.property = (dataValue, defaultValue, Type = null) => {
      if (!Type) return typeof dataValue !== 'undefined' ? dataValue : defaultValue;
      return new Type(typeof dataValue !== 'undefined' ? dataValue : defaultValue);
    };
  }
}

module.exports = Base;
