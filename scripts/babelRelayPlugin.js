var getBabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../ReindexSchema.json');

module.exports = getBabelRelayPlugin(schema.data);
