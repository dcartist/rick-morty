import React, { Component } from 'react';


class Weapons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weapon = [
                'Alcohol',
                'Laser',
                'Bat with Rusty Nails'
            ]
        }
    }
    
   
    render() {
        return (
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                
            </div>
        );
    }
}

export default Weapons;