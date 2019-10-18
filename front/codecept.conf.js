exports.config = {
  output: './test/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3000/',
      show: true
    },
    GeneralHelper: {
      require: './test/helpers.js',
    },
  },
  include: {
    I: './test/steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './test/features/*.feature',
    steps: [
      './test/step_definitions/generalSteps.js',
      './test/step_definitions/setNumberOfListings.js',
      './test/step_definitions/errorSetNumberOfListings.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './test/*_test.js',
  name: 'tests'
};
