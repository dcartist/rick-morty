import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import Weapons from '../Weapons/Weapons.js'
import '../Weapons/weapons.css'
class SelectedWeapon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapon : [
                {
                    type:'Alcohol',
                    indexNum: 0
                }
                ,
                {
                    type:'Laser',
                    indexNum: 1
                },
                {
                    type:'Bat with Rusty Nails',
                    indexNum: 2

                }   
            ]
        }
    }

    render() {
        const weaponslist = this.state.weapon.map((element, index) => <Link to={"/quickgame/dcartist/"+element.indexNum+'/gladiators'}><button className="weaponButton" key={index}>{element.type}</button></Link>)
        return (
            <div>
                
                {/* <Weapons></Weapons> */}
                {weaponslist}
            </div>
        );
    }
}

export default SelectedWeapon;