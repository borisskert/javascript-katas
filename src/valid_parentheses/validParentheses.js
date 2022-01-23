/**
 * https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 */
function validParentheses(parens, count) {
    if (count === undefined) {
        return validParentheses(Array.from(parens), 0);
    }

    if (parens.length === 0 && count === 0) {
        return true;
    }

    if(parens.length === 0 || count < 0) {
        return false;
    }

    const [head, ...tail] = parens;

    if (head === '(') {
        return validParentheses(tail, count + 1)
    }

    return validParentheses(tail, count - 1);
}

module.exports = validParentheses;
