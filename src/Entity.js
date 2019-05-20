const Base = require('./Base');

class Entity extends Base {
  constructor(data) {
    super({
      id: null,
      name: null,
      examine: null,
      ...data,
    });
  }

  toString() {
    return this.name;
  }
}

module.exports = Entity;
