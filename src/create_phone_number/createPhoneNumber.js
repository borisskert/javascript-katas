/**
 * https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 */
function createPhoneNumber (numbers) {
  const areaCode = `${numbers[0]}${numbers[1]}${numbers[2]}`
  const centralOfficeCode = `${numbers[3]}${numbers[4]}${numbers[5]}`
  const lineNumber = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`
}

module.exports = createPhoneNumber
