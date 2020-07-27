import React from 'react';

const MathchUp = (props) => {
    const games = props.games

    return(
        <div>
            {games.map(game => (
                game.line_periods[3] == null ?
                <div className='matchup' key={game.event_id}>
                    <h5>Teams</h5>
                    <p>{game.teams_normalized[0].name}</p>
                    <p>{game.teams_normalized[1].name}</p>
                    <br/>
                </div>
                :
                <div className='matchup' key={game.event_id}>
                    <h5>Teams</h5>
                    <p>{game.teams_normalized[0].name}</p>
                    <p>{game.teams_normalized[1].name}</p>
                    <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                </div>
            ))}
        </div>
    )
}

export default MathchUp
