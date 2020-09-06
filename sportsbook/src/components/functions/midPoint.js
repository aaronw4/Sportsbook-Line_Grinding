export function MidPoint(away, home) {
    let dec1;
    let dec2;
    let ratio;

    let team1 = away
    if (-100 < team1 && team1 < 0) {
        team1 = 200 + team1;
    }
    else if (100 > team1 && team1 > 0) {
        team1 = -200 + team1;
    }

    let team2 = home
    if (-100 < team2 && team2 < 0) {
        team2 = 200 + team2;
    }
    else if (100 > team2 && team2 > 0) {
        team2 = -200 + team2;
    }

    if (team1 < 0) {
        dec1 = (100 / (-1 * team1)) + 1;
    } else {
        dec1 = (team1 / 100) + 1;
    };

    if (team2 < 0) {
        dec2 = (100 / (-1 * team2)) + 1;
    } else {
        dec2 = (team2 / 100) + 1;
    };

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