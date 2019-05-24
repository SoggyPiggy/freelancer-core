const Base = require('./Base');

module.exports = class Level extends Base {
  constructor(data = {}) {
    super();
    this.xp = this._.property(data.xp, 0);
  }
};
