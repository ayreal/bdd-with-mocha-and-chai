const checkForShip = (player, coords) => {
  let shipPresent, ship;
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.find(
      actualCoords =>
        actualCoords[0] === coords[0] && actualCoords[1] === coords[1]
    );
    if (shipPresent) {
      return ship;
    }
  }

  return false;
};

const damageShip = (ship, coords) => {
  ship.damage.push(coords);
};

const fire = (targetPlayer, coords) => {
  let ship = checkForShip(targetPlayer, coords);
  ship ? damageShip(ship, coords) : false;
};

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
