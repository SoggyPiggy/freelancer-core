const Base = require('./Base');

module.exports = class Level extends Base {
  constructor(data = {}) {
    super(data);
    this._.define('xp', 0);
  }
};
