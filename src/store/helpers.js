/** Converts Wind Direction in Degrees into Wind direction in NSEW 
* @param {number} oldDirection 
*/
const directionChanger = (oldDirection) => {
  if (oldDirection === 0 || oldDirection === 360) {
    return 'N';
  } else if (oldDirection > 0 && oldDirection < 90) {
    return 'NE';
  } else if (oldDirection === 90) {
    return 'E';
  } else if (oldDirection > 90 && oldDirection < 180) {
    return 'SE';
  } else if (oldDirection === 180) {
    return 'S';
  } else if (oldDirection > 180 && oldDirection < 270) {
    return 'SW';
  } else if (oldDirection === 270) {
    return 'W';
  } else if (oldDirection > 270 && oldDirection < 360) {
    return 'NW';
  } else {
    return null;
  }
}

/** Converts Wind Speed from m/s to km/h 
 * @param {number} oldSpeed
*/
const speedChanger = (oldSpeed) => isNaN(oldSpeed) ? null : oldSpeed * 3.6;

export { directionChanger, speedChanger };
