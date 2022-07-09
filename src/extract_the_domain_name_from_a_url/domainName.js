/**
 * https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 */
function domainName (url) {
  const regex = /^([a-z]+:\/\/)?([a-z]+\.)?(?<domain>[a-z\d-]{3,})(\.[.a-z]+)(\/.*)?$/
  return regex.exec(url).groups.domain
}

module.exports = domainName
