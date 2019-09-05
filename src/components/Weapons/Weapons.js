import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './weapons.css'


class Weapons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapon : [
                {
                    type:'Alcohol',
                    index: 0
                }
                ,
                {
                    type:'Laser',
                    index: 1
                },
                {
                    type:'Bat with Rusty Nails',
                    index: 2

                }

                
            ]
            // weapon : [
            //     'Alcohol',
            //     'Laser',
            //     'Bat with Rusty Nails'
            // ]
        }
    }
    
   
    render() {
        const weaponslist = this.state.weapon.map((element, index) => <button className="weaponButton" key={index}>{element.type}</button>)
        return (
            <div>
                 {/* <Link to={"/quickgame/" + info._id}><img src={info.image}></img></Link>  */}
                 <Link to={"/quickgame/" + this.state.weapon[0].index}>test</Link> 
              {weaponslist}
              {this.state.weapon[0].index}
            </div>
        );
    }
}

export default Weapons;