import React, { Component } from 'react';
import GladiatorSelection from '../SelectGladiator/SelectGladiator.js'
class SingleBattle extends Component {
    render() {
        return (
            <div>
                SELECT YOUR GLADITOR
            <GladiatorSelection></GladiatorSelection>
                
            </div>
        );
    }
}

export default SingleBattle;