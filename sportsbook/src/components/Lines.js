import React from 'react'

const Lines = (props) => {

    const gamePeriod = props.gamePeriod;
    const pinn = props.pinn;
    
    return(
        <div>
            {gamePeriod === 'fullGame' ?
                pinn.map(line => (
                    <div className='bets' key={line.period_full_game.moneyline.line_id}>
                        <div>
                            <h5>Moneyline</h5>
                            <p>Away: {line.period_full_game.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_full_game.moneyline.moneyline_home}</p>
                            <p>{line.period_full_game.moneyline.line_id}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <p>Away: {line.period_full_game.spread.point_spread_away} ({line.period_full_game.spread.point_spread_away_money})</p>
                            <p>Home: {line.period_full_game.spread.point_spread_home} ({line.period_full_game.spread.point_spread_home_money})</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p className='total'>Over/Under: {line.period_full_game.total.total_over} ({line.period_full_game.total.total_over_money} / {line.period_full_game.total.total_under_money})</p>
                        </div>
                    </div>
                )) :
                pinn.map(line => (
                    <div className='bets' key={line.period_full_game.moneyline.line_id}>
                        <div>
                            <h5>Moneyline</h5>
                            <p>Away: {line.period_first_half.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_first_half.moneyline.moneyline_home}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <p>Away: {line.period_first_half.spread.point_spread_away} ({line.period_first_half.spread.point_spread_away_money})</p>
                            <p>Home: {line.period_first_half.spread.point_spread_home} ({line.period_first_half.spread.point_spread_home_money})</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p className='total'>Over/Under: {line.period_first_half.total.total_over} ({line.period_first_half.total.total_over_money} / {line.period_first_half.total.total_under_money})</p>
                        </div>
                    </div>
                ))                        
            }
        </div>
    )
}

export default Lines