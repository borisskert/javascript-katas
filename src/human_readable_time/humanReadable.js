/**
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
 * @param seconds as non-negative integer, maximum time never exceeds 359999 (99:59:59)
 * @returns {string} the time in a human-readable format (HH:MM:SS)
 */
function humanReadable (seconds) {
  const secondsPart = seconds % SECONDS_PER_MINUTE
  const minutes = Math.floor(seconds / SECONDS_PER_MINUTE)
  const minutesPart = minutes % MINUTES_PER_HOUR
  const hours = Math.floor(minutes / MINUTES_PER_HOUR)

  return `${format(hours)}:${format(minutesPart)}:${format(secondsPart)}`
}

const SECONDS_PER_MINUTE = 60
const MINUTES_PER_HOUR = 60

/**
 * Formats the the specified number by padding with zeros ('0') from the left.
 * The resulting string's length is minimum two.
 * @param number the number to be formatted
 * @returns {string} the formatted string representation of the specified number
 */
const format = (number) => {
  return String(number).padStart(2, '0')
}

module.exports = humanReadable
