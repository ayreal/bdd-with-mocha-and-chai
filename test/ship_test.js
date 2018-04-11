const expect = require("chai").expect;

// think about simple functions first
// this will check to see if a ship is at the coordinate input
describe("checkForShip", () => {
  // require the function from its directory
  const checkForShip = require("../game_logic/ship_methods").checkForShip;
  it("should correctly report no ship at a given player's coordinate", () => {
    // initially, make an expectation about what parameters your fn will take
    // and what type they are
    player = {
      ships: [{ locations: [0, 0] }]
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
