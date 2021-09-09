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
    const [newOddsAway, setNewOddsAway] = useState(0);
    const [newOddsHome, setNewOddsHome] = useState(0);
    const [pinnOldAway, setPinnOldAway] = useState();
    const [pinnOldHome, setPinnOldHome] = useState();
    const [pinnNewAway, setPinnNewAway] = useState();
    const [pinnNewHome, setPinnNewHome] = useState();

    const handleOldSpreadAway = e => {setOldSpreadAway(e.target.value)}
    const handleOldSpreadHome = e => {setOldSpreadHome(e.target.value)}
    const handleOldOddsAway = e => {setOldOddsAway(e.target.value)}
    const handleOldOddsHome = e => {setOldOddsHome(e.target.value)}
    const handleNewSpreadAway = e => {setNewSpreadAway(e.target.value)}
    const handleNewSpreadHome = e => {setNewSpreadHome(e.target.value)}
    const handlePinnOldAway = e => {setPinnOldAway(e.target.value)}
    const handlePinnOldHome = e => {setPinnOldHome(e.target.value)}
    const handlePinnNewAway = e => {setPinnNewAway(e.target.value)}
    const handlePinnNewHome = e => {setPinnNewHome(e.target.value)}

    let PF = pushFreq(pinnOldAway, pinnOldHome, pinnNewAway, pinnNewHome)

    const handleSubmit = e => {
        e.preventDefault();
        
        if (oldSpreadAway > newSpreadAway) {
            setNewOddsAway(newLine(oldOddsAway, false, PF)) 
            setNewOddsHome(newLine(oldOddsHome, true, PF))
        } else {
            setNewOddsAway(newLine(oldOddsAway, true, PF)) 
            setNewOddsHome(newLine(oldOddsHome, false, PF))}
    }

    return (
        <div className='LMform'>
            <h3>Line Move Calculator</h3>
            <form onSubmit={handleSubmit}>
                <div>
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
                        name='oldOddsAway'
                        value={oldOddsAway}
                        placeholder='Old Odds Away'
                        onChange={handleOldOddsAway}
                    />
                </div>
                <div>
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
                        name='oldOddsHome'
                        value={oldOddsHome}
                        placeholder='Old Odds Home'
                        onChange={handleOldOddsHome}
                    />
                </div>
                <div className='topNewSpread'>
                    <input
                        type='number'
                        step='1'
                        name='newSpreadAway'
                        value={newSpreadAway}
                        placeholder='New Spread Away'
                        onChange={handleNewSpreadAway}
                        className='newSpread'
                    />
                    <input
                        type='number'
                        step='1'
                        name='pinnOldAway'
                        value={pinnOldAway}
                        placeholder='Pinn Old Away'
                        onChange={handlePinnOldAway}
                    />
                    <input
                        type='number'
                        step='1'
                        name='pinnOldHome'
                        value={pinnOldHome}
                        placeholder='Pinn Old Home'
                        onChange={handlePinnOldHome}
                    />
                </div>
                <div>
                    <input
                        type='number'
                        step='1'
                        name='newSpreadHome'
                        value={newSpreadHome}
                        placeholder='New Spread Home'
                        onChange={handleNewSpreadHome}
                        className='newSpread'
                    />
                    <input
                        type='number'
                        step='1'
                        name='pinnNewAway'
                        value={pinnNewAway}
                        placeholder='Pinn New Away'
                        onChange={handlePinnNewAway}
                    />
                    <input
                        type='number'
                        step='1'
                        name='pinnNewHome'
                        value={pinnNewHome}
                        placeholder='Pinn New Home'
                        onChange={handlePinnNewHome}
                    />
                </div>
                <br/>
                <button>Calculate</button>
            </form>
            <div className='LMresults'>
                <p>Away: {newSpreadAway}({(newOddsAway.toFixed(1))})</p>
                <p>Home: {newSpreadHome}({(newOddsHome.toFixed(1))})</p>
                <p>Push Frequency: {(PF*100).toFixed(1)}%</p>
            </div>
        </div>
    )
}

export default LineMoveCalc