import React, {useContext} from 'react'
import { StatsContext } from '../context/statsContext'
import MidPointLines from './MidPointLines'

const GameCards1stHalf = (props) => { 
    const {firstHalf} = useContext(StatsContext) 
    const sport = props.sport

    return (
        sport === 'baseball' ?
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
                        <h5>Starting</h5>
                        <MidPointLines 
                            spreadAway={game.runline_odds_away}
                            spreadHome={game.runline_odds_home}
                            game={game.game}
                            totalOver={game.total_over}
                            totalUnder={game.total_under}
                        />
                    </div>
                </div>
            ))}
        </div> 
        :
        <div>
            {firstHalf.map(game => (
                <div className='bets' key={game.gameId}>
                    <div className='teams'>
                        <h5>Teams</h5>
                        <p>{game.teams.away.team}</p>
                        <p>{game.teams.home.team}</p>
                        <p>{game.status}</p>
                    </div>
                    <div className='betTypes'>
                        <p className='betText'>Spread</p>
                        <p className='betText'>Moneyline</p>
                        <p className='betText'>Total</p>
                    </div>
                    <div className='currentLines'>
                        <h5>Current</h5>
                        <p>Away: 
                            <input 
                            type='number'
                            step='0.1'
                            name='spread'
                            placeholder='Away Spread'
                            className='firstHalf'
                            />
                        </p>
                        <p>Home:</p>
                        <br/>
                        <p>Away: None</p>
                        <p>Home: None</p>
                        <br/>
                        <p>Over 
                            <input 
                            type='number'
                            step='0.1'
                            name='total' 
                            placeholder='Total'
                            className='firstHalf'
                            />
                        </p>
                        <p>Under</p>
                    </div>
                    <div className='midpoints'>
                        <h5>Starting</h5>
                        <MidPointLines total={0}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameCards1stHalf