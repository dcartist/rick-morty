import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from '../Home/Home.js'
import logo from '../Images/portal.gif';
import name from '../Images/rickmorty.png'
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
      <header className="App-header">
        <img src={name} className="name" alt="rick and morty"/>
        <p className="title"> Battle Royalle</p>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Route path="/" exact component={Home}/>
      {/* <Route path="/show/:name" render={(props)=> <Show setInfo={this.setInfo} {...props} {...this.state} />} /> */}

    </div>
    );
  }

}



export default App;


