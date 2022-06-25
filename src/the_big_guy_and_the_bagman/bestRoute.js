/**
 * https://www.codewars.com/kata/6297d639de3969003e13e149/train/javascript
 */
function bestRoute (cities, costs) {
  const travel = Travel.from(cities, costs)

  class Route {
    constructor (cities, costs) {
      this.cities = cities
      this.costs = costs
    }

    accept (city) {
      return this.cities.find(visited => visited === city) === undefined
    }

    append (city, costs) {
      return new Route([...this.cities, city], this.costs + costs)
    }

    last () {
      return this.cities[this.cities.length - 1]
    }

    visit (city) {
      const costs = travel.costs(this.last(), city)
      return new Route([...this.cities, city], this.costs + costs)
    }

    visitAll (cities) {
      const allowedCities = cities.filter(city => this.accept(city))
      if (allowedCities.length < 1) {
        return [this]
      }

      const visited = allowedCities
        .flatMap(city => this.append(city, travel.costs(this.last(), city)))

      return visited.flatMap(r => r.visitAll(cities))
    }

    tail () {
      return this.cities.slice(1)
    }

    static startFrom (city) {
      return new Route([city], 0)
    }

    static empty () {
      return new Route([], 0)
    }
  }

  const hometown = 'Notgnihsaw'

  return Route.startFrom(hometown).visitAll(cities).flatMap(route => route.visit(hometown)).sort(compareRoutes)[0].tail()
}

const compareRoutes = (a, b) => {
  return a.costs - b.costs
}

class Travel {
  constructor (routes) {
    this.routes = routes
  }

  costs (from, to) {
    return this.routes.find(({ city }) => city === from).routes[to]
  }

  static from (cities, costs) {
    const routes = zip([cities, costs]).map(([city, costs]) => {
      return {
        city: city,
        routes: zip([cities, costs])
          .filter(([_, costs]) => costs > 0)
          .map(([target, costs]) => ({ [target]: costs }))
          .reduce((obj, x) => ({ ...obj, ...x }))
      }
    })

    return new Travel(routes)
  }
}

function zip (arrays) {
  const others = arrays.slice(1)
  return arrays[0].map((x, index) => [x, ...others.map(array => array[index])])
}

module.exports = bestRoute
