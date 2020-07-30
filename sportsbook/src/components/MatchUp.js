import React from 'react';

const MathchUp = (props) => {
    const games = props.games
    const date = props.date

    return(
        <div>
            <p className='date'>{date}</p>
            {games.map(game => (
                game.line_periods[3] == null ?
                <div className='hide' key={game.event_id}>
                    <h5 className='topHeader'>Teams</h5>
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
                    <p>{game.score.event_status_detail}</p>
                </div>
            ))}
        </div>
    )
}

export default MathchUp
