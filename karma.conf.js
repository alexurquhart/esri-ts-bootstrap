// Configuration file from: https://github.com/tomwayson/esri-karma-tutorial
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'dojo'],

    files: [
      'tests/main.js',
      {pattern: 'src/**/*.+(ts|tsx|js)', included: false},
      {pattern: 'tests/**/*.+(ts|tsx|js)', included: false}
    ],

    reporters: [
      'dots'
    ],

    preprocessors: {
      'src/**/*.+(ts|tsx)': ['typescript'],
      'tests/**/*.+(ts|tsx)': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        "module": "amd",
        "noImplicitAny": true,
        "sourceMap": true,
        "jsx": "react",
        "reactNamespace": "jsxFactory",
        "target": "es5",
        "experimentalDecorators": true,
        "preserveConstEnums": true,
        "suppressImplicitAnyIndexErrors": true,
        "concatenateOutput": false,
        "types": [ "arcgis-js-api", "dojo" ]
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
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
      'karma-typescript-preprocessor'
    ],

    singleRun: false
  });
};