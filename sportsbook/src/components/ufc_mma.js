import React from 'react';
import Edge from './Edge';
import GameCards from './gameCards';

const UFC_MMA = (props) => {
    let games = props.games;

    return (
        <div>
            <head>
                <title>UFC / MMA</title>
            </head>
            <div className='sportTitle'>
                <h3>UFC_MMA Lines</h3> 
            </div>
            <div className='lines'>
                <GameCards 
                    gamePeriod='MMA'
                    games={games} 
                    halfPoint={0}
                    game='MMA'
                />
                <Edge/>
            </div>
        </div>
    )
}

export default UFC_MMA