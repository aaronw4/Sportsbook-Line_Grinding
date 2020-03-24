import React, {useState, useEffect} from 'react';

const NFL = (props) => {
    let games = props.games;

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

export default NFL;