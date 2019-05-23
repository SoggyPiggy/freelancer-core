const Base = require('./Base');

class Location extends Base {
  constructor(data = {}) {
    super();
    this.id = this._.property(data.id);
    this.name = this._.property(data.name);
    this.examine = this._.property(data.examine);
    this.x = this._.property(data.x, 0);
    this.y = this._.property(data.y, 0);
  }

  distance(target) {
    return Location.distance(this, target);
  }

  static distance(a, b) {
    const x = Math.abs(a.x - b.x);
    const y = Math.abs(a.y - b.y);
    return Math.round(Math.max(x, y) + (Math.min(x, y) * 0.4142135623730951));
  }
}

module.exports = Location;
