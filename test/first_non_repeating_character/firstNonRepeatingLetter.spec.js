const Test = require('@codewars/test-compat')

const firstNonRepeatingLetter = require('../../src/first_non_repeating_character/firstNonRepeatingLetter')

describe('Simple Tests', function () {
  it('should handle simple tests', function () {
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a')
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't')
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e')
    Test.assertEquals(firstNonRepeatingLetter(''), '')
    Test.assertEquals(firstNonRepeatingLetter('sTreSS'), 'T')
  })
})
