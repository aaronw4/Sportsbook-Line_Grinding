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