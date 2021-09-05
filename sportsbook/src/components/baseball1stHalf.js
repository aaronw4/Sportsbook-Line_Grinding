import React from 'react';
import MidPointLines from './MidPointLines';
import { americanToDecimal, decimalToAmerican } from '../functions/convertOdds';

const Baseball1stHalf = (props) => {
    const firstHalf = props.firstHalf 

    function runline(moneyline) {
        let decimal = americanToDecimal(moneyline)
        let percentage = 1 / decimal
        let adjPercent

        if (percentage < 0.50) {
            adjPercent = percentage + 0.08
        } else (
            adjPercent = percentage - 0.08
        )

        let runline = decimalToAmerican(1 / adjPercent)

        return runline
    }

    return (
        <div>
        {firstHalf.map(game => (
            <div className='bets' key={game.team_away + game.team_home}>
                <div className="teams">
                    <h5>Teams</h5>
                    <p>{game.team_away}</p>
                    <p className='pitcher'>{game.pitcher_away}</p>
                    <p>{game.team_home}</p>
                    <p className='pitcher'>{game.pitcher_home}</p>
                    <p>{game.time}</p>
                </div>
                <div className='betTypes'>
                    <p className='betText'>Spread</p>
                    <p className='betText'>Moneyline</p>
                    <p className='betText'>Total</p>
                </div>
                <div className='currentLines'>
                    <h5>Starting</h5>
                    {game.runline_odds_away < 0 ?  
                        <div>                  
                            <p>Away: -0.5({runline(game.runline_odds_away).toFixed(0)})</p>
                            <p>Home: +0.5({runline(game.runline_odds_home).toFixed(0)})</p>
                        </div>
                    :   
                        <div>                 
                            <p>Away: +0.5({runline(game.runline_odds_away).toFixed(0)})</p>
                            <p>Home: -0.5({runline(game.runline_odds_home).toFixed(0)})</p>
                        </div>
                    } 
                    <br/>
                    <p>Away: {game.runline_odds_away}</p>
                    <p>Home: {game.runline_odds_home}</p>
                    <br/>
                    <p>Over {game.total}: {game.total_over}</p>
                    <p>Under {game.total}: {game.total_under}</p>
                </div>
                <div className='midpoints'>
                    <MidPointLines 
                        spreadAway={runline(game.runline_odds_away)}
                        spreadHome={runline(game.runline_odds_home)}
                        moneylineAway={game.runline_odds_away}
                        moneylineHome={game.runline_odds_home}
                        totalOver={game.total_over}
                        totalUnder={game.total_under}
                    />
                </div>
            </div>
        ))}
        </div>
    )
}

export default Baseball1stHalf