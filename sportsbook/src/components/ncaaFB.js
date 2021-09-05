import React, {useState} from 'react';
import Edge from './Edge';
import GameCards from './gameCards';
import GameCards1stHalf from './gameCards1stHalf';

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
                {gamePeriod === 'fullGame' ?
                    <GameCards 
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                    sport='ncaaFB'
                    /> :
                    <GameCards1stHalf
                    halfPoint={halfPoint}
                    setHalfPoint={setHalfPoint}
                    sport='ncaaFB'
                    />
                }
                <Edge/>
            </div>
        </div>
    )
}

export default NcaaFB