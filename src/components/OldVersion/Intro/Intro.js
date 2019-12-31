import React, { Component } from 'react';
import logo from '../Images/portal.gif';
import name from '../Images/rickmorty.png'
import '../App/App.css';
import {Route, Link, Switch, Redirect} from "react-router-dom";

class Intro extends Component {
    render() {
        return (
            <div>
<header className="App-header">
        <img src={name} className="name" alt="rick and morty"/>
        <p className="title"> Battle Royalle</p>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/home'>ENTER the VOID</Link>
       
      </header>
      
            </div>
        );
    }
}

export default Intro;