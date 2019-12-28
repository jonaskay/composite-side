const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const puppeteer = require('puppeteer');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');

const config = require('../../webpack.config');
const { directory, endpoint } = require('./config');

module.exports = async function() {
  const server = new WebpackDevServer(webpack(config));
  server.listen(8080, 'localhost');
  global.__SERVER_GLOBAL__ = server;

  const browser = await puppeteer.launch();
  global.__BROWSER_GLOBAL__ = browser;

  mkdirp.sync(directory);
  fs.writeFileSync(path.join(directory, endpoint), browser.wsEndpoint());
};
