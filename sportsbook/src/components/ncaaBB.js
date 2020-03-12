import React, {useState, useEffect} from 'react';
import axiosWithAuth from './axiosWithAuth';

const NcaaBB = () => {
    const [date, setDate] = useState('2020-03-12');
    const [games, setGames] = useState([]);

    useEffect(() => {
        function fetchData() {
            axiosWithAuth()
                .get(`/games?date=${date}`)            
                .then((res)=>{
                    setGames(res.response);
                    console.log(res.response)
                })
                .catch((err)=> console.log(err))
        }
        fetchData();
    },[]);

    return (
        <div>

        </div>
    )
}

export default NcaaBB