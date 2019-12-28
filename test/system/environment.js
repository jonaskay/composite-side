const NodeEnvironment = require('jest-environment-node');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const { directory, endpoint } = require('./config');

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();

    const wsEndpoint = fs.readFileSync(path.join(directory, endpoint), 'utf8');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
