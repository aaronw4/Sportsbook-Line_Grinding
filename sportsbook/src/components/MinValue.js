import React, { useState } from 'react';

const MinValue = (props) => { 
    const midPoint = props.midPoint;
    const gamePeriod = props.gamePeriod
    const [n, setNumber] = useState(1)

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };

    function changeSign() {
        let newNumber = -1 * n;
        setNumber(newNumber)
    }
    
    return(
        <div>
            <br/><br/>
            {gamePeriod === 'MMA' ?
                midPoint.map(line => 
                    <div className='betsMMA' key={line.id}>
                        {line.away === 'Dog' ?
                        <div>
                            <br className='minValueBreak mmaHeader'/>
                            <p>Away: {integer(line.moneylineMP)}</p>
                            <p>Home: -{integer(line.moneylineMP)}</p>
                            <p>{line.id}</p>
                        </div>
                        :
                        <div>
                            <br className='minValueBreak mmaHeader'/>
                            <p>Away: -{integer(line.moneylineMP)}</p>
                            <p>Home: {integer(line.moneylineMP)}</p>
                            <p>{line.id}</p>
                        </div> 
                        }
                    </div>                  
                ) :
                midPoint.map(line => 
                    <div className='bets' key={line.id}>
                        {line.awaySpread === 'Dog' ?
                        <div>
                            <br className='minValueBreak topHeader'/>
                            <p>Away: {n * integer(line.spreadMP)}</p>
                            <p>Home: {-n * integer(line.spreadMP)}</p>
                            <button onClick={() => changeSign()}>+ / -</button>
                        </div>
                        :
                        <div>
                        <   br className='minValueBreak topHeader'/>
                            <p>Away: {-n * integer(line.spreadMP)}</p>
                            <p>Home: {n * integer(line.spreadMP)}</p>
                            <button onClick={() => changeSign()}>+ / -</button>
                        </div>}
                        {line.away === 'Dog' ?
                        <div>
                            <br className='minValueBreak midHeader'/>
                            <p>Away: {integer(line.moneylineMP)}</p>
                            <p>Home: -{integer(line.moneylineMP)}</p>
                            <p>{line.id}</p>
                        </div>
                        :
                        <div>
                            <br className='minValueBreak midHeader'/>
                            <p>Away: -{integer(line.moneylineMP)}</p>
                            <p>Home: {integer(line.moneylineMP)}</p>
                            <p>{line.id}</p>
                        </div>}
                        {line.favorite === 'Over' ?
                        <div>
                            <br className='minValueBreak bottomHeader'/>
                            <p>Over: -{integer(line.totalMP)}</p>
                            <p>Under: {integer(line.totalMP)}</p>
                        </div>
                        :
                        <div>
                            <br className='minValueBreak bottomHeader'/>
                            <p>Over: {integer(line.totalMP)}</p>
                            <p>Under: -{integer(line.totalMP)}</p>
                        </div>}
                    </div>
                )
            }
        </div>
    )
}

export default MinValue