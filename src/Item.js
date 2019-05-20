const Entity = require('./Entity');

class Item extends Entity {
  constructor(data = {}) {
    super({
      value: null,
      slot: null,
      ...data,
    });
  }
}

module.exports = Item;
