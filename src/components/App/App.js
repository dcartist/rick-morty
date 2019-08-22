import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from '../Home/Home.js'
import Intro from '../Intro/Intro.js'

import './App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      genus:null,
      conservationStatus: null,
      image: null,
      homepage: null
    };
  }

  
  setInfo(name){
    this.setState({ name: name});
  }
  render(){
    return (
      <div className="App">
        <Intro></Intro>
      

       <Route path="/home" exact component={Home}/>
        {/* <Route path="/show/:name" render={(props)=> <Show setInfo={this.setInfo} {...props} {...this.state} />} /> */}
    </div>
    );
  }

}



export default App;


