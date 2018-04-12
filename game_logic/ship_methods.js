const checkForShip = (player, coords) => {
  let shipPresent, ship;
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.find(
      actualCoords =>
        actualCoords[0] === coords[0] && actualCoords[1] === coords[1]
    );
    if (shipPresent) {
      return true;
    }
  }

  return false;
};

const damageShip = (ship, coords) => {
  ship.damage.push(coords);
};

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
