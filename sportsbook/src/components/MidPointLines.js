import React from 'react';

const MidPointLines = (props) => {
    const midPoint = props.midPoint
    const gamePeriod = props.gamePeriod

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };
    
    return(
        <div>
            <br/><br/>
            {gamePeriod === 'MMA' ?
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