/**
 * https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
 */
function stockList (listOfArt, listOfCat) {
  if (listOfArt.length < 1) {
    return ''
  }

  const stock = listOfArt
    .map(stockItem => /([A-Z])[A-Z]+ ([0-9]+)/.exec(stockItem))
    .reduce((dict, [_, category, quantity]) => ({
      ...dict,
      [category]: Number.parseInt(quantity) + (dict[category] || 0)
    }), {})

  function format (category) {
    const quantity = stock[category] || 0
    return `(${category} : ${quantity})`
  }

  return listOfCat
    .map(format)
    .join(' - ')
}

module.exports = stockList
