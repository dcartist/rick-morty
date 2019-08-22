import React, { Component } from 'react';
import logo from '../Images/portal.gif';
import name from '../Images/rickmorty.png'
import '../App/App.css';

class Intro extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default Intro;