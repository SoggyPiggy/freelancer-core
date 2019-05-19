const Base = require('./Base');

class Requirements extends Base {
  constructor(data = {}) {
    super({
      skillCombat: null,
      skillCrafting: null,
      skillGatherer: null,
      quests: null,
      items: null,
      ...data,
    });
  }
}

module.exports = Requirements;
