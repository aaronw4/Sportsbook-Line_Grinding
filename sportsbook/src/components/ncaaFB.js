import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';

const NcaaFB = (props) => {
    const [gamePeriod, setGamePeriod] = useState('fullGame');
    const [halfPoint, setHalfPoint] = useState(0);

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
            <div className='sportTitle'>
                {gamePeriod === 'fullGame' ? 
                <header>
                    <h1 className='homePageTitle'>Sportsbook: NCAA FB Full Game Lines</h1>
                    <p className='homePageDate'>{props.date}</p>
                </header> : 
                <header>
                    <h1 className='homePageTitle'>Sportsbook: NCAA FB First Half Lines</h1>
                    <p className='homePageDate'>{props.date}</p>
                </header>
                } 
                {gamePeriod === 'fullGame' ? 
                    <button onClick={handleGamePeriod} className='bannerButton'>
                        Show First Half Lines
                    </button> 
                    : 
                    <button onClick={handleGamePeriod} className='bannerButton'>
                        Show Full Game Lines
                    </button>
                }  
            </div>   
            <div className='lines'>
                <GameCards 
                    gamePeriod={gamePeriod} 
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                    game='ncaaFB'
                />
                <Edge/>
            </div>
        </div>
    )
}

export default NcaaFB