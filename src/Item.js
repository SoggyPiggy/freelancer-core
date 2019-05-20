const Base = require('./Base');

class Item extends Base {
  constructor(data = {}) {
    super();
    this.id = this._.property(data.id, null);
    this.name = this._.property(data.name, null);
    this.examine = this._.property(data.examine, null);
    this.value = this._.property(data.value, null);
    this.slot = this._.property(data.slot, null);
  }
}

module.exports = Item;