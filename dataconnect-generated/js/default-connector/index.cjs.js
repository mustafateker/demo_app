const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'demo_app',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

