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
            // weapon : [
            //     'Alcohol',
            //     'Laser',
            //     'Bat with Rusty Nails'
            // ]
        }
    }
    
   
    render() {
        const weaponslist = this.state.weapon.map((element, index) => <Link to={"/quickgame/dcartist/"+element.indexNum}><button className="weaponButton" key={index}>{element.type}</button></Link>)
        return (
            <div>
                 {/* <Link to={"/quickgame/" + info._id}><img src={info.image}></img></Link>  */}
                 {/* <Link to={"/quickgame/dcartist/" + this.state.weapon[0].index}>test</Link>  */}
              {weaponslist}
            </div>
        );
    }
}
export default Weapons;