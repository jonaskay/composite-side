const path = require('path');
const os = require('os');

module.exports = {
  directory: path.join(os.tmpdir(), 'jest_puppeteer_global_setup'),
  endpoint: 'wsEndpoint',
};
