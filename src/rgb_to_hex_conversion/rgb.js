const hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
]

function toHex(value) {
    if(value > 254) {
        return 'FF'
    }

    if(value < 1) {
        return '00'
    }

    const remainder = value % 16;
    const quotient = (value - remainder) / 16

    return `${hex[quotient]}${hex[remainder]}`
}

function rgb(r, g, b) {
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

module.exports = rgb;
