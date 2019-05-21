const Base = require('./Base');
const Requirements = require('./Requirements');

class Item extends Base {
  constructor(data = {}) {
    super();
    // Internal Values
    this.id = this._.property(data.id, null);

    // Basic Information
    this.name = this._.property(data.name, null);
    this.examine = this._.property(data.examine, null);
    this.value = this._.property(data.value, 0);

    // Armor / Stat Boosts
    this.slot = this._.property(data.slot, null);
    this.armor = this._.property(data.armor, null);
    this.damage = this._.property(data.damage, null);
    this.speed = this._.property(data.speed, null);

    // Other
    this.recipes = this._.property(data.recipes, [], Requirements, true);
    this.equip = this._.property(data.equip, {}, Requirements);
  }
}

module.exports = Item;
