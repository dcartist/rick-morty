import React, { Component } from 'react';
import GladiatorSelection from '../SelectGladiator/SelectGladiator.js'
import WeaponSelection from '../Selectedweapon/SelectedWeapon.js'
class SingleBattle extends Component {
    render() {
        return (
            <div>
                SELECT YOUR WEAPON:
                <WeaponSelection></WeaponSelection>
            {/* <GladiatorSelection></GladiatorSelection> */}
                
            </div>
        );
    }
}

export default SingleBattle;