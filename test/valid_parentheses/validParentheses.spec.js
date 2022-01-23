const {assert} = require('chai');

const validParentheses = require('../../src/valid_parentheses/validParentheses.js')

describe("Tests", () => {
    it(`values: "("`, () => assert.strictEqual(validParentheses("("), false));
    it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false));
    it(`values: ""`, () => assert.strictEqual(validParentheses(""), true));
    it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true));
    it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false));
});
