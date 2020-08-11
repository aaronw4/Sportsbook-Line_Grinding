import React, {useState, useEffect} from 'react';
import {MidPoint} from './midPoint';
import MathchUp from './MatchUp';
import MidPointLines from './MidPointLines';
import Edge from './Edge';
import Lines from './Lines'

const NFL = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);
    const [gamePeriod, setGamePeriod] = useState('fullGame');

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
        setMidPoint(MidPoint(gamePeriod, pinn));
    },[pinn, gamePeriod]);

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
                <title>NFL</title>
            </head>
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                    <h3>NFL Full Game Lines</h3> : 
                    <h3>NFL First Half Lines</h3>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod}>Show First Half Lines</button> : 
                    <button onClick={handleGamePeriod}>Show Full Game Lines</button>
                }  
            </div>   
            <div className='lines'>
                <MathchUp games={games}/>
                <Lines gamePeriod={gamePeriod} pinn={pinn}/>
                <MidPointLines midPoint={midPoint}/>       
                <Edge/>
            </div>
        </div>
    )
}

export default NFL;