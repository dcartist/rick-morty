import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from '../Home/Home.js'
import Intro from '../Intro/Intro.js'
import Instructions from '../Instructions/Instructions.js'
import Quick from '../SingleBattle/SingleBattle.js'
import GladitorList from '../GladiatorListing/GladiatorListing.js'
import SelectGladiator from '../SelectGladiator/SelectGladiator.js'

import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      gladiator:null,
      userweapon: null,
      score: null
    };
  }

  setUserWeapon(userweapon){
    this.setState({userweapon});
  }
  setUser(user){
    this.setState({user});
  }

  setjobId = (jobId) => {
    this.setState({jobId: jobId});
  }
  
 
  render(){
    return (
      <div className="App">
        
      
      <Route path="/home" component={Home}/>
       <Route path="/" exact component={Intro}/>
       <Route path="/instructions" exact component={Instructions}/>
       <Route path="/quickgame" exact component={Quick}/>
       <Route path="/quickgame/:user/:userweapon/gladiators" component={SelectGladiator}/>
       {/* <Route path="/quickgame" exact component={Quick}/> */}
       <Route path="/gladiators" exact component={GladitorList}/>
       {/* <Route path="/quickgame/:user/:userweapon" exact render={(props)=> <Price setPrice={this.setPrice} {...props} {...this.state} />} /> */}

{/*        
       <Route path="/quickgame/:user" exact render={(props)=> <Price setPrice={this.setPrice} {...props} {...this.state} />} />
       <Route path="/quickgame/:user/:userweapon" exact render={(props)=> <Price setPrice={this.setPrice} {...props} {...this.state} />} />
 */}

       {/* <Route path="/price/:currency" render={(props)=> <Price setPrice={this.setPrice} {...props} {...this.state} />} /> */}
        {/* <Route path="/show/:name" render={(props)=> <Show setInfo={this.setInfo} {...props} {...this.state} />} /> */}
    </div>
    );
  }

}


export default App;


