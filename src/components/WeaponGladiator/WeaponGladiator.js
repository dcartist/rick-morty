import React, { Component } from 'react';

class WeaponGladiator extends Component {
    constructor(props){
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
    };

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default WeaponGladiator;