const rimraf = require('rimraf');

const { directory } = require('./config');

module.exports = async function() {
  await global.__SERVER_GLOBAL__.close();
  await global.__BROWSER_GLOBAL__.close();

  rimraf.sync(directory);
};
