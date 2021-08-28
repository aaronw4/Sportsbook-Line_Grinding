import React, {useContext} from 'react'
import { StatsContext } from '../context/statsContext';
import MidPointLines from './MidPointLines'
import GameCards1stHalf from './gameCards1stHalf'

const GameCards = (props) => {
    // const gamePeriod = props.gamePeriod    
    const games = useContext(StatsContext)    
    // const halfPoint = props.halfPoint
    // const setHalfPoint = props.setHalfPoint
    const game = props.game

    return (
        // gamePeriod === 'firstHalf' ?
        // <GameCards1stHalf
        //     games={games}
        //     halfPoint={halfPoint}
        //     setHalfPoint={setHalfPoint}
        //     game={props.game}
        // />
        // :
        // MMA commented out because API does not provide MMA data
        
        game === 'baseball' ?
        <div>
            {games.map(game => (
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
        // : game === 'MMA' ?
        // <div>
        //     {games.map(game => (
        //         <div className='bets' key={game.line_periods[3].period_full_game.moneyline.line_id}>
        //             <div className='teams'>
        //                 <h5>Fighters</h5>
        //                 <p>{game.teams_normalized[0].name}</p>
        //                 <p>{game.teams_normalized[1].name}</p>
        //                 <p>{game.score.event_status_detail}</p>
        //             </div>
        //             <div className='betTypes'>
        //                 <p className='betText'>Moneyline</p>
        //                 <p className='betText'>Total</p>
        //             </div>
        //             <div className='currentLines'>
        //                 <h5>Current</h5>
        //                 <p>Away: {game.line_periods[3].period_full_game.moneyline.moneyline_away}</p>
        //                 <p>Home: {game.line_periods[3].period_full_game.moneyline.moneyline_home}</p>
        //                 <br/>
        //                 <p>Over {game.line_periods[3].period_full_game.total.total_over}: {game.line_periods[3].period_full_game.total.total_over_money}</p>
        //                 <p>Under {game.line_periods[3].period_full_game.total.total_over}: {game.line_periods[3].period_full_game.total.total_under_money}</p>
        //             </div>
        //             <div className='midpoints'>
        //                 <h5>Starting</h5>
        //                 <MidPointLines 
        //                     total={game.line_periods[3].period_full_game.total.total_over}
        //                     condition2= {props.game}
        //                     condition1= ''
        //                 />
        //             </div>
        //         </div>
        //     ))}
        // </div>
        :
        <div>
            {games.map(game => (
                game.odds ?
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
                        <p>Away: {game.odds[0].spread.current.away}({game.odds[0].spread.current.awayOdds})</p>
                        <p>Home: {game.odds[0].spread.current.home}({game.odds[0].spread.current.homeOdds})</p>
                        <br/>
                        <p>Away: {game.odds[0].moneyline ? <span>{game.odds[0].moneyline.current.awayOdds}</span> : <span>0</span>}</p>
                        <p>Home: {game.odds[0].moneyline ? <span>{game.odds[0].moneyline.current.homeOdds}</span> : <span>0</span>}</p>
                        <br/>
                        <p>Over {game.odds[0].total.current.total}: {game.odds[0].total.current.overOdds}</p>
                        <p>Under {game.odds[0].total.current.total}: {game.odds[0].total.current.underOdds}</p>
                    </div>
                    <div className='midpoints'>
                        <h5>Starting</h5>
                        <MidPointLines total={game.odds[0].total.current.total}/>
                    </div>
                </div> :
                <div>
                </div>
            ))}
        </div>
    )
}

export default GameCards