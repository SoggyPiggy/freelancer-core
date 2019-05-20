const Base = require('./Base');

class Actor extends Base {
  constructor(data = {}) {
    super(data);
    this.id = this._.property(data.id, null);
    this.name = this._.property(data.name, null);
    this.examine = this._.property(data.examine, null);
  }
}

module.exports = Actor;
