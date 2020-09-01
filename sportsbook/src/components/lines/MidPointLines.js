import React, { useState } from "react";
import { MidPoint } from '../functions/midPoint';

const MidPointLines = (props) => {
    let total = props.total
    const [spreadAway, setSpreadAway] = useState();
    const [spreadHome, setSpreadHome] = useState();
    const [moneylineHome, setMoneylineHome] = useState();
    const [moneylineAway, setMoneylineAway] = useState();
    const [totalOver, setTotalOver] = useState();
    const [totalUnder, setTotalUnder] = useState();
    const [spreadMP, setSpreadMP] = useState(0);
    const [moneylineMP, setMoneylineMP] = useState(0);
    const [totalMP, setTotalMP] = useState(0);

    const handleSpreadAway = e => {
        setSpreadAway(e.target.value)
    }

    const handleSpreadHome = e => {
        setSpreadHome(e.target.value)
    }

    const handleMoneylineAway = e => {
        setMoneylineAway(e.target.value)
    }

    const handleMoneylineHome = e => {
        setMoneylineHome(e.target.value)
    }

    const handleTotalOver = e => {
        setTotalOver(e.target.value)
    }

    const handleTotalUnder = e => {
        setTotalUnder(e.target.value)
    }

    const handleSubmitSpread = e => {
        e.preventDefault();
        setSpreadMP(integer(MidPoint(spreadAway, spreadHome)))
    }

    const handleSubmitMoneyline = e => {
        e.preventDefault();
        setMoneylineMP(integer(MidPoint(moneylineAway,moneylineHome)))
    }

    const handleSubmitTotal = e => {
        e.preventDefault();
        setTotalMP(integer(MidPoint(totalOver, totalUnder)))
    }

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };
    
    return(
        <div className='midpointCont'>
            <div className='midpointForms'>
                <form onSubmit={handleSubmitSpread}>
                    <input
                        type='number'
                        step='0.1'
                        name='spreadAway'
                        value={spreadAway}
                        placeholder='Spread Away'
                        onChange={handleSpreadAway}
                        className='midpointInput'
                    />
                    <input
                        type='number'
                        step='0.1'
                        name='spreadHome'
                        value={spreadHome}
                        placeholder='Spread Home'
                        onChange={handleSpreadHome}
                        className='midpointInput'
                    />
                    <button className='midpointButton'>Spread</button>
                </form>
                <form onSubmit={handleSubmitMoneyline}>
                    <input
                        type='number'
                        step='0.1'
                        name='moneylineAway'
                        value={moneylineAway}
                        placeholder='Moneyline Away'
                        onChange={handleMoneylineAway}
                        className='midpointInput'
                    />
                    <input
                        type='number'
                        step='0.1'
                        name='moneylineHome'
                        value={moneylineHome}
                        placeholder='Moneyline Home'
                        onChange={handleMoneylineHome}
                        className='midpointInput'
                    />
                    <button className='midpointButton'>Moneyline</button>
                </form>
                <form onSubmit={handleSubmitTotal}>
                    <input
                        type='number'
                        step='0.1'
                        name='totalOver'
                        value={totalOver}
                        placeholder='Total Over'
                        onChange={handleTotalOver}
                        className='midpointInput'
                    />
                    <input
                        type='number'
                        step='0.1'
                        name='totalUnder'
                        value={totalUnder}
                        placeholder='Total Under'
                        onChange={handleTotalUnder}
                        className='midpointInput'
                    />
                    <button className='midpointButton'>Total</button>
                </form>
            </div>
            <div className='midpointResults'>
                <h5>Midpoints</h5>
                <p className='midpointResult'>Spread Away: {spreadMP}</p>
                <p className='midpointResult'>Spread Home: {spreadMP}</p>
                <p className='midpointResult home'>Win Rate: {integer(Number(moneylineMP) / (Number(moneylineMP) + 100) * 100)}</p>
                <p className='midpointResult'>Moneyline Away: {moneylineMP}</p>
                <p className='midpointResult'>Moneyline Home: {moneylineMP}</p>
                <p className='midpointResult home'>Win Rate: {integer(Number(moneylineMP) / (Number(moneylineMP) + 100) * 100)}</p>
                <p className='midpointResult'>Over {total}: {totalMP}</p>
                <p className='midpointResult'>Under {total}: {totalMP}</p>
                <p className='midpointResult home'>Win Rate: {integer(Number(totalMP) / (Number(totalMP) + 100) * 100)}</p>
            </div>
        </div>     
    )
};

export default MidPointLines