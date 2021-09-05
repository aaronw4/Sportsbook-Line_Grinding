export function americanToDecimal(american) {
    let decimal 

    if (american < 0) {
        decimal = (100 / (-1 * american)) + 1;
    } else {
        decimal = (american / 100) + 1;
    }

    return decimal
}

export function decimalToAmerican(decimal) {
    let american

    if (decimal < 2) {
        american = -100 / (decimal - 1)
    } else {
        american = 100 * (decimal - 1)
    }

    return american
}