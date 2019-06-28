const Base = require('./Base');

module.exports = class Location extends Base {
  constructor(data = {}) {
    super(data);
    this._.define('id');
    this._.define('name');
    this._.define('description');
    this._.define('x', 0);
    this._.define('y', 0);
    this._.define('isRegion', false);
    this._.define('isTown', false);
    this._.define('town');
    this._.define('observations', [], { isArray: true });
  }

  distance(target) {
    return Location.distance(this, target);
  }

  static distance(a, b) {
    const x = Math.abs(a.x - b.x);
    const y = Math.abs(a.y - b.y);
    return Math.round(Math.max(x, y) + (Math.min(x, y) * 0.4142135623730951));
  }
};
