const Base = require('./Base');

class Requirements extends Base {
  constructor(data = {}) {
    super();
    this.skillCombat = this._.property(data.skillCombat, null);
    this.skillCrafting = this._.property(data.skillCrafting, null);
    this.skillGatherer = this._.property(data.skillGatherer, null);
    this.quests = this._.property(data.quests, null);
    this.items = this._.property(data.items, null);
  }
}

module.exports = Requirements;
