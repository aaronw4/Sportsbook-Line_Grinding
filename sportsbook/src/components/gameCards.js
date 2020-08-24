import React from 'react'
import MidPointLines from './lines/MidPointLines'

const GameCards = (props) => {
    const gamePeriod = props.gamePeriod
    const games = props.games
    const halfPoint = props.halfPoint
    const game = props.game

    return (
        game === 'baseball' ?
        <div>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='bets'>
                    <div>
                        <h5>Teams</h5>
                        <p>{game.teams_normalized[0].name}</p>
                        <p className='pitcher'>{game.pitcher_away.name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                        <p className='pitcher'>{game.pitcher_home.name}</p>
                        <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                        <p>{game.score.event_status_detail}</p>
                    </div>
                    <div>
                        <p>Spread</p>
                        <p>Moneyline</p>
                        <p>Total</p>
                    </div>
                    <div>
                        <h5>Current</h5>
                        <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}({game.line_periods[3].period_full_game.spread.point_spread_away_money})</p>
                        <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}({game.line_periods[3].period_full_game.spread.point_spread_home_money})</p>
                        <br/>
                        <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}</p>
                        <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}</p>
                        <br/>
                        <p className='total'>Over/Under: {game.line_periods[3].period_full_game.total.total_over} ({game.line_periods[3].period_full_game.total.total_over_money} / {game.line_periods[3].period_full_game.total.total_under_money})</p>
                    </div>
                    <div>
                        <h5>Starting</h5>
                        <MidPointLines game={game}/>
                    </div>
                </div>
            ))}
        </div> 
        : game === 'MMA' ?
        <div>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='bets'>
                    <div>
                        <p>{game.teams_normalized[0].name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                        <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                        <p>{game.score.event_status_detail}</p>
                    </div>
                    <div>
                        <h5>Moneyline</h5>
                        <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}</p>
                        <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}</p>
                        <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p className='total'>Over/Under: {game.line_periods[3].period_full_game.total.total_over} ({game.line_periods[3].period_full_game.total.total_over_money} / {game.line_periods[3].period_full_game.total.total_under_money})</p>
                    </div>
                </div>
            ))}
        </div>
        :
        <div>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='bets'>
                    <div>
                        <p>{game.teams_normalized[0].name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                        <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                        <p>{game.score.event_status_detail}</p>
                    </div>
                    <div>
                        <h5>Spread</h5>
                        <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}({game.line_periods[3].period_full_game.spread.point_spread_away_money})</p>
                        <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}({game.line_periods[3].period_full_game.spread.point_spread_home_money})</p>
                    </div>
                    <div>
                        <h5>Moneyline</h5>
                        <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}</p>
                        <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}</p>
                        <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p className='total'>Over/Under: {game.line_periods[3].period_full_game.total.total_over} ({game.line_periods[3].period_full_game.total.total_over_money} / {game.line_periods[3].period_full_game.total.total_under_money})</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameCards