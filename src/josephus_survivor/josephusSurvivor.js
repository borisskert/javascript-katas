/**
 * https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript
 * @param n amount of people
 * @param k every k to eliminate
 * @returns {number} who is going to survive last
 */
function josephusSurvivor (n, k) {
  if (n === 1) {
    return 1
  }

  const x = josephusSurvivor(n - 1, k) + k - 1
  return x % n + 1
}

module.exports = josephusSurvivor
