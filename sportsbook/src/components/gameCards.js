import React, {useContext} from 'react';
import { StatsContext } from '../context/statsContext';
import MidPointLines from './MidPointLines';
import BaseballFullGame from './baseballFullGame';

const GameCards = (props) => { 
    const {fullGame} = useContext(StatsContext)   
    const sport = props.sport

    return (
        sport === 'baseball' ?
        <BaseballFullGame fullGame={fullGame}/>
        // MMA commented out because API does not provide MMA data     
        // : sport === 'MMA' ?
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
            {fullGame.map(game => (
                <div className='bets' key={game.team_away + game.team_home}>
                    <div className='teams'>
                        <h5>Teams</h5>
                        <p>{game.team_away}</p>
                        <p>{game.team_team}</p>
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
                    <p>Over {game.total}: {game.total_over}</p>
                    <p>Under {game.total}: {game.total_under}</p>
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

export default GameCards