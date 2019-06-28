const random = require('./utils/random');
const proper = require('./utils/proper');

module.exports = class Base {
  constructor(data) {
    this._ = {};
    this._.random = random;
    this._.define = (...values) => proper(this, data, ...values);
  }
};
