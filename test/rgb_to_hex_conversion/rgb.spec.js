const chai = require('chai')
const expect = chai.expect

const Test = {
    assertEquals(actual, expected) {
        expect(actual).to.equal(expected)
    }
}

const rgb = require('../../src/rgb_to_hex_conversion/rgb')

describe("Tests", () => {
    it("Basic Tests", () => {
        Test.assertEquals(rgb(0, 0, 0), '000000')
        Test.assertEquals(rgb(255, 0, 0), 'FF0000')
        Test.assertEquals(rgb(0, 0, -20), '000000')
        Test.assertEquals(rgb(300,255,255), 'FFFFFF')
        Test.assertEquals(rgb(173,255,47), 'ADFF2F')
    });
});
