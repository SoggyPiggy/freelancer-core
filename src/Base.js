class Base {
  constructor(options = {}) {
    this._ = {};
    this._.keys = Object.keys(options);
    Object.assign(this, options);
  }
}

module.exports = Base;
