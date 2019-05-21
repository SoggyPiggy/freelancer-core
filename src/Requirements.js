const Base = require('./Base');

class Requirements extends Base {
  constructor(data = {}) {
    super();
    this.level = this._.property(data.level, 0);
    this.quests = this._.property(data.quests, []);
    this.items = this._.property(data.items, []);
  }
}

module.exports = Requirements;
