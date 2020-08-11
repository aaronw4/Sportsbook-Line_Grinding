import React, {useState, useEffect} from 'react';
import {MidPoint} from './midPoint';
import MathchUp from './MatchUp';
import MidPointLines from './MidPointLines';
import Edge from './Edge';
import Lines from './Lines';
import MinValue from './MinValue'

const UFC_MMA = (props) => {
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]); 

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
        setMidPoint(MidPoint('fullGame', pinn, 0));
    },[pinn]);

    return (
        <div>
            {console.log(midPoint)}
            <head>
                <title>UFC / MMA</title>
            </head>
            <div className='sportTitle'>
                <h3>UFC_MMA Lines</h3> 
            </div>
            <div className='lines'>
                <MathchUp games={games} date={date} game='MMA'/>
                <Lines 
                    gamePeriod='MMA'
                    pinn={pinn} 
                    halfPoint={0}
                    game='MMA'
                />
                <MidPointLines midPoint={midPoint} gamePeriod='MMA'/>
                <MinValue midPoint={midPoint} gamePeriod='MMA'/>   
                <Edge/>
            </div>
        </div>
    )
}

export default UFC_MMA