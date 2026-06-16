/**
 * Calculate the user's age on a given planet.
 */
export function calculatePlanetAge(earthAge: number, orbitalPeriod: number): number {
  if (earthAge <= 0) return 0;
  return parseFloat((earthAge / orbitalPeriod).toFixed(2));
}

/**
 * Calculate the user's weight on a given planet.
 */
export function calculatePlanetWeight(earthWeight: number, gravityFactor: number): number {
  if (earthWeight <= 0) return 0;
  return parseFloat((earthWeight * gravityFactor).toFixed(2));
}

/**
 * Convert pounds to kilograms
 */
export function lbsToKg(lbs: number): number {
  return parseFloat((lbs * 0.453592).toFixed(2));
}

/**
 * Convert kilograms to pounds
 */
export function kgToLbs(kg: number): number {
  return parseFloat((kg * 2.20462).toFixed(2));
}
