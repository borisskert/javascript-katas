/**
 * https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript
 */
function convertQueryToMap (query) {
  return query.split('&')
    .map(parameterToObject(decodeURIComponent))
    .reduce(deepMerge)
}

function parameterToObject (mappingFn = (a) => a) {
  const regex = /(?<key>[A-Za-z.\d]+)=(?<value>[A-Za-z\d%]+)/

  return (parameter) => {
    function createObject (keys, value) {
      const [head, ...tail] = keys

      if (tail.length === 0) {
        return {
          [head]: mappingFn(value)
        }
      }

      return {
        [head]: { ...createObject(tail, value) }
      }
    }

    const match = regex.exec(parameter)

    if (match) {
      const keys = match.groups.key.split('.')
      const value = match.groups.value

      return createObject(keys, value)
    }

    return {}
  }
}

function deepMerge (a, b) {
  function isObject (obj) {
    return obj === Object(obj)
  }

  return Object.entries(b).map(([key, valueB]) => {
    const valueA = a[key]

    if (valueA && isObject(valueA) && isObject(valueB)) {
      return {
        [key]: deepMerge(valueA, valueB)
      }
    }

    return { [key]: valueB }
  }).reduce((obj, other) => ({ ...obj, ...other }), a)
}

module.exports = { convertQueryToMap, merge: deepMerge }
