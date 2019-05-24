const Base = require('./Base');

module.exports = class Character extends Base {
  constructor(data = {}) {
    super(data);
    this.id = this._.property(data.id);
    this.name = this._.property(data.name);
    this.examine = this._.property(data.examine);
    this.quests = this._.property(data.quests, []);
  }
};
