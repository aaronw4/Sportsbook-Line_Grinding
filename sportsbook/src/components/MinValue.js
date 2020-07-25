import React, {useState} from 'react';

const MinValue = (props) => { 
    const midPoint = props.midPoint

    const favOdds = mp => {
        let wr = integer(mp / (mp + 100) * 100);
        let line = -100 / (100 / wr - 1)
        return line
    }

    const dogOdds = mp => {
        let wr = integer(mp / (mp + 100) * 100);
        let line = ((1 / (wr / 100 + 1)) - 1) * 100;
        return line
    }
    
    return(
        <div>
            {midPoint.map(line => (
                <div className='bets'>
                    <div className='bet'>
                        <h5>Moneyline</h5>
                        <p>Favorite: {() => favOdds(line.moneylineMP)}</p>
                        <p>Dog: {() => dogOdds(line.moneylineMP)}</p>
                    </div>
                    <div className='bet'>
                        <h5>Spread</h5>
                        <p>Favorite: {() => favOdds(line.spreadMP)}</p>
                        <p>Dog: {() => dogOdds(line.spreadMP)}</p>
                    </div>
                    <div>
                        <h5>Total</h5>
                        <p>Over: {() => favOdds(line.totalMP)}</p>
                        <p>Under: {() => dogOdds(line.totalMP)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MinValue