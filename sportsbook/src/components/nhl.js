import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';

const NHL = (props) => {
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
            <header>
                <title>NHL</title>
            </header>
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                    <h3>NHL Full Game Lines</h3> : 
                    <h3>NHL First Half Lines</h3>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod}>Show First Half Lines</button> : 
                    <button onClick={handleGamePeriod}>Show Full Game Lines</button>
                }  
            </div>  
            <div className='lines'>
                <GameCards 
                    gamePeriod={gamePeriod} 
                    games={games}                
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                    game='hockey'
                /> 
                <Edge/>
            </div>
        </div>
    )
}

export default NHL