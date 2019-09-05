import React, { Component } from 'react';
import Weapons from '../Weapons/Weapons.js'
class Battle extends Component {
constructor(props){
    super(props)
    this.state = {
      user: null,
      gladiator:null,
      userweapon: null,
      score: null
    }
}
componentDidMount(){
    const userid = this.props.match.params.Param1
    this.setState = {
        user: userid
    }
    console.log(this.user)
}
    render() {
        return (
            <div>
this is a test


            <Weapons weaponSelected={this.props.match.params.userweapon}></Weapons>
                {this.user}
                {this.props.match.params.user}
                {/* {this.props.match.params.userweapon} */}
            </div>
        );
    }
}

export default Battle;