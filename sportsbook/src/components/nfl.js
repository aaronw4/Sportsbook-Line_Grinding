import React, {useState, useEffect} from 'react';
import {MidPoint} from './functions/midPoint';
import MathchUp from './lines/MatchUp';
import MidPointLines from './lines/MidPointLines';
import Edge from './Edge';
import Lines from './lines/Lines';
import MinValue from './lines/MinValue';

const NFL = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);
    const [gamePeriod, setGamePeriod] = useState('fullGame');
    const [halfPoint, setHalfPoint] = useState(0);

    let games = props.games;
    let date = props.date;

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
                <MathchUp games={games} date={date}/>
                <Lines 
                    gamePeriod={gamePeriod} 
                    pinn={pinn} 
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                />
                <MidPointLines midPoint={midPoint}/>
                <MinValue midPoint={midPoint}/>     
                <Edge/>
            </div>
        </div>
    )
}

export default NFL;