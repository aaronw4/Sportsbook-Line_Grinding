import React, {useEffect, useState } from "react";
import { MidPoint } from '../functions/midPoint';

const MidPointLines = (props) => {  
    const condition2= props.game
    const condition1= ''  
    const [spreadMP, setSpreadMP] = useState(0);
    const [moneylineMP, setMoneylineMP] = useState(0);
    const [totalMP, setTotalMP] = useState(0);
    const [spreadFav, setSpreadFav] = useState();
    const [moneylineFav, setMoneylineFav] = useState();
    const [totalFav, setTotalFav] = useState();

    useEffect(() => {
        setSpreadMP(integer(MidPoint(props.spreadAway, props.spreadHome)))
        setSpreadFav(favorite(props.spreadAway, props.spreadHome))
        setMoneylineMP(integer(MidPoint(props.moneylineAway, props.moneylineHome)))
        setMoneylineFav(favorite(props.moneylineAway, props.moneylineHome))
        setTotalMP(integer(MidPoint(props.totalOver, props.totalUnder)))
        setTotalFav(overUnderFav(props.totalOver, props.totalUnder))
    }, [])

    function integer(number) {
        let num = Number(number);
        let integer = num.toFixed(1);
        return integer;
    };

    function favorite(away, home) {
        if (Number(away) < Number(home)) {
            return('Away')
        } else {
            return('Home')
        }
    }

    function overUnderFav(over, under) {
        if (Number(over) < Number(under)) {
            return('Over')
        } else {
            return('Under')
        }
    }
    
    return(
        <div className='midpointResults'>
            <h5>Midpoints</h5>
            {spreadFav === 'Away' ? 
                <div className={condition2}>
                    <p className='midpointResult'>Spread Away: -{spreadMP}</p>
                    <p className='midpointResult'>Spread Home: {spreadMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(spreadMP) / (Number(spreadMP) + 100) * 100)}</p>

                </div>
                :
                <div className={condition2}>
                    <p className='midpointResult'>Spread Away: {spreadMP}</p>
                    <p className='midpointResult'>Spread Home: -{spreadMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(spreadMP) / (Number(spreadMP) + 100) * 100)}</p>
                </div>
            }
            {moneylineFav === 'Away' ?
                <div className={condition1}>
                    <p className='midpointResult'>Moneyline Away: -{moneylineMP}</p>
                    <p className='midpointResult'>Moneyline Home: {moneylineMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(moneylineMP) / (Number(moneylineMP) + 100) * 100)}</p>
                </div>
                :
                <div className={condition1}>
                    <p className='midpointResult'>Moneyline Away: {moneylineMP}</p>
                    <p className='midpointResult'>Moneyline Home: -{moneylineMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(moneylineMP) / (Number(moneylineMP) + 100) * 100)}</p>
                </div>
            }
            {totalFav === 'Over' ?
                <div>
                    <p className='midpointResult'>Over {props.total}: -{totalMP}</p>
                    <p className='midpointResult'>Under {props.total}: {totalMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(totalMP) / (Number(totalMP) + 100) * 100)}</p>
                </div>
                :
                <div>
                    <p className='midpointResult'>Over {props.total}: {totalMP}</p>
                    <p className='midpointResult'>Under {props.total}: -{totalMP}</p>
                    <p className='midpointResult home'>Win Rate: {integer(Number(totalMP) / (Number(totalMP) + 100) * 100)}</p>
                </div>
            }            
        </div>
    )
};

export default MidPointLines