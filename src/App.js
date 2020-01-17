import React from 'react';
import './assets/css/style.css'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Departures from "./containers/Departures/Departures";
import Header from "./components/Header/Header";
import HeroImage from "./components/HeroImage/HeroImage";

function App() {
  return (
      <div className="App container-fluid">
            <Header/>
            <HeroImage/>
            <Switch>
              <Route path={'/'} exact component={Departures} />
              <Route path={'/departures'} exact component={Departures} />
            </Switch>
      </div>
  );
}

export default App;
