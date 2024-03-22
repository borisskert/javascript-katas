/**
 * https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
 */
function cakes (recipe, available) {
  const amounts = Object.keys(recipe)
    .map(ingredientAmount)

  return min(amounts)

  function ingredientAmount (ingredient) {
    const availableIngredient = available[ingredient]
    const ingredientInRecipe = recipe[ingredient]

    return ~~(availableIngredient / ingredientInRecipe)
  }
}

function min (array) {
  return Math.min.apply(null, array)
}

module.exports = cakes
