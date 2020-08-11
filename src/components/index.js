import React from 'react';
import './style.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import Grid from './GroupDisplay'
import SinglePerson from './SinglePages/SinglePerson'
import SinglePlanet from './SinglePages/SinglePlanet';
import GalacticLeague from './GalacticLeague';
import SingleSpecies from './SinglePages/SingleSpecies';
import SingleStarship from './SinglePages/SingleStarship'
import NotFound from './NotFound'

function App({location}) {
  return (
    <div className="App">
      <Navbar location={location}/>
         {/* <div className="App-background"></div> */}
        <div className="router">
          <Switch>
            <Route exact path="/myGalacticLeague" component={GalacticLeague}/> 
            <Route exact path="/people" component={(props)=><Grid type={"people"} location={props.location} history={props.history}/>}/>
            <Route path="/people/:id" component={SinglePerson}/>
            <Route exact path="/planets" component={(props)=><Grid type={"planets"} location={props.location} history={props.history}/>}/>
            <Route path="/planets/:id" component={SinglePlanet}/>
            <Route exact path="/species" component={(props)=><Grid type={"species"} location={props.location} history={props.history}/>}/>
            <Route path="/species/:id" component={SingleSpecies}/>
            <Route exact path="/starships" component={(props)=><Grid type={"starships"} location={props.location} history={props.history}/>}/>
            <Route path="/starships/:id" component={SingleStarship}/>
            <Route path="/pageNotFound" component={NotFound}/>
            <Redirect to="/people"/>
          </Switch>
        </div>
    </div>
  );
}

export default App;