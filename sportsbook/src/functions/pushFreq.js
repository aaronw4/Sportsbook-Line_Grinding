// import { americanToDecimal } from "./convertOdds";
function americanToDecimal(american) {
    let decimal 

    if (american < 0) {
        decimal = (100 / (-1 * american)) + 1;
    } else {
        decimal = (american / 100) + 1;
    }

    return decimal
}

export function pushFreq(belowFavOdds, belowDogOdds, aboveFavOdds, aboveDogOdds) {
    // below means 1/2 point below spread number and above means 1/2 point above spread number
    let belowFavPercent = 1 / americanToDecimal(belowFavOdds)
    let belowDogPercent = 1 / americanToDecimal(belowDogOdds)
    let aboveFavPercent = 1 / americanToDecimal(aboveFavOdds)
    let aboveDogPercent = 1 / americanToDecimal(aboveDogOdds)


    let adjBelowFavPer = belowFavPercent / (belowFavPercent + belowDogPercent)
    let adjAboveFavPer = aboveFavPercent / (aboveFavPercent + aboveDogPercent)

    return Math.abs(adjBelowFavPer - adjAboveFavPer)
}

console.log(pushFreq(-102, -116, -146, 119))