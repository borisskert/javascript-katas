/**
 * https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
 */
function spinWords(string) {
    return string.split(" ")
        .map(word => {
            if (word.length >= 5) {
                return Array.from(word)
                    .reverse()
                    .join("");
            }

            return word;
        }).join(" ");
}

module.exports = spinWords;
