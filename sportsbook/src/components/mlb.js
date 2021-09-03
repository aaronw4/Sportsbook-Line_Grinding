import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';

const MLB = () => {
    const [gamePeriod, setGamePeriod] = useState('fullGame');

    const handleGamePeriod = e => {
        e.preventDefault();
        if (gamePeriod === 'fullGame') {
            setGamePeriod('firstHalf')
        } else {
            setGamePeriod('fullGame')
        }       
    }

    return (
        <div>
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                    <h3>MLB Full Game Lines</h3> : 
                    <h3>MLB First 5 Innings Lines</h3>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod}>Show First 5 Innings Lines</button> : 
                    <button onClick={handleGamePeriod}>Show Full Game Lines</button>
                }  
            </div>   
            <div className='lines'>
                <GameCards
                    gamePeriod={gamePeriod}
                    sport='baseball'
                />
                <Edge/>
            </div>
        </div>
    )
}

export default MLB