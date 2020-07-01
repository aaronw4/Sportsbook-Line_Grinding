import React, {useState} from 'react';

const Edge = () => {    
    const [edgeFav, setEdgeFav] = useState(0);
    const [edgeDog, setEdgeDog] = useState(0);
    const [betFactorFav, setBetFactorFav] = useState(0);
    const [betFactorDog, setBetFactorDog] = useState(0);
    const [winRate, setWinRate] = useState();
    const [oddsFav, setOddsFav] = useState();
    const [oddsDog, setOddsDog] = useState();
    
    const handleWinRate = e => {
        setWinRate(e.target.value);
    };

    const handleOddsFav = e => {
        setOddsFav(e.target.value)
    };

    const handleOddsDog = e => {
        setOddsDog(e.target.value)
    };

    const handleSubmitFav = e => {
        e.preventDefault();

        let decOdds;

        if (oddsFav < 0) {
            decOdds = (100 / (-1 * oddsFav)) + 1;
        } else {
            decOdds = (oddsFav / 100) + 1;
        };

        let edge = (winRate / 100 * decOdds - 1) * 100;
        setEdgeFav(edge);

        let betFactor = (((decOdds - 1) * winRate/100) - (1 - winRate/100)) *100 / (decOdds - 1);
        setBetFactorFav(betFactor);
    };
    
    const handleSubmitDog = e => {
        e.preventDefault();

        let decOdds;

        if (oddsDog < 0) {
            decOdds = (100 / (-1 * oddsDog)) + 1;
        } else {
            decOdds = (oddsDog / 100) + 1;
        };

        let edge = (-1 * (winRate / 100 -1) * decOdds - 1) * 100;
        setEdgeDog(edge);

        let betFactor = (((decOdds - 1) * (1 - winRate/100)) - winRate/100) * 100 / (decOdds - 1);
        setBetFactorDog(betFactor);
    }    
 
    return(
        <div className='form'>
            <form onSubmit={handleSubmitFav}>
                <input
                    type='number'
                    step='0.1'
                    name='winRate'
                    value={winRate}
                    placeholder='Win Rate'
                    onChange={handleWinRate}
                />
                <input
                    type='number'
                    name='odds'
                    value={oddsFav}
                    placeholder='Odds'
                    onChange={handleOddsFav}
                />
                <button>Favorite Edge</button>
            </form>
            <p className='edge'>Estimated Edge: {edgeFav.toFixed(1)}%</p>
            <p className='edge'>Bet Factor: x{betFactorFav.toFixed(1)}</p>
            <form onSubmit={handleSubmitDog}>
                <input
                    type='number'
                    name='winRate'
                    step='0.1'
                    value={winRate}
                    placeholder='Win Rate'
                    onChange={handleWinRate}
                />
                <input
                    type='number'
                    name='odds'
                    value={oddsDog}
                    placeholder='Odds'
                    onChange={handleOddsDog}
                />
                <button>Dog Edge</button>
            </form>
            <p className='edge'>Estimated Edge: {edgeDog.toFixed(1)}%</p>
            <p className='edge'>Bet Factor: x{betFactorDog.toFixed(1)}</p>
        </div>  
    )
};

export default Edge