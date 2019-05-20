const { Random, nodeCrypto } = require('random-js');

const random = new Random(nodeCrypto);

module.exports = random;
