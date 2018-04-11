// require chai so that you can use its .expect() fn in your specs
const expect = require("chai").expect;

// TEST SUITE:
// .describe() is a wrapper for all the specs in the suite
describe("Mocha", () => {
  // Test spec (unit test) is grouped together with .it()
  it("should run our tests using npm", () => {
    // .ok is an assertion method for chai that tests whether a value is truthy
    expect(true).to.be.ok;
  });
});
