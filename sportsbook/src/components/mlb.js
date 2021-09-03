import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';
import GameCards1stHalf from './gameCards1stHalf'

const MLB = (props) => {
    const [gamePeriod, setGamePeriod] = useState('fullGame');

    const handleGamePeriod = e => {
        e.preventDefault();
        if (gamePeriod === 'fullGame') {
            setGamePeriod('firstHalf')
        } else {
            setGamePeriod('fullGame')
        }       
    }

    return (
        <div>
            <div className='homePageBanner'>
                {gamePeriod === 'fullGame' ? 
                    <header>    
                        <h1 className='homePageTitle'>Sportsbook: MLB Full Game Lines</h1>
                        <p className='homePageDate'>{props.date}</p>
                    </header> 
                    : 
                    <header>    
                        <h1 className='homePageTitle'>Sportsbook: MLB First 5 Innings Lines</h1>
                        <p className='homePageDate'>{props.date}</p>
                    </header>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod} className='bannerButton'>
                        Show First 5 Innings Lines
                    </button> 
                    : 
                    <button onClick={handleGamePeriod} className='bannerButton'>
                        Show Full Game Lines
                    </button>
                }  
            </div>   
            <div className='lines'>
                {gamePeriod === 'fullGame' ?
                    <GameCards sport='baseball'/> :
                    <GameCards1stHalf sport='baseball'/>
                }
                <Edge/>
            </div>
        </div>
    )
}

export default MLB