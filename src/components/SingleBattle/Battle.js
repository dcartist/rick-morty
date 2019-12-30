import React, { Component } from 'react';
import Weapons from '../Weapons/Weapons.js'
import axios from 'axios'
class Battle extends Component {
constructor(props){
    super(props)
    this.state = {
      user: null,
      gladiatorInfo:null,
      userweapon: null,
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
pullGladiatorInf(){
    var gladiatorName = this.props.match.params.gladiator

        const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators/id/'+gladiatorName;
        console.log(url)
        axios
        .get(url)
        .then(response => {
          this.setState(
            prevState => ({
                gladiatorInfo: response.data[0]
            }),
          //   _ => console.log("get all getting data")
            // _ => console.log(response.data[0])
            // _ => console.log(this.state.gladiatorInfo.name) //checking to see if information
          );
        }).catch(err => {
          console.error(err);
        });
        // console.log('testing')
        
    }
 
componentWillMount(){
    //Selecting weapon for the gladiator using Random
    var chosenweapon = Math.floor((Math.random() * 3) + 0);
    this.setState(PreviousState => ({
        gladiatorweapon: parseInt(chosenweapon),
    }))

    
    
    this.pullGladiatorInf()
    console.log(parseInt(chosenweapon))
    
    //pulling gladiator information
    // var gladiatorName = this.props.match.params.gladiator
    // const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators/id/'+gladiatorName;
    // console.log(url)
    // axios
    // .get(url)
    // .then(response => {
    //   this.setState(
    //     prevState => ({
    //         gladiatorInfo: response.data[0]
    //     }),
    //   //   _ => console.log("get all getting data")
    //     // _ => console.log(response.data[0])
    //     _ => console.log(this.state.gladiatorInfo.name) //checking to see if information
    //   );
    // }).catch(err => {
    //   console.error(err);
    // });
    
    

    //

}
componentDidMount(){
    //pulling gladiator information
    // var gladiatorName = this.props.match.params.gladiator

    // const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators/id/'+gladiatorName;
    // console.log(url)
    // axios
    // .get(url)
    // .then(response => {
    //   this.setState(
    //     prevState => ({
    //         gladiatorInfo: response.data[0]
    //     }),
    //   //   _ => console.log("get all getting data")
    //     // _ => console.log(response.data[0])
    //     _ => console.log(this.state.gladiatorInfo.name) //checking to see if information
    //   );
    // }).catch(err => {
    //   console.error(err);
    // });
    // console.log('testing Did mount')
    

    //
}

render() {

    
  console.log('render')
    // console.log('this state of gladiator' + this.state.gladiatorInfo)
    // console.log(typeof(this.state.gladiatorInfo))

    

        return (
            <div>
this is a test


            <Weapons weaponSelected={this.props.match.params.userweapon}></Weapons>
                {this.user}
                {this.props.match.params.user}
                name: 
                <p>
                    Gladiator weapon chosen : 
                    {this.state.weapon[0].type}
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