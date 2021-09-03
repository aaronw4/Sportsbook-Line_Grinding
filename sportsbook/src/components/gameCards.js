import React, {useContext} from 'react';
import { StatsContext } from '../context/statsContext';
import MidPointLines from './MidPointLines';
import BaseballFullGame from './baseball';

const GameCards = (props) => { 
    const {fullGame} = useContext(StatsContext)   
    const sport = props.sport

    return (
        sport === 'baseball' ?
        <BaseballFullGame fullGame={fullGame}/>
        // MMA commented out because API does not provide MMA data     
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
            {fullGame.map(game => (
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