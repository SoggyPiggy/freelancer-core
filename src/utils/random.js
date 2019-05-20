const { Random, browserCrypto } = require('random-js');

const random = new Random(browserCrypto);

module.exports = random;
