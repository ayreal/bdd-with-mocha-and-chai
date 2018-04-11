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
      ships: [{ locations: [[0, 0]] }]
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report a ship located at a given player's coordinate", () => {
    player = {
      ships: [{ locations: [[0, 0]] }]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it("should handle ships located at more than one coordinate", () => {
    player = {
      ships: [{ locations: [[0, 0], [0, 1]] }]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should handle multiple ships", () => {
    player = {
      ships: [{ locations: [[0, 0], [0, 1]] }, { locations: [[3, 5], [4, 5]] }]
    };
    expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [3, 5])).to.be.true;
    expect(checkForShip(player, [4, 5])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
