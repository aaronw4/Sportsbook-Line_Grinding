import React, {useState, useEffect} from 'react';
import {MidPoint} from './functions/midPoint';
import Edge from './Edge';
import GameCards from './gameCards';

const MLB = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);
    const [gamePeriod, setGamePeriod] = useState('fullGame');
    const [halfPoint, setHalfPoint] = useState(0);    

    let games = props.games;

    useEffect(() => {
        const pinnacle = games.map(game => 
            game.line_periods[3]    
        );
        const pinny = pinnacle.filter(line => 
            line != null    
        );
        setPinn(pinny)
    },[games]);

    useEffect(() => {
        setMidPoint(MidPoint(gamePeriod, pinn, halfPoint));
    },[pinn, gamePeriod, halfPoint]);

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
            {console.log(midPoint)}
            <head>
                <title>MLB</title>
            </head>
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                    <h3>MLB Full Game Lines</h3> : 
                    <h3>MLB First Half Lines</h3>
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
                    game='baseball'
                />
                <Edge/>
            </div>
        </div>
    )
}

export default MLB