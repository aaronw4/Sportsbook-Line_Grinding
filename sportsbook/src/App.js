import React, {useState} from 'react';
import axiosWithAuth from './components/functions/axiosWithAuth';
import {Route, Link} from 'react-router-dom';
import NcaaBB from './components/ncaaBB';
import NcaaFB from './components/ncaaFB';
import NFL from './components/nfl';
import NBA from './components/nba';
import MLB from './components/mlb';
import NHL from './components/nhl';
// import UFC_MMA from './components/ufc_mma';
import './App.css';

function App() {
   const [date, setDate] = useState(new Date().toISOString().slice(0,10));
   const [games, setGames] = useState([]);
  //  const date = '2020-03-10';
  
  function fetchNcaabb() {
      axiosWithAuth()
          .get(`/games?league=NCAAB&date=${date}`)  
          .then(res => {
            setGames(res.data.results)
            console.log(res.data.results);
          })
          .catch(err=> console.log(err))
  };

  function fetchNcaafb() {
    axiosWithAuth()
        .get(`/games?league=NCAAF&date=${date}`)         
        .then(res => {
          setGames(res.data.results)
          console.log(res.data.results);
        })
        .catch(err=> console.log(err))
  };

  function fetchNFL() {
    axiosWithAuth()
        .get(`/games?league=NFL&date=${date}`)            
        .then(res => {
          setGames(res.data.results)
          console.log(res.data.results);
        })
        .catch(err=> console.log(err))
  };

  function fetchMLB() {
    axiosWithAuth()
        .get(`/games?league=MLB&date=${date}`)            
        .then(res => {
          setGames(res.data.results)
          console.log(res.data.results);
        })
        .catch(err=> console.log(err))
  };

  function fetchNBA() {
    axiosWithAuth()
        .get(`/games?league=NBA&date=${date}`)            
        .then(res => {
          setGames(res.data.results)
          console.log(res.data.results);
        })
        .catch(err=> console.log(err))
  };

  function fetchNHL() {
    axiosWithAuth()
        .get(`/games?league=NHL&date=${date}`)            
        .then(res => {
          setGames(res.data.results)
          console.log(res.data.results);
        })
        .catch(err=> console.log(err))
  };
  // New site does not suppot MMA
  // function fetchUFC_MMA() {
  //   axiosWithAuth()
  //       .get(`/sports/7/events/${date}?include=all_periods&include=scores&offset=0`)            
  //       .then(res => {
  //         setGames(res.data.events)
  //         console.log(res.data.events);
  //       })
  //       .catch(err=> console.log(err))
  // };

  const handleDate = e => {
    setDate(e.target.value)
  };

  return (
    <div className="App">
      {console.log(date)}
      <Route path='/'>       
        <h1 className='homePageTitle'>Sportsbook</h1>
      </Route>
      <Route exact path='/'> 
        <form className='homePageDate'>
          <input
            type='string'
            name='date'
            value={date}
            placeholder={date}
            onChange={handleDate}
            className='homePageInput'
          />
        </form>
        <div className='homePageLinks'>
          <Link onClick={fetchNcaabb} to='/ncaabb'>
            <h2 className='homePageLink'>NCAA BB</h2>
          </Link>
          <Link onClick={fetchNcaafb} to='/ncaafb'>
            <h2>NCAA FB</h2>
          </Link>
          <Link onClick={fetchNFL} to='/nfl'>
            <h2>NFL</h2>
          </Link>
          <Link onClick={fetchNBA} to='/nba'>
            <h2>NBA</h2>
          </Link>
          <Link onClick={fetchMLB} to='/mlb'>
            <h2>MLB</h2>
          </Link>
          <Link onClick={fetchNHL} to='/nhl'>
            <h2>NHL</h2>
          </Link>
          {/* <Link onClick={fetchUFC_MMA} to='/ufc_mma'>
            <h2>UFC/MMA</h2>
          </Link> */}
        </div>
      </Route>

      <Route path='/ncaabb'>
        <NcaaBB games={games} date={date}/>
      </Route>

      <Route path='/ncaafb'>
        <NcaaFB games={games} date={date}/>
      </Route>

      <Route path='/nfl'>
        <NFL games={games} date={date}/>
      </Route>

      <Route path='/nba'>
        <NBA games={games} date={date}/>
      </Route>

      <Route path='/mlb'>
        <MLB games={games} date={date}/>
      </Route>

      <Route path='/nhl'>
        <NHL games={games} date={date}/>
      </Route>

      {/* <Route path='/ufc_mma'>
        <UFC_MMA games={games} date={date}/>
      </Route> */}
    </div>
  );
}

export default App;
