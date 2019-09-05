import React, { Component } from 'react';
import Weapons from '../Weapons/Weapons.js'
class Battle extends Component {
constructor(props){
    super(props)
    this.state = {
      user: null,
      gladiator:null,
      userweapon: null,
      score: null,
      gladiatorweapon: null,
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
componentDidMount(){
    var chosenweapon = Math.floor((Math.random() * 3) + 0);
    this.setState(PreviousState => ({
        gladiatorweapon: parseInt(chosenweapon),

    }))
    console.log(parseInt(chosenweapon))

}
render() {
    console.log(this.state.gladiatorweapon)
    console.log(typeof(this.state.gladiatorweapon))
        return (
            <div>
this is a test


            <Weapons weaponSelected={this.props.match.params.userweapon}></Weapons>
                {this.user}
                {this.props.match.params.user}

                <p>
                    Gladiator weapon chosen : 
                    {this.state.weapon[0].type}
                    {this.state.gladiatorweapon}
                {/* {this.state.weapon[this.state.gladiatorweapon].type} */}
                </p>
                {/* {this.props.match.params.userweapon} */}
            </div>

        );
    }
}

export default Battle;