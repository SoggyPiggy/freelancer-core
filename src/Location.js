const Base = require('./Base');

class Location extends Base {
  constructor(data = {}) {
    super();
    this.id = this._.property(data.id, null);
    this.name = this._.property(data.name, null);
    this.examine = this._.property(data.examine, null);
    this.x = this._.property(data.x, 0);
    this.y = this._.property(data.y, 0);
  }

  distance(target) {
    return Location.distance(this, target);
  }

  static distance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }
}

module.exports = Location;
