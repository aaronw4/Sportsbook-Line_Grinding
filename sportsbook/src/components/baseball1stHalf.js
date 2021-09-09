import React from 'react';
import MidPointLines from './MidPointLines';
import { newLine } from '../functions/lineMove';

const Baseball1stHalf = (props) => {
    const firstHalf = props.firstHalf 

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
                    {Number(game.runline_odds_away) < Number(game.runline_odds_home) ?  
                        <div>                  
                            <p>Away: -0.5({newLine(game.runline_odds_away, false, 0.08).toFixed(0)})</p>
                            <p>Home: +0.5({newLine(game.runline_odds_home, true, 0.08).toFixed(0)})</p>
                        </div>
                    :   
                        <div>                 
                            <p>Away: +0.5({newLine(game.runline_odds_away, true, 0.08).toFixed(0)})</p>
                            <p>Home: -0.5({newLine(game.runline_odds_home, false, 0.08).toFixed(0)})</p>
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
                    {Number(game.runline_odds_away) < Number(game.runline_odds_home) ? 
                        <MidPointLines 
                            spreadAway={newLine(game.runline_odds_away, false, 0.08)}
                            spreadHome={newLine(game.runline_odds_home, true, 0.08)}
                            moneylineAway={game.runline_odds_away}
                            moneylineHome={game.runline_odds_home}
                            totalOver={game.total_over}
                            totalUnder={game.total_under}
                        /> 
                    :
                        <MidPointLines 
                            spreadAway={newLine(game.runline_odds_away, true, 0.08)}
                            spreadHome={newLine(game.runline_odds_home, false, 0.08)}
                            moneylineAway={game.runline_odds_away}
                            moneylineHome={game.runline_odds_home}
                            totalOver={game.total_over}
                            totalUnder={game.total_under}
                        />
                    }
                </div>
            </div>
        ))}
        </div>
    )
}

export default Baseball1stHalf