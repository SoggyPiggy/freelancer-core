const Base = require('./Base');

module.exports = class Character extends Base {
  constructor(data = {}) {
    super(data);
    this._.define('id');
    this._.define('name');
    this._.define('description');
    this._.define('quests', []);
  }
};
