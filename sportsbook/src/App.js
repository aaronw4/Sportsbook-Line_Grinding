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
   const date = '2020-03-10';
  
  function fetchNcaabb() {
      axiosWithAuthNcaabb()
          .get(`/sports/5/events/${date}?include=all_periods&include=scores&offset=0`)            
          .then(res => {
            localStorage.setItem('ncaabb', res.data.events)
            console.log(res.data.events);
          })
          .catch(err=> console.log(err))
  };

  return (
    <div className="App">
      <Route exact path='/'>
        <Link to='/ncaabb' onClick={fetchNcaabb}>
          <h3>NCAA BB</h3>
        </Link>
        <Link to='/ncaafb'>
          <h3>NCAA FB</h3>
        </Link>
        <Link to='/nfl'>
          <h3>NFL</h3>
        </Link>
        <Link path='/nba'>
          <h3>NBA</h3>
        </Link>
        <Link path='/mlb'>
          <h3>MLB</h3>
        </Link>
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
    </div>
  );
}

export default App;
