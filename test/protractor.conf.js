exports.config = {
  specs: [
    'e2e/*_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--disable-extensions']
    }
  },

  baseUrl: 'http://localhost:9001',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
