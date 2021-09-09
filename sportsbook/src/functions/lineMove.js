import { americanToDecimal, decimalToAmerican } from '../functions/convertOdds';

export function newLine(lineOdds, improve, pushFreq) {
    let decimal = americanToDecimal(lineOdds)
    let percentage = 1 / decimal
    let adjPercent

    if (improve === true) {
        adjPercent = percentage + pushFreq
    } else (
        adjPercent = percentage - pushFreq
    )

    let newLine = decimalToAmerican(1 / adjPercent)

    return newLine
}