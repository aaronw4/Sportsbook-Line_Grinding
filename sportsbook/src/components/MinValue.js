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
            <br/><br/>
            {midPoint.map(line => 
                <div className='bets' key={line.id}>
                    {line.away === 'Dog' ?
                    <div className='bet'>
                        <br className='minValueBreak topHeader'/>
                        <p>Away: {dogOdds(line.moneylineMP)}</p>
                        <p>Home: {favOdds(line.moneylineMP)}</p>
                        <p>{line.id}</p>
                    </div>
                    :
                    <div className='bet'>
                        <br className='minValueBreak topHeader'/>
                        <p>Away: {favOdds(line.moneylineMP)}</p>
                        <p>Home: {dogOdds(line.moneylineMP)}</p>
                        <p>{line.id}</p>
                    </div>}
                    {line.awaySpread === 'Dog' ?
                    <div className='bet'>
                        <br className='minValueBreak midHeader'/>
                        <p>Away: {dogOdds(line.spreadMP)}</p>
                        <p>Home: {favOdds(line.spreadMP)}</p>
                    </div>
                    :
                    <div className='bet'>
                        <br className='minValueBreak midHeader'/>
                        <p>Away: {favOdds(line.spreadMP)}</p>
                        <p>Home: {dogOdds(line.spreadMP)}</p>
                    </div>}
                    {line.favorite === 'Over' ?
                    <div>
                        <br className='minValueBreak midHeader'/>
                        <p>Over: {favOdds(line.totalMP)}</p>
                        <p>Under: {dogOdds(line.totalMP)}</p>
                    </div>
                    :
                    <div>
                        <br className='minValueBreak midHeader'/>
                        <p>Over: {dogOdds(line.totalMP)}</p>
                        <p>Under: {favOdds(line.totalMP)}</p>
                    </div>}
                </div>
            )}
        </div>
    )
}

export default MinValue