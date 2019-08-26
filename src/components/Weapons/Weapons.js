import React, { Component } from 'react';


class Weapons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapon : [
                'Alcohol',
                'Laser',
                'Bat with Rusty Nails'
            ]
        }
    }
    
   
    render() {
        const weaponslist = this.state.weapon.map((element, index) => <button key={index}>{element}</button>)
        return (
            <div>
              {weaponslist}
            </div>
        );
    }
}

export default Weapons;