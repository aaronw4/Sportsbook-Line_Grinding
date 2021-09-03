import React from 'react';
import MidPointLines from './MidPointLines';

const BaseballFullGame = (props) => {
    const fullGame = props.fullGame

    return (
        <div>
        {fullGame.map(game => (
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
                    <p>Away: {game.runline_away}({game.runline_odds_away})</p>
                    <p>Home: {game.runline_home}({game.runline_odds_home})</p>
                    <br/>
                    <p>Away: {game.moneyline_away}</p>
                    <p>Home: {game.moneyline_home}</p>
                    <br/>
                    <p>Over {game.total}: {game.total_over}</p>
                    <p>Under {game.total}: {game.total_under}</p>
                </div>
                <div className='midpoints'>
                    <MidPointLines
                        spreadAway={game.runline_odds_away}
                        spreadHome={game.runline_odds_home}
                        moneylineAway={game.moneyline_away}
                        moneylineHome={game.moneyline_home}
                        game={game.game}
                        totalOver={game.total_over}
                        totalUnder={game.total_under}
                    />
                </div>
            </div>
        ))}
        </div>
    )
}

export default BaseballFullGame