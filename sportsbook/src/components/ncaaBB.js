import React, {useState, useEffect} from 'react';
import axiosWithAuth from './axiosWithAuth';

const NcaaBB = () => {
    // const [date, setDate] = useState(new Date().toISOString().slice(0,10));
    const date = '2020-03-10'
    const [games, setGames] = useState([]);
    const [pinn, setPinn] = useState([]);

    useEffect(() => {
        function fetchData() {
            axiosWithAuth()
                .get(`/sports/5/events/${date}?include=all_periods&include=scores&offset=0`)            
                .then(res => {
                    setGames(res.data.events);
                    console.log(res.data.events);
                })
                .catch(err=> console.log(err))
        }
        fetchData();
    },[date]);

    useEffect(() => {
        const pinnacle = games.map(game => 
            game.line_periods[3]
        );
        setPinn(pinnacle);
    },[games])
        

    return (
        <div className='lines'>
            <div>
                {games.map(game => (
                    <div>
                        <p>{game.teams[0].name}</p>
                        <p>{game.teams[1].name}</p>
                    </div>
                ))}
            </div>
            <div>
                {pinn.map(line => (
                    <div className='lines'>
                        <div>
                            <h5>Moneyline</h5>
                            <p>Away: {line.period_full_game.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_full_game.moneyline.moneyline_home}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <p>Away: {line.period_full_game.spread.point_spread_away} ({line.period_full_game.spread.point_spread_away_money})</p>
                            <p>Home: {line.period_full_game.spread.point_spread_home} ({line.period_full_game.spread.point_spread_home_money})</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p>Over/Under: {line.period_full_game.total.total_over} ({line.period_full_game.total.total_over_money}/{line.period_full_game.total.total_under_money})</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NcaaBB