import React, { useState } from "react";
import { MidPoint } from '../functions/midPoint';

const MidPointLines = () => {
    const [spreadAway, setSpreadAway] = useState(0);
    const [spreadHome, setSpreadHome] = useState(0);
    const [moneylineHome, setMoneylineHome] = useState(0);
    const [moneylineAway, setMoneylineAway] = useState(0);
    const [totalOver, setTotalOver] = useState(0);
    const [totalUnder, setTotalUnder] = useState(0);
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

    function handleSubmitSpread() {
        setSpreadMP(MidPoint(spreadAway, spreadHome))
    }

    function handleSubmitMoneyline() {
        setMoneylineMP(MidPoint(moneylineAway,moneylineHome))
    }

    function handleSubmitTotal() {
        setTotalMP(MidPoint(totalOver, totalUnder))
    }

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(0);
        return integer;
    };
    
    return(
        <div>
            <form onSubmit={handleSubmitSpread}>
                <input
                    type='number'
                    step='0.1'
                    name='spreadAway'
                    value={spreadAway}
                    placeholder='Spread Away'
                    onChange={handleSpreadAway}
                />
                <input
                    type='number'
                    step='0.1'
                    name='spreadHome'
                    value={spreadHome}
                    placeholder='Spread Home'
                    onChange={handleSpreadHome}
                />
                <button>Spread</button>
            </form>
            <form onSubmit={handleSubmitMoneyline}>
                <input
                    type='number'
                    step='0.1'
                    name='moneylineAway'
                    value={moneylineAway}
                    placeholder='Moneyline Away'
                    onChange={handleMoneylineAway}
                />
                <input
                    type='number'
                    step='0.1'
                    name='moneylineHome'
                    value={moneylineHome}
                    placeholder='Moneyline Home'
                    onChange={handleMoneylineHome}
                />
                <button>Moneyline</button>
            </form>
            <form onSubmit={handleSubmitTotal}>
                <input
                    type='number'
                    step='0.1'
                    name='totalOver'
                    value={totalOver}
                    placeholder='Total Over'
                    onChange={handleTotalOver}
                />
                <input
                    type='number'
                    step='0.1'
                    name='totalUnder'
                    value={totalUnder}
                    placeholder='Total Under'
                    onChange={handleTotalUnder}
                />
                <button>Total</button>
            </form>
            <div>
                <p>Spread Away: {spreadMP}</p>
                <p>Spread Home: {spreadMP}</p>
                <p>Moneyline Away: {moneylineMP}</p>
                <p>Moneyline Home: {moneylineMP}</p>
                <p>Total Over: {totalMP}</p>
                <p>Total Under: {totalMP}</p>
            </div>
        </div>     
    )
};

export default MidPointLines