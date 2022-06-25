/**
 * https://www.codewars.com/kata/6297d639de3969003e13e149/train/javascript
 */
function bestRoute (cities, costs) {
  const prices = mapTravelPrices(cities, costs)

  const hometown = 'Notgnihsaw'

  return basedOn(prices).startFrom(hometown)
    .visitAll(cities)
    .flatMap(route => route.visit(hometown))
    .sort(compareRoutes)[0]
    .tail()
}

const mapTravelPrices = (cities, costs) => {
  return zip([cities, costs]).map(([city, costs]) => {
    return {
      [city]: zip([cities, costs])
        .filter(([_, costs]) => costs > 0)
        .map(([target, costs]) => ({ [target]: costs }))
        .reduce(toObject)
    }
  }).reduce(toObject)
}

function basedOn (travelPrices) {
  class Route {
    constructor (cities, costs) {
      this.cities = cities
      this.costs = costs
    }

    accept (city) {
      return this.cities.find(visited => visited === city) === undefined
    }

    last () {
      return this.cities[this.cities.length - 1]
    }

    visit (city) {
      const costs = travelPrices[this.last()][city]
      return new Route([...this.cities, city], this.costs + costs)
    }

    visitAll (cities) {
      const allowedCities = cities.filter(city => this.accept(city))

      if (allowedCities.length < 1) {
        return [this]
      }

      const visited = allowedCities.flatMap(city => this.visit(city))

      return visited.flatMap(route => route.visitAll(cities))
    }

    tail () {
      return this.cities.slice(1)
    }

    static startFrom (city) {
      return new Route([city], 0)
    }
  }

  return {
    startFrom: (city) => {
      return Route.startFrom(city)
    }
  }
}

const compareRoutes = (a, b) => {
  return a.costs - b.costs
}

function zip (arrays) {
  const others = arrays.slice(1)
  return arrays[0].map((x, index) => [x, ...others.map(array => array[index])])
}

const toObject = (obj, x) => ({ ...obj, ...x })

module.exports = bestRoute
