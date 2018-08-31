module.exports = function(config) {
    config.set({
      // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',
    files: [
      '*.js'
    ],
    singleRun: false,

    colors: true,
    concurrency: 1,

    });
  };