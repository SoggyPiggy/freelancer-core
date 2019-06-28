const Base = require('./Base');

module.exports = class Requirements extends Base {
  constructor(data = {}) {
    super(data);
    this._.define('level', 0);
    this._.define('quests', []);
    this._.define('items', []);
  }
};
