import React, {useState, useEffect} from 'react';
import {MidPoint} from './midPoint';

const MLB = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);
    const [winRate, setWinRate] = useState();
    const [oddsFav, setOddsFav] = useState();
    const [oddsDog, setOddsDog] = useState();
    const [edgeFav, setEdgeFav] = useState(0);
    const [edgeDog, setEdgeDog] = useState(0);
    const [betFactorFav, setBetFactorFav] = useState(0);
    const [betFactorDog, setBetFactorDog] = useState(0);
    const [gamePeriod, setGamePeriod] = useState('fullGame');

    let games = props.games;

    useEffect(() => {
        const pinnacle = games.map(game => 
            game.line_periods[3]    
        );
        const pinny = pinnacle.filter(line => 
            line != null    
        );
        setPinn(pinny)
    },[games]);

    useEffect(() => {
        setMidPoint(MidPoint(gamePeriod, pinn));
    },[pinn, gamePeriod]);

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

        let betFactor = (((decOdds - 1) * winRate/100) - (1 - winRate/100)) *100 / (decOdds - 1);
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
    
    const handleGamePeriod = e => {
        e.preventDefault();
        if (gamePeriod === 'fullGame') {
            setGamePeriod('firstHalf')
        } else {
            setGamePeriod('fullGame')
        }       
    }

    return (
        <div>
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                    <h3>MLB Full Game Lines</h3> : 
                    <h3>MLB First Half Lines</h3>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod}>Show First Half Lines</button> : 
                    <button onClick={handleGamePeriod}>Show Full Game Lines</button>
                }  
            </div>   
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
                    {gamePeriod === 'fullGame' ?
                        pinn.map(line => (
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
                        )) :
                        pinn.map(line => (
                            <div className='bets'>
                                <div>
                                    <h5>Moneyline</h5>
                                    <p>Away: {line.period_first_half.moneyline.moneyline_away}</p>
                                    <p>Home: {line.period_first_half.moneyline.moneyline_home}</p>
                                </div>
                                <div>
                                    <h5>Spread</h5>
                                    <p>Away: {line.period_first_half.spread.point_spread_away} ({line.period_first_half.spread.point_spread_away_money})</p>
                                    <p>Home: {line.period_first_half.spread.point_spread_home} ({line.period_first_half.spread.point_spread_home_money})</p>
                                </div>
                                <div>
                                    <h5>Total</h5>
                                    <p className='total'>Over/Under: {line.period_first_half.total.total_over} ({line.period_first_half.total.total_over_money} / {line.period_first_half.total.total_under_money})</p>
                                </div>
                            </div>
                        ))                        
                    }
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
                            step='0.1'
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
                            step='0.1'
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
        </div>
    )
}

export default MLB