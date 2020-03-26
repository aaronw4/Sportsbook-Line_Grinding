import React, {useState, useEffect} from 'react';

const NcaaFB = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);
    const [winRate, setWinRate] = useState();
    const [oddsFav, setOddsFav] = useState();
    const [oddsDog, setOddsDog] = useState();
    const [edgeFav, setEdgeFav] = useState(0);
    const [edgeDog, setEdgeDog] = useState(0);
    const [betFactorFav, setBetFactorFav] = useState(0);
    const [betFactorDog, setBetFactorDog] = useState(0);

    let games = props.games;

    useEffect(() => {
        const pinnacle = games.map(game => 
            game.line_periods[3]    
        );
        const pinny = pinnacle.filter(line => 
            line != null    
        );
        setPinn(pinny)
    },[games])

    useEffect(() => {
        let oddsArray = pinn.map(line => ({
            moneylineAway: line.period_full_game.moneyline.moneyline_away, 
            moneylineHome: line.period_full_game.moneyline.moneyline_home,
            spreadAway:  line.period_full_game.spread.point_spread_away_money, 
            spreadHome: line.period_full_game.spread.point_spread_home_money,
            totalOver: line.period_full_game.total.total_over_money,
            totalUnder: line.period_full_game.total.total_under_money
        }));
        console.log(oddsArray);

        let midPointArray = oddsArray.map(line => ({
            moneylineMP: midPoint(line.moneylineAway, line.moneylineHome),
            spreadMP: midPoint(line.spreadAway, line.spreadHome),
            totalMP: midPoint(line.totalOver, line.totalUnder)
        }));

        setMidPoint(midPointArray);
    
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
    },[pinn]);

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };

    const handleWinRate = e => {
        setWinRate(e.target.value);
    };

    const handleOddsFav = e => {
        setOddsFav(e.target.value)
    };

    const handleOddsDog = e => {
        setOddsDog(e.target.value)
    };

    const handleSubmitFav = e => {
        e.preventDefault();

        let decOdds;

        if (oddsFav < 0) {
            decOdds = (100 / (-1 * oddsFav)) + 1;
        } else {
            decOdds = (oddsFav / 100) + 1;
        };

        let edge = (winRate / 100 * decOdds - 1) * 100;
        setEdgeFav(edge);

        let betFactor = (((decOdds - 1) * winRate/100) - (1 - winRate/100)) / (decOdds - 1);
        setBetFactorFav(betFactor);
    };
    
    const handleSubmitDog = e => {
        e.preventDefault();

        let decOdds;

        if (oddsDog < 0) {
            decOdds = (100 / (-1 * oddsDog)) + 1;
        } else {
            decOdds = (oddsDog / 100) + 1;
        };

        let edge = (-1 * (winRate / 100 -1) * decOdds - 1) * 100;
        setEdgeDog(edge);

        let betFactor = (((decOdds - 1) * (1 - winRate/100)) - winRate/100) * 100 / (decOdds - 1);
        setBetFactorDog(betFactor);
    }

    return (
        <div className='lines'>
            <div>
                {games.map(game => (
                    <div className='matchup'>
                        <h5>Teams</h5>
                        <p>{game.teams_normalized[0].name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                    </div>
                ))}
            </div>
            <div>
                {pinn.map(line => (
                    <div className='bets'>
                        <div>
                            <h5>Moneyline</h5>
                            <p>Away: {line.period_full_game.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_full_game.moneyline.moneyline_home}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <p>Away: {line.period_full_game.spread.point_spread_away} ({line.period_full_game.spread.point_spread_away_money})</p>
                            <p>Home: {line.period_full_game.spread.point_spread_home} ({line.period_full_game.spread.point_spread_home_money})</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p className='total'>Over/Under: {line.period_full_game.total.total_over} ({line.period_full_game.total.total_over_money} / {line.period_full_game.total.total_under_money})</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {midPoint.map(line => (
                    <div className='bets'> 
                        <div className='bet'>
                            <h5>Moneyline</h5>
                            <p>Midpoint: {integer(line.moneylineMP)}</p>
                            <p>Win Rate: {integer(line.moneylineMP/(line.moneylineMP + 100) * 100)}</p>
                        </div>
                        <div className='bet'>
                            <h5>Spread</h5>
                            <p>Midpoint: {integer(line.spreadMP)}</p>
                            <p>Win Rate: {integer(line.spreadMP/(line.spreadMP + 100) * 100)}</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p>Midpoint: {integer(line.totalMP)}</p>
                            <p>Win Rate: {integer(line.totalMP/(line.totalMP + 100) * 100)}</p>
                        </div>
                    </div>
                ))}
            </div>            
            <div className='form'>
                <form onSubmit={handleSubmitFav}>
                    <input
                        type='number'
                        name='winRate'
                        value={winRate}
                        placeholder='Win Rate'
                        onChange={handleWinRate}
                    />
                    <input
                        type='number'
                        name='odds'
                        value={oddsFav}
                        placeholder='Odds'
                        onChange={handleOddsFav}
                    />
                    <button>Favorite Edge</button>
                </form>
                <p className='edge'>Estimated Edge: {edgeFav.toFixed(1)}%</p>
                <p className='edge'>Bet Factor: x{betFactorFav.toFixed(1)}</p>
                <form onSubmit={handleSubmitDog}>
                    <input
                        type='number'
                        name='winRate'
                        value={winRate}
                        placeholder='Win Rate'
                        onChange={handleWinRate}
                    />
                    <input
                        type='number'
                        name='odds'
                        value={oddsDog}
                        placeholder='Odds'
                        onChange={handleOddsDog}
                    />
                    <button>Dog Edge</button>
                </form>
                <p className='edge'>Estimated Edge: {edgeDog.toFixed(1)}%</p>
                <p className='edge'>Bet Factor: x{betFactorDog.toFixed(1)}</p>
            </div>
        </div>
    )
}

export default NcaaFB