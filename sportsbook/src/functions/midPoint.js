import { americanToDecimal } from "./convertOdds";

export function MidPoint(away, home) {
    let ratio;

    let dec1 = americanToDecimal(away)
    let dec2 = americanToDecimal(home)

    let recDec1 = 1 / dec1;
    let recDec2 = 1 / dec2;

    if (recDec1 > recDec2) {
        ratio = recDec1 / (recDec1 + recDec2);
    } else {
        ratio = recDec2 / (recDec1 + recDec2);
    }
    
    let recRatio = (1 / ratio) - 1;
    let mp = (1 / recRatio) * 100;

    return mp    
}