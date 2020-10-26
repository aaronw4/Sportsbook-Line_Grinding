import React, {useState} from 'react'
import MidPointLines from './lines/MidPointLines'

const GameCards1stHalf = (props) => {
    const games = props.games
    const halfPoint = props.halfPoint
    // const game = props.game

    const [spread, setSpread] = useState();
    const [total, setTotal] = useState();

    const handleSpread = e => {
        setSpread(e.target.value)
    }

    const handleTotal = e => {
        setTotal(e.target.value)
    }
    
    return (
        // game === 'baseball' ?
        // <div>
        //     {games.map(game => (
        //         <div className='bets' key={game.line_periods[3].period_full_game.moneyline.line_id}>
        //             <div className="teams">
        //                 <h5>Teams</h5>
        //                 <p>{game.teams.away.team}</p>
        //                 <p>{game.teams.home.team}</p>
        //                 <p>{game.status}</p>
        //             </div>
        //             <div className='betTypes'>
        //                 <p className='betText'>Spread</p>
        //                 <p className='betText'>Total</p>
        //             </div>
        //             <div className='currentLines'>
        //                 <h5>Current</h5>
        //                 <p>Away: Not provided</p>
        //                 <p>Home: Not provided</p>
        //                 <br/>
        //                 <p>Away: <input 
        //                     type='number'
        //                     name='spread'
        //                     value={spread}
        //                     placeholder='Away Spread'
        //                     onChange={handleSpread}
        //                     />
        //                     (Not provided)</p>
        //                 <p>Home: {-1 * spread}(Not provided)</p>
        //                 <br/>
        //                 <p>Over <input 
        //                     type='number' 
        //                     name='total' 
        //                     value={total}
        //                     placeholder='Total'
        //                     onChange={handleTotal}
        //                     />
        //                     : Not provided</p>
        //                 <p>Under {total}: Not provided</p>
        //             </div>
        //             <div className='midpoints'>
        //                 <h5>Starting</h5>
        //                 <MidPointLines 
        //                     total={total}
        //                     condition1={props.game}
        //                     condition2=''
        //                 />
        //             </div>
        //         </div>
        //     ))}
        // </div> 
        // :
        <div>
            {games.map(game => (
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
                            value={spread}
                            placeholder='Away Spread'
                            onChange={handleSpread}
                            className='firstHalf'
                            />
                        </p>
                        <p>Home: {-1 * spread}</p>
                        <br/>
                        <p>Away: None</p>
                        <p>Home: None</p>
                        <br/>
                        <p>Over 
                            <input 
                            type='number'
                            step='0.1'
                            name='total' 
                            value={total}
                            placeholder='Total'
                            onChange={handleTotal}
                            className='firstHalf'
                            />
                        </p>
                        <p>Under {total}</p>
                    </div>
                    <div className='midpoints'>
                        <h5>Starting</h5>
                        <MidPointLines total={total}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GameCards1stHalf