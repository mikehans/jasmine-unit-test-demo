# jasmine-unit-test-demo - About this repo

In this repo, I am experimenting with:
* composing a module from different files where the order of script loading is irrelevant
* creating Jasmine spies using 3 methods 
  * spyOn
  * Jasmine.createSpy
  * Jasmine.createSpyObj
* segregating all DOM interaction from the domain logic
  * the DOM implementation (real or fake) is passed in as an argument
* setting up and running Firefox in headless mode through Karma

The module that gets composed consists of several sections:
* config (domConfig.js)
* domain logic (domfree.js)
* DOM logic (domInteraction.js)
* a convenience API (convenience.js)
* Jasmine tests (domfree.test.js)

package.json really needs a clean up as not everything in it is used or required.

domfree.test.js needs a clean up as well. There are two distinct sets of tests (1 calling mh.domfree.getUrl and the other calling mh.api.getUrl).

## To set up and run
```npm install```

Then execute ```npm test```
