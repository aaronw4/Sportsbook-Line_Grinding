import { americanToDecimal, decimalToAmerican } from '../functions/convertOdds';

export function newLine(lineOdds, oppLineOdds, pushFreq) {
    let decimal = americanToDecimal(lineOdds)
    let percentage = 1 / decimal
    let adjPercent

    if (Number(lineOdds) > Number(oppLineOdds)) {
        adjPercent = percentage + pushFreq
    } else (
        adjPercent = percentage - pushFreq
    )

    let newLine = decimalToAmerican(1 / adjPercent)

    return newLine
}