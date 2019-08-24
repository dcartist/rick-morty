import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Home extends Component {
    render() {
        return (
            <div>
                <p>HOME PAGE</p>
                <p>

                Instructional
                <Link to='/instructions'>instructions</Link>
                </p>
                <p>
                <Link to='/quickgame'>Single Battle</Link>
                Single Battle
                </p>

            </div>
        );
    }
}

export default Home;