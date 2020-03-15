import React, {useState, useEffect} from 'react';
import axiosWithAuth from './axiosWithAuth';

const NcaaBB = () => {
    // const [date, setDate] = useState(new Date().toISOString().slice(0,10));
    const date = '2020-03-10'
    const [games, setGames] = useState([]);
    const [pinn, setPinn] = useState([]);
    const [midPoint, setMidPoint] = useState([]);

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

    useEffect(() => {
        let oddsArray = pinn.map(line => ({
            moneylineAway: line.period_full_game.moneyline.moneyline_away, 
            moneylineHome: line.period_full_game.moneyline.moneyline_home,
            spreadAway:  line.period_full_game.spread.point_spread_away_money, 
            spreadHome: line.period_full_game.spread.point_spread_home_money,
            totalOver: line.period_full_game.total.total_over_money,
            totalUnder: line.period_full_game.total.total_under_money
        }));
        console.log(oddsArray);

        let midPointArray = oddsArray.map(line => ({
            moneylineMP: midPoint(line.moneylineAway, line.moneylineHome),
            spreadMP: midPoint(line.spreadAway, line.spreadHome),
            totalMP: midPoint(line.totalOver, line.totalUnder)
        }));

        setMidPoint(midPointArray);
    
        function midPoint(team1, team2) {            
            let dec1;
            let dec2;
            let ratio;

            if (team1 < 0) {
                dec1 = (100 / (-1 * team1)) + 1;
            } else {
                dec1 = (team1 / 100) + 1;
            };

            if (team2 < 0) {
                dec2 = (100 / (-1 * team2)) + 1;
            } else {
                dec2 = (team2 / 100) + 1;
            };

            let recDec1 = 1 / dec1;
            let recDec2 = 1 / dec2;

            if (recDec1 > recDec2) {
                ratio = recDec1 / (recDec1 + recDec2);
            } else {
                ratio = recDec2 / (recDec1 + recDec2);
            }
            
            let recRatio = (1 / ratio) - 1;
            let mp = (1 / recRatio) * 100;
            return mp
        }
    },[pinn]);        

    return (
        <div className='lines'>
            <div>
                {games.map(game => (
                    <div className='matchup'>
                        <h5>Teams</h5>
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
                            <p>Over/Under: {line.period_full_game.total.total_over} ({line.period_full_game.total.total_over_money} / {line.period_full_game.total.total_under_money})</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {midPoint.map(line => (
                    <div className='lines'> 
                        <div>
                        <h5>Moneyline</h5>
                            <p>Midpoint: {line.moneylineMP}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <p>Midpoint: {line.spreadMP}</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p>Midpoint: {line.totalMP}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NcaaBB