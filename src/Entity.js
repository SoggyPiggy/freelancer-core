class Entity {
  constructor(data) {
    Object.assign(this, {
      id: null,
      name: null,
      level: null,
      examine: null,
      ...data,
    });
  }
}

module.exports = Entity;
