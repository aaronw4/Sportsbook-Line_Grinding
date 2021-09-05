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
import UFC_MMA from './components/ufc_mma';
import './App.css';

function App() {
  const [fullGame, setFullGame] = useState([]);
  const [firstHalf, setFirstHalf] = useState([]);
  const date = new Date().toDateString();
  
  function fetchNcaabb() {
  };

  function fetchNcaafb() {
    const fullGameOdds = require('./data/ncaaFB.json')
    // const firstHalfOdds = require('./data/ncaaFBHalf.json')
    setFullGame(fullGameOdds)
    // setFirstHalf(firstHalfOdds)
  };

  function fetchNFL() {
  };

  function fetchMLB() {
    const fullGameOdds = require('./data/mlb.json')
    const firstHalfOdds = require('./data/mlbHalf.json')
    setFullGame(fullGameOdds)
    setFirstHalf(firstHalfOdds)
  };

  function fetchNBA() {
  };

  function fetchNHL() {
  };
  
  function fetchUFC_MMA() {
  };

  return (
    <div className="App">
      <StatsContext.Provider value={{fullGame, firstHalf}}>
        <Route exact path='/'> 
          <header className='homePageBanner'>    
            <h1 className='homePageTitle'>Sportsbook</h1>
            <p className='homePageDate'>{date}</p>
          </header>
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
            <Link onClick={fetchUFC_MMA} to='/ufc_mma'>
              <h2>UFC/MMA</h2>
            </Link>
          </div>
        </Route>

        <Route path='/ncaabb'>
          <NcaaBB date={date}/>
        </Route>

        <Route path='/ncaafb'>
          <NcaaFB date={date}/>
        </Route>

        <Route path='/nfl'>
          <NFL date={date}/>
        </Route>

        <Route path='/nba'>
          <NBA date={date}/>
        </Route>

        <Route path='/mlb'>
          <MLB date={date}/>
        </Route>

        <Route path='/nhl'>
          <NHL date={date}/>
        </Route>

        <Route path='/ufc_mma'>
          <UFC_MMA date={date}/>
        </Route>
      </StatsContext.Provider>
    </div>
  );
}

export default App;
