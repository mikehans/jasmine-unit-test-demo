var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  "spec_dir": "./src",
  "spec_files": [
    "**/*.test.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": true
});

jasmine.execute();