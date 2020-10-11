import React from 'react'
import MidPointLines from './lines/MidPointLines'

const GameCards1stHalf = (props) => {
    const games = props.games
    const halfPoint = props.halfPoint
    const game = props.game

    return (
        game === 'baseball' ?
        <div>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='bets' key={game.line_periods[3].period_full_game.moneyline.line_id}>
                    <div className="teams">
                        <h5>Teams</h5>
                        <p>{game.teams_normalized[0].name}</p>
                        <p className='pitcher'>{game.pitcher_away.name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                        <p className='pitcher'>{game.pitcher_home.name}</p>
                        <p>{game.score.event_status_detail}</p>
                    </div>
                    <div className='betTypes'>
                        <p className='betText'>Spread</p>
                        <p className='betText'>Total</p>
                    </div>
                    <div className='currentLines'>
                        <h5>Current</h5>
                        <p>Away: {game.line_periods[3].period_first_half.spread.point_spread_away}({game.line_periods[3].period_first_half.spread.point_spread_away_money})</p>
                        <p>Home: {game.line_periods[3].period_first_half.spread.point_spread_home}({game.line_periods[3].period_first_half.spread.point_spread_home_money})</p>
                        <br/>
                        <p>Over {game.line_periods[3].period_first_half.total.total_over}: {game.line_periods[3].period_first_half.total.total_over_money}</p>
                        <p>Under {game.line_periods[3].period_first_half.total.total_over}: {game.line_periods[3].period_first_half.total.total_under_money}</p>
                    </div>
                    <div className='midpoints'>
                        <h5>Starting</h5>
                        <MidPointLines 
                            total={game.line_periods[3].period_first_half.total.total_over}
                            condition1={props.game}
                            condition2=''
                        />
                    </div>
                </div>
            ))}
        </div> 
        :
        <div>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='bets' key={game.line_periods[3].period_full_game.moneyline.line_id}>
                    <div className='teams'>
                        <h5>Teams</h5>
                        <p>{game.teams_normalized[0].name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                        <p>{game.score.event_status_detail}</p>
                    </div>
                    <div className='betTypes'>
                        <p className='betText'>Spread</p>
                        <p className='betText'>Moneyline</p>
                        <p className='betText'>Total</p>
                    </div>
                    <div className='currentLines'>
                        <h5>Current</h5>
                        <p>Away: {game.line_periods[3].period_first_half.spread.point_spread_away}({game.line_periods[3].period_first_half.spread.point_spread_away_money})</p>
                        <p>Home: {game.line_periods[3].period_first_half.spread.point_spread_home}({game.line_periods[3].period_first_half.spread.point_spread_home_money})</p>
                        <br/>
                        <p>Away: {game.line_periods[3].period_first_half.moneyline.moneyline_away}</p>
                        <p>Home: {game.line_periods[3].period_first_half.moneyline.moneyline_home}</p>
                        <br/>
                        <p>Over {game.line_periods[3].period_first_half.total.total_over}: {game.line_periods[3].period_first_half.total.total_over_money}</p>
                        <p>Under {game.line_periods[3].period_first_half.total.total_over}: {game.line_periods[3].period_first_half.total.total_under_money}</p>
                    </div>
                    <div className='midpoints'>
                        <h5>Starting</h5>
                        <MidPointLines total={game.line_periods[3].period_first_half.total.total_over}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameCards1stHalf