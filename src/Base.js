class Base {
  constructor(data = {}) {
    this._ = {};
    this._.keys = Object.keys(data);
    Object.assign(this, data);
  }

  compress() {
    const data = {};
    this._.keys.forEach((key) => {
      const item = this[key];
      if (item instanceof Base) data[key] = item.compress();
      else data[key] = item;
    });
    return data;
  }

  toJSON(...args) {
    return JSON.stringify(this.compress(), ...args);
  }

  toString() {
    return JSON.stringify(this.compress, null, 2);
  }
}

module.exports = Base;
