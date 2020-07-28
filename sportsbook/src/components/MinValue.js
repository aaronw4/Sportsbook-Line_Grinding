import React from 'react';

const MinValue = (props) => { 
    const midPoint = props.midPoint

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    }

    const favOdds = mp => {
        let wr = (mp / (mp + 100) * 100);
        let line = integer(-100 / (100 / wr - 1))
        return line
    }

    const dogOdds = mp => {
        let wr = (mp / (mp + 100) * 100);
        let line = integer(((1 / (-1 * wr / 100 + 1)) - 1) * 100);
        return line
    }

    return(
        <div>
            <br/>
            {midPoint.map(line => (
                <div className='bets' key={line.id}>
                    <div className='bet'>
                        <h5>.</h5>
                        <p>Favorite: {favOdds(line.moneylineMP)}</p>
                        <p>Dog: {dogOdds(line.moneylineMP)}</p>
                        <p>{line.id}</p>
                    </div>
                    <div className='bet'>
                        <h5>.</h5>
                        <p>Favorite: {favOdds(line.spreadMP)}</p>
                        <p>Dog: {dogOdds(line.spreadMP)}</p>
                    </div>
                    <div>
                        <h5>.</h5>
                        <p>Favorite: {favOdds(line.totalMP)}</p>
                        <p>Dog: {dogOdds(line.totalMP)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MinValue