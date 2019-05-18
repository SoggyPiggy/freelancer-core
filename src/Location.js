const Entity = require('./Entity');

class Location extends Entity {
  constructor(data = {}) {
    super(data);
    Object.assign(this, {
      x: 0,
      y: 0,
      ...data,
    });
  }

  distance(target) {
    return Location.distance(this, target);
  }

  static distance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }
}

module.exports = Location;
