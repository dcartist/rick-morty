import React, { Component } from 'react';
import Weapons from '../Weapons/Weapons.js'
import axios from 'axios'
class Battle extends Component {
constructor(props){
    super(props)
    this.state = {
      user: null,
      gladiatorInfo:null,
      score: null,
      gladiatorweapon: null,
      //weapon listing for second time because I was too lazy to attempt to pull from component
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

componentWillMount(){
    //Selecting weapon for the gladiator using Random
    var chosenweapon = Math.floor((Math.random() * 3) + 0);
    this.setState(PreviousState => ({
        gladiatorweapon: parseInt(chosenweapon),
    }))
    console.log(parseInt(chosenweapon))    
    //pulling gladiator information
    var gladiatorName = this.props.match.params.gladiator
    const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators/id/'+gladiatorName;
    console.log(url)
    axios
    .get(url)
    .then(response => {
      this.setState(
        prevState => ({
            gladiatorInfo: response.data
        }),
      //   _ => console.log("get all getting data")
        // _ => console.log(response.data)
        _ => console.log(this.state.gladiatorInfo[0].name) //checking to see if information pulled
      );
    }).catch(err => {
      console.error(err);
    });
    
    //battle information
    // if ( this.state.gladiatorweapon == )

    //

}




render() {
    
        return (
            <div>

            <Weapons weaponSelected={this.props.match.params.userweapon}></Weapons>
                {this.user}
                {this.props.match.params.user}
                name: {this.state.gladiatorInfo[0].name}
                <p>
                    Gladiator weapon chosen : 
                    {this.state.weapon[0].type}
                    {this.state.weapon[0]}
                    {/* {this.state.gladiatorweapon} */}
                    <br></br>
                {this.state.weapon[this.state.gladiatorweapon].type}
                
                </p>
                {/* {this.props.match.params.userweapon} */}
            </div>

        );
    }
}

export default Battle;