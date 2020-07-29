export function MidPoint(gamePeriod, pinn) {    
    let oddsArray;

    if (gamePeriod === 'fullGame') {
        oddsArray = pinn.map(line => ({
            id: line.period_full_game.moneyline.line_id,
            moneylineAway: line.period_full_game.moneyline.moneyline_away, 
            moneylineHome: line.period_full_game.moneyline.moneyline_home,
            spreadAway:  line.period_full_game.spread.point_spread_away_money, 
            spreadHome: line.period_full_game.spread.point_spread_home_money,
            totalOver: line.period_full_game.total.total_over_money,
            totalUnder: line.period_full_game.total.total_under_money
        }));
        console.log(oddsArray);
    } else {
        oddsArray = pinn.map(line => ({
            id: line.period_full_game.moneyline.line_id,
            moneylineAway: line.period_first_half.moneyline.moneyline_away, 
            moneylineHome: line.period_first_half.moneyline.moneyline_home,
            spreadAway:  line.period_first_half.spread.point_spread_away_money, 
            spreadHome: line.period_first_half.spread.point_spread_home_money,
            totalOver: line.period_first_half.total.total_over_money,
            totalUnder: line.period_first_half.total.total_under_money
        }));
        console.log(oddsArray);
    }        

    let midPointArray = oddsArray.map(line => ({
        id: line.id,
        moneylineMP: midPoint(line.moneylineAway, line.moneylineHome),
        spreadMP: midPoint(line.spreadAway, line.spreadHome),
        totalMP: midPoint(line.totalOver, line.totalUnder),
        away: favorite(line.moneylineAway),
        awaySpread: favorite(line.spreadAway),
        favorite: overUnderFav(line.totalOver, line.totalUnder)
    }));

    return(midPointArray);
    
    function midPoint(team1, team2) {            
        let dec1;
        let dec2;
        let ratio;

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

    function favorite(odds) {
        if (odds < 0) {
            return('Favorite')
        } else {
            return('Dog')
        }
    }

    function overUnderFav(over, under) {
        if (over < under) {
            return('Over')
        } else {
            return('Under')
        }
    }
}