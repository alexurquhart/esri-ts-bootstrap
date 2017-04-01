// Configuration file from: https://github.com/tomwayson/esri-karma-tutorial
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'dojo', 'karma-typescript'],

    karmaTypescriptConfig: {
      tsconfig: './tsconfig.json'
    },

    files: [
      'tests/main.js',
      {pattern: 'src/**/*.+(ts|tsx)', included: false},
      {pattern: 'tests/**/*.+(ts|tsx|js)', included: false}
    ],

    reporters: [
      'dots',
      'coverage',
      'karma-typescript'
    ],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    preprocessors: {
      'src/**/*.+(ts|tsx)': ['coverage', 'karma-typescript']
    },

    port: 9876,

    // proxy for cross domain requests
    // proxies:  {
    //   '/arcgis/': 'http://imagery.arcgisonline.com/arcgis/'
    // },

    // cli runner port
    runnerPort: 9100,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome'
    ],

    plugins: [
      'karma-dojo',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-typescript'
    ],

    singleRun: false
  });
};