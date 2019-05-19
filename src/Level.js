const Base = require('./Base');

class Level extends Base {
  constructor(data = {}) {
    super({
      xp: 0,
      ...data,
    });
  }
}

module.exports = Level;
