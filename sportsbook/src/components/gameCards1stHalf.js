import React, {useContext} from 'react'
import { StatsContext } from '../context/statsContext'
import MidPointLines from './MidPointLines'
import Baseball1stHalf from './baseball1stHalf'

const GameCards1stHalf = (props) => { 
    const {firstHalf} = useContext(StatsContext) 
    const sport = props.sport

    return (
        sport === 'baseball' ?
        <Baseball1stHalf firstHalf={firstHalf}/>
        :
        <div>
            {firstHalf.map(game => (
                <div className='bets' key={game.team_away + game.team_home}>
                    <div className='teams'>
                        <h5>Teams</h5>
                        <p>{game.team_away}</p>
                        <p>{game.team_home}</p>
                        <p>{game.time}</p>
                    </div>
                    <div className='betTypes'>
                        <p className='betText'>Spread</p>
                        <p className='betText'>Moneyline</p>
                        <p className='betText'>Total</p>
                    </div>
                    <div className='currentLines'>
                        <h5>Starting</h5>
                        <p>Away: {game.spread_away}({game.spread_odds_away})</p>
                        <p>Home: {game.spread_home}({game.spread_odds_home})</p>
                        <br/>
                        <p>Away: {game.moneyline_away}</p>
                        <p>Home: {game.moneyline_home}</p>
                        <br/>
                        <p>Over: {game.total}: {game.total_over}</p>
                        <p>Under: {game.total}: {game.total_under}</p>
                    </div>
                    <div className='midpoints'>
                        <MidPointLines 
                            spreadAway={game.spread_odds_away}
                            spreadHome={game.spread_odds_home}
                            moneylineAway={game.moneyline_away}
                            moneylineHome={game.moneyline_home}
                            totalOver={game.total_over}
                            totalUnder={game.total_under}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameCards1stHalf