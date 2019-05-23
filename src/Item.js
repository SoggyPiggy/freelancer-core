const Base = require('./Base');
const Requirements = require('./Requirements');

class Item extends Base {
  constructor(data = {}) {
    super();
    // Internal Values
    this.id = this._.property(data.id);

    // Basic Information
    this.name = this._.property(data.name);
    this.examine = this._.property(data.examine);
    this.value = this._.property(data.value);

    // Armor / Stat Boosts
    this.slot = this._.property(data.slot);
    this.armor = this._.property(data.armor);
    this.damage = this._.property(data.damage);
    this.speed = this._.property(data.speed);

    // Other
    this.recipes = this._.property(data.recipes, [], Requirements, true);
    this.equip = this._.property(data.equip, {}, Requirements);
  }
}

module.exports = Item;
