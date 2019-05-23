const Base = require('./Base');

class Rewards extends Base {
  constructor(data = {}) {
    super();
    this.xp = this._.property(data.xp);
    this.items = this._.property(data.items);
  }
}

module.exports = Rewards;
