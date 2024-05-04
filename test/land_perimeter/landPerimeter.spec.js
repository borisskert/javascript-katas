const Test = require('@codewars/test-compat')

const landPerimeter = require('../../src/land_perimeter/landPerimeter')

describe('Testing', function () {
  it('Basic testing', () => {
    // Test.assertEquals(landPerimeter(['OXO']), 'Total land perimeter: 4')
    // Test.assertEquals(landPerimeter(['OXX']), 'Total land perimeter: 6')
    // Test.assertEquals(landPerimeter(['OXX', 'OXX']), 'Total land perimeter: 8')
    // Test.assertEquals(landPerimeter(['OOO', 'OXO', 'OOO']), 'Total land perimeter: 4')
    Test.assertEquals(landPerimeter(['OXOOOX', 'OXOXOO', 'XXOOOX', 'OXXXOO', 'OOXOOX', 'OXOOOO', 'OOXOOX', 'OOXOOO', 'OXOOOO', 'OXOOXX']), 'Total land perimeter: 60')
    Test.assertEquals(landPerimeter(['OXOOO', 'OOXXX', 'OXXOO', 'XOOOO', 'XOOOO', 'XXXOO', 'XOXOO', 'OOOXO', 'OXOOX', 'XOOOO', 'OOOXO']), 'Total land perimeter: 52')
    Test.assertEquals(landPerimeter(['XXXXXOOO', 'OOXOOOOO', 'OOOOOOXO', 'XXXOOOXO', 'OXOXXOOX']), 'Total land perimeter: 40')
    Test.assertEquals(landPerimeter(['XOOOXOO', 'OXOOOOO', 'XOXOXOO', 'OXOXXOO', 'OOOOOXX', 'OOOXOXX', 'XXXXOXO']), 'Total land perimeter: 54')
    Test.assertEquals(landPerimeter(['OOOOXO', 'XOXOOX', 'XXOXOX', 'XOXOOO', 'OOOOOO', 'OOOXOO', 'OOXXOO']), 'Total land perimeter: 40')
  })
})
