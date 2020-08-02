import React, { useState } from 'react'

const Lines = (props) => {

    const gamePeriod = props.gamePeriod;
    const pinn = props.pinn;
    const [spreadChange, setSpreadChange] = useState(0)
    const halfPoint = props.halfPoint

    function addHalf() {
        let count = halfPoint + 1;
        props.setHalfPoint(count);
        let change = spreadChange + 0.5;
        setSpreadChange(change)
    }

    function subtractHalf() {
        let count = halfPoint - 1;
        props.setHalfPoint(count);
        let change = spreadChange - 0.5;
        setSpreadChange(change)
    }

    function spreadAway(spread, spreadChange) {
        let newSpread = spread  - (2 * spreadChange * 10)
        if (-100 < newSpread && newSpread < 0) {
            newSpread = 200 + newSpread;
            return (newSpread)
        }
        else if (100 > newSpread && newSpread > 0) {
            newSpread = -200 + newSpread;
            return (newSpread)
        }
        else return (newSpread)
    }

    function spreadHome(spread, spreadChange) {
        let newSpread = spread  + (2 * spreadChange * 10)
        if (-100 < newSpread && newSpread < 0) {
            newSpread = 200 + newSpread;
            return (newSpread)
        }
        else if (100 > newSpread && newSpread > 0) {
            newSpread = -200 + newSpread;
            return (newSpread)
        }
        else return (newSpread)
    }

    
    return(
        <div>
            <br/><br/>
            {gamePeriod === 'fullGame' ?
                pinn.map(line => (
                    <div className='bets' key={line.period_full_game.moneyline.line_id}>
                        <div>
                            <h5 className='topHeader'>Moneyline</h5>
                            <p>Away: {line.period_full_game.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_full_game.moneyline.moneyline_home}</p>
                            <p>{line.period_full_game.moneyline.line_id}</p>
                        </div>
                        <div>
                            <h5>Spread</h5>
                            <div className='spread'>
                                <p>Away: {line.period_full_game.spread.point_spread_away + spreadChange} ({spreadAway(line.period_full_game.spread.point_spread_away_money, spreadChange)})</p>
                                <button onClick={() => addHalf()}>+</button>
                                <button onClick={() => subtractHalf()}>-</button>
                            </div>
                            <p>Home: {line.period_full_game.spread.point_spread_home - spreadChange} ({spreadHome(line.period_full_game.spread.point_spread_home_money, spreadChange)})</p>
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
                            <h5 className='topHeader'>Moneyline</h5>
                            <p>Away: {line.period_first_half.moneyline.moneyline_away}</p>
                            <p>Home: {line.period_first_half.moneyline.moneyline_home}</p>
                            <p>{line.period_full_game.moneyline.line_id}</p>
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