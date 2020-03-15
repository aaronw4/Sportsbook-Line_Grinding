import React, {useState} from 'react';
import axiosWithAuthNcaabb from './components/axiosWithAuth';
import {Route, Link} from 'react-router-dom';
import NcaaBB from './components/ncaaBB';
import NcaaFB from './components/ncaaFB';
import NFL from './components/nfl';
import NBA from './components/nba';
import MLB from './components/mlb'
import './App.css';

function App() {
   // const [date, setDate] = useState(new Date().toISOString().slice(0,10));
   const [games, setGames] = useState([]);
   const date = '2020-03-10';
  
  function fetchNcaabb() {
      axiosWithAuthNcaabb()
          .get(`/sports/5/events/${date}?include=all_periods&include=scores&offset=0`)            
          .then(res => {
            setGames(res.data.events)
            console.log(res.data.events);
          })
          .catch(err=> console.log(err))
  };

  return (
    <div className="App">
      <Route exact path='/'>
        <div className='homePageLinks'>
          <Link onClick={fetchNcaabb} to='/ncaabb'>
            <h2 className='homePageLink'>NCAA BB</h2>
          </Link>
          <Link to='/ncaafb'>
            <h2>NCAA FB</h2>
          </Link>
          <Link to='/nfl'>
            <h2>NFL</h2>
          </Link>
          <Link path='/nba'>
            <h2>NBA</h2>
          </Link>
          <Link path='/mlb'>
            <h2>MLB</h2>
          </Link>
        </div>
      </Route>

      <Route path='/ncaabb'>
        <NcaaBB games={games}/>
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
    </div>
  );
}

export default App;
