import React from 'react';

const MathchUp = (props) => {
    const games = props.games
    const date = props.date

    return(
        props.game === 'baseball' ? 
        <div>
            <p className='date'>{date}</p>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='matchupPitcher' key={game.event_id}>
                    <h5>Teams</h5>
                    <p>{game.teams_normalized[0].name}</p>
                    <p className='pitcher'>{game.pitcher_away.name}</p>
                    <p>{game.teams_normalized[1].name}</p>
                    <p className='pitcher'>{game.pitcher_home.name}</p>
                    <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                    <p>{game.score.event_status_detail}</p>
                </div>
            ))}
        </div>
        : props.game === 'MMA' ?
        <div>
            <p className='date'>{date}</p>
            {games.map(game => (
                game.line_periods[3] == null ? null :
                <div className='matchupMMA' key={game.event_id}>
                    <h5>Match</h5>
                    <p>{game.teams_normalized[0].name}</p>
                    <p>{game.teams_normalized[1].name}</p>
                    <p>{game.line_periods[3].period_full_game.moneyline.line_id}</p>
                    <p>{game.score.event_status_detail}</p>
                </div>
            ))}
        </div>
        :
        <div>
            <p className='date'>{date}</p>
            {games.map(game => (
                game.line_periods[3] == null ? null :
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
