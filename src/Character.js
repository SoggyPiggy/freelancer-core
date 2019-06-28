const Base = require('./Base');

module.exports = class Character extends Base {
  constructor(data = {}) {
    super(data);
    this.id = this._.property(data.id);
    this.name = this._.property(data.name);
    this.description = this._.property(data.description);
    this.quests = this._.property(data.quests, []);
  }
};
