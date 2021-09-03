import React, {useState} from 'react';
// import axiosWithAuth from './components/functions/axiosWithAuth';
import {Route, Link} from 'react-router-dom';
import {StatsContext} from './context/statsContext';
import NcaaBB from './components/ncaaBB';
import NcaaFB from './components/ncaaFB';
import NFL from './components/nfl';
import NBA from './components/nba';
import MLB from './components/mlb';
import NHL from './components/nhl';
// import UFC_MMA from './components/ufc_mma';
import './App.css';

function App() {
  const [fullGame, setFullGame] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const date = new Date().toDateString();
  
  function fetchNcaabb() {
      // axiosWithAuth()
      //     .get(`/games?league=NCAAB&date=${date}`)  
      //     .then(res => {
      //       setGames(res.data.results)
      //       console.log(res.data.results);
      //     })
      //     .catch(err=> console.log(err))
  };

  function fetchNcaafb() {
    // axiosWithAuth()
    //     .get(`/games?league=NCAAF&date=${date}`)         
    //     .then(res => {
    //       setGames(res.data.results)
    //       console.log(res.data.results);
    //     })
    //     .catch(err=> console.log(err))
  };

  function fetchNFL() {
    // axiosWithAuth()
    //     .get(`/games?league=NFL&date=${date}`)            
    //     .then(res => {
    //       setGames(res.data.results)
    //       console.log(res.data.results);
    //     })
    //     .catch(err=> console.log(err))
  };

  function fetchMLB() {
    const fullGameOdds = require('./scraping/mlb.json')
    const firstHalfOdds = require('./scraping/mlbHalf.json')
    setFullGame(fullGameOdds)
    setFirstHalf(firstHalfOdds)
  };

  function fetchNBA() {
    // axiosWithAuth()
    //     .get(`/games?league=NBA&date=${date}`)            
    //     .then(res => {
    //       setGames(res.data.results)
    //       console.log(res.data.results);
    //     })
    //     .catch(err=> console.log(err))
  };

  function fetchNHL() {
    // axiosWithAuth()
    //     .get(`/games?league=NHL&date=${date}`)            
    //     .then(res => {
    //       setGames(res.data.results)
    //       console.log(res.data.results);
    //     })
    //     .catch(err=> console.log(err))
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

  return (
    <div className="App">
      <StatsContext.Provider value={{fullGame, firstHalf}}>
        <Route path='/'>
          <header className='homePageBanner'>    
            <h1 className='homePageTitle'>Sportsbook</h1>
            <p className='homePageDate'>{date}</p>
          </header>
        </Route>
        <Route exact path='/'> 
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
          <NcaaBB/>
        </Route>

        <Route path='/ncaafb'>
          <NcaaFB/>
        </Route>

        <Route path='/nfl'>
          <NFL/>
        </Route>

        <Route path='/nba'>
          <NBA/>
        </Route>

        <Route path='/mlb'>
          <MLB/>
        </Route>

        <Route path='/nhl'>
          <NHL/>
        </Route>

        {/* <Route path='/ufc_mma'>
          <UFC_MMA games={games} date={date}/>
        </Route> */}
      </StatsContext.Provider>
    </div>
  );
}

export default App;
