const Base = require('./Base');
const Requirements = require('./Requirements');

module.exports = class Item extends Base {
  constructor(data = {}) {
    super(data);
    // Internal Values
    this._.define('id');

    // Basic Information
    this._.define('name');
    this._.define('level');
    this._.define('description');
    this._.define('value');

    // Armor / Stat Boosts
    this._.define('slot');
    this._.define('armor');
    this._.define('damage');
    this._.define('speed');

    // Other
    this._.define('recipes', [], { Type: Requirements, isArray: true });
    this._.define('equip', [], { Type: Requirements });
  }
};
