import React, { useState } from "react";

const MidPointLines = (props) => {
    const game = props.game
    const [spreadAway, setSpreadAway] = useState(0);
    const [spreadHome, setSpreadHome] = useState(0);
    const [moneylineHome, setMoneylineHome] = useState(0);
    const [moneylineAway, setMoneylineAway] = useState(0);
    const [totalOver, setTotalOver] = useState(0);
    const [totalUnder, setTotalUnder] = useState(0);

    const handleSpreadAway = e => {
        setSpreadAway(e.target.value)
    }

    const handleSpreadHome = e => {
        setSpreadHome(e.target.value)
    }

    const handleMoneylineAway = e => {
        setMoneylineAway(e.target.value)
    }

    const handleMoneylineHome = e => {
        setMoneylineHome(e.target.value)
    }

    const handleTotalOver = e => {
        setTotalOver(e.target.value)
    }

    const handleTotalUnder = e => {
        setTotalUnder(e.target.value)
    }

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };
    
    return(
        <div>
            <form>
                <input
                    type='number'
                    step='0.1'
                    name='spreadAway'
                    value={spreadAway}
                    placeholder='Spread Away'
                    onChange={handleSpreadAway}
                />
            </form>
            {game === 'MMA' ?
                midPoint.map(line => (
                    <div className='betsMMA'>
                        <div>
                            <h5 className='midHeaderMMA'>Moneyline</h5>
                            <p>Midpoint: {integer(line.moneylineMP)}</p>
                            <p>Win Rate: {integer(line.moneylineMP/(line.moneylineMP + 100) * 100)}</p>
                            <p>{line.id}</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p>Midpoint: {integer(line.totalMP)}</p>
                            <p>Win Rate: {integer(line.totalMP/(line.totalMP + 100) * 100)}</p>
                        </div>
                    </div>
                )) :
                midPoint.map(line => (
                    <div className='bets' key={line.id}> 
                        <div>
                            <h5 className='topHeader'>Spread</h5>
                            <p>Midpoint: {integer(line.spreadMP)}</p>
                            <p>Win Rate: {integer(line.spreadMP/(line.spreadMP + 100) * 100)}</p>
                        </div>
                        <div>
                            <h5>Moneyline</h5>
                            <p>Midpoint: {integer(line.moneylineMP)}</p>
                            <p>Win Rate: {integer(line.moneylineMP/(line.moneylineMP + 100) * 100)}</p>
                            <p>{line.id}</p>
                        </div>
                        <div>
                            <h5>Total</h5>
                            <p>Midpoint: {integer(line.totalMP)}</p>
                            <p>Win Rate: {integer(line.totalMP/(line.totalMP + 100) * 100)}</p>
                        </div>
                    </div>
                ))
            }
        </div>     
    )
};

export default MidPointLines