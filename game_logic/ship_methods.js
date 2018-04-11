const checkForShip = (player, coords) => {
  let shipPresent;
  player.ships.forEach(ship => {
    shipPresent = ship.locations.find(
      actualCoords =>
        actualCoords[0] === coords[0] && actualCoords[1] === coords[1]
    );
  });
  if (!shipPresent) {
    return false;
  }
};

module.exports.checkForShip = checkForShip;
