const Base = require('./Base');

class Level extends Base {
  constructor(data = {}) {
    super();
    this.xp = this._.property(data.xp, 0);
  }
}

module.exports = Level;
