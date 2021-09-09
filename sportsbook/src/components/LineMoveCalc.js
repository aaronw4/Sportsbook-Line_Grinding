import React, {useState} from 'react';
import { pushFreq } from '../functions/pushFreq';
import { newLine } from '../functions/lineMove';

const LineMoveCalc = () => {
    const [oldSpreadAway, setOldSpreadAway] = useState();
    const [oldSpreadHome, setOldSpreadHome] = useState();
    const [oldOddsAway, setOldOddsAway] = useState();
    const [oldOddsHome, setOldOddsHome] = useState();
    const [newSpreadAway, setNewSpreadAway] = useState();
    const [newSpreadHome, setNewSpreadHome] = useState();
    const [newOddsAway, setNewOddsAway] = useState();
    const [newOddsHome, setNewOddsHome] = useState();
    const [halfAboveFav, setHalfAboveFav] = useState();
    const [halfAboveDog, setHalfAboveDog] = useState();
    const [halfBelowFav, setHalfBelowFav] = useState();
    const [halfBelowDog, setHalfBelowDog] = useState();

    const handleOldSpreadAway = e => {setOldSpreadAway(e.target.value)}
    const handleOldSpreadHome = e => {setOldSpreadHome(e.target.value)}
    const handleOldOddsAway = e => {setOldOddsAway(e.target.value)}
    const handleOldOddsHome = e => {setOldOddsHome(e.target.value)}
    const handleNewSpreadAway = e => {setNewSpreadAway(e.target.value)}
    const handleNewSpreadHome = e => {setNewSpreadHome(e.target.value)}
    const handleHalfAboveFav = e => {setHalfAboveFav(e.target.value)}
    const handleHalfAboveDog = e => {setHalfAboveDog(e.target.value)}
    const handleHalfBelowFav = e => {setHalfBelowFav(e.target.value)}
    const handleHalfBelowDog = e => {setHalfBelowDog(e.target.value)}

    const handleSubmit = e => {
        e.preventDefault();
        
        let PF = pushFreq(halfBelowFav, halfBelowDog, halfAboveFav, halfAboveDog)
        setNewOddsAway(newLine(oldOddsAway, oldOddsHome, PF)) 
        setNewOddsHome(newLine(oldOddsHome, oldOddsAway, PF))
    }

    return (
        <div className='LMform'>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    step='1'
                    name='oldSpreadAway'
                    value={oldSpreadAway}
                    placeholder='Old Spread Away'
                    onChange={handleOldSpreadAway}
                />
                <input
                    type='number'
                    step='1'
                    name='oldSpreadHome'
                    value={oldSpreadHome}
                    placeholder='Old Spread Home'
                    onChange={handleOldSpreadHome}
                />
                <input
                    type='number'
                    step='1'
                    name='oldOddsAway'
                    value={oldOddsAway}
                    placeholder='Old Odds Away'
                    onChange={handleOldOddsAway}
                />
                <input
                    type='number'
                    step='1'
                    name='oldOddsHome'
                    value={oldOddsHome}
                    placeholder='Old Odds Home'
                    onChange={handleOldOddsHome}
                />
                <input
                    type='number'
                    step='1'
                    name='newSpreadAway'
                    value={newSpreadAway}
                    placeholder='New Spread Away'
                    onChange={handleNewSpreadAway}
                />
                <input
                    type='number'
                    step='1'
                    name='newSpreadHome'
                    value={newSpreadHome}
                    placeholder='New Spread Home'
                    onChange={handleNewSpreadHome}
                />
                <input
                    type='number'
                    step='1'
                    name='halfAboveFav'
                    value={halfAboveFav}
                    placeholder='1/2 Above (Fav)'
                    onChange={handleHalfAboveFav}
                />
                <input
                    type='number'
                    step='1'
                    name='halfAboveDog'
                    value={halfAboveDog}
                    placeholder='1/2 Above (Dog)'
                    onChange={handleHalfAboveDog}
                />
                <input
                    type='number'
                    step='1'
                    name='halfBelowFav'
                    value={halfBelowFav}
                    placeholder='1/2 Below (Fav)'
                    onChange={handleHalfBelowFav}
                />
                <input
                    type='number'
                    step='1'
                    name='halfBelowDog'
                    value={halfBelowDog}
                    placeholder='1/2 Below (Dog)'
                    onChange={handleHalfBelowDog}
                />
                <button>New Line</button>
            </form>
            <div>
                <p>Away: {newSpreadAway}({newOddsAway})</p>
                <p>Home: {newSpreadHome}({newOddsHome})</p>
            </div>
        </div>
    )
}

export default LineMoveCalc