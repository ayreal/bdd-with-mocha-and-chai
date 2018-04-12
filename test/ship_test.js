const expect = require("chai").expect;

// think about simple functions first
// this will check to see if a ship is at the coordinate input
describe("checkForShip", () => {
  // require the function from its directory
  const checkForShip = require("../game_logic/ship_methods").checkForShip;
  let player;

  // before only takes a callback that fires before every spec in the suite
  // to set up the environmental state
  // this has been created through refactoring
  // using the most complex version of player needed to test all specs

  before(() => {
    player = {
      ships: [
        { locations: [[0, 0], [0, 1]] },
        { locations: [[3, 5], [4, 5]] },
        { locations: [[6, 1], [6, 2], [6, 3]] }
      ]
    };
  });

  it("should correctly report no ship at a given player's coordinate", () => {
    // initially, make an expectation about what parameters your fn will take
    // and what type they are
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should correctly report a ship located at a given player's coordinate", () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  it("should handle ships located at more than one coordinate", () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

  it("should handle multiple ships", () => {
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [3, 5])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [4, 5])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [6, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});

describe("damageShip", () => {
  const damageShip = require("../game_logic/ship_methods").damageShip;
  ship = {
    locations: [[0, 0]],
    damage: []
  };

  damageShip(ship, [0, 0]);

  it("should register damage on a given ship at a given location", () => {
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("fire", () => {
  const fire = require("../game_logic/ship_methods").fire;
  let targetPlayer;

  // beforeEach runs beforeEach spec instead of just once at the start of the suite
  // targetPlayer will be overwritten before each test
  // makes app state predictible between specs, even when the fn being tested has side-effects
  beforeEach(() => {
    targetPlayer = {
      ships: [{ locations: [[0, 0]], damage: [] }]
    };
  });

  it("should register damage on a given ship at a given location", () => {
    fire(targetPlayer, [0, 0]);
    expect(targetPlayer.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should NOT register damage if there is no ship at given coordinates", () => {
    fire(targetPlayer, [0, 1]);

    expect(targetPlayer.ships[0].damage).to.be.empty;
  });
});
