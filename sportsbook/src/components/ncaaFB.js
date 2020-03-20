import React, {useState, useEffect} from 'react';

const NcaaFB = (props) => {
    const [pinn, setPinn] = useState([]);

    let games = props.games;

    useEffect(() => {
        const pinnacle = games.map(game => 
            game.line_periods[3]    
        );
        const pinny = pinnacle.filter(line => 
            line != null    
        );
        setPinn(pinny)
    },[games])

    return (
        <div className='lines'>
            <div>
                {games.map(game => (
                    <div className='matchup'>
                        <h5>Teams</h5>
                        <p>{game.teams_normalized[0].name}</p>
                        <p>{game.teams_normalized[1].name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NcaaFB