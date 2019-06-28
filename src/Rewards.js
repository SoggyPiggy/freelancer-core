const Base = require('./Base');

module.exports = class Rewards extends Base {
  constructor(data = {}) {
    super(data);
    this._.define('xp');
    this._.define('items');
  }
};
