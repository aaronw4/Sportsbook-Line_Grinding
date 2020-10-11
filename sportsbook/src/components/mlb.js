import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';

const MLB = (props) => {
    const [gamePeriod, setGamePeriod] = useState('fullGame');
    const [halfPoint, setHalfPoint] = useState(0);

    let games = props.games;

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
            <head>
                <title>MLB</title>
            </head>
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
                    games={games}
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                    game='baseball'
                />
                <Edge/>
            </div>
        </div>
    )
}

export default MLB