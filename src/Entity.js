const Base = require('./Base');

class Entity extends Base {
  constructor(data) {
    super({
      id: null,
      name: null,
      level: null,
      examine: null,
      ...data,
    });
  }
}

module.exports = Entity;
