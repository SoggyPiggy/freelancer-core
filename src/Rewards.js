const Base = require('./Base');

module.exports = class Rewards extends Base {
  constructor(data = {}) {
    super();
    this.xp = this._.property(data.xp);
    this.items = this._.property(data.items);
  }
};
