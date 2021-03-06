import React, { Component } from 'react';
import axios from 'axios';
import './Gladiatorlist.css'

class GladiatorListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            gladiators: []
        }
    }
    componentDidMount(){
        // const url = 'http://localhost:8080/api/gladiators';
        const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators';
        axios
          .get(url)
          .then(response => {
            this.setState(
              prevState => ({
                gladiators: response.data[0].results
              }),
            //   _ => console.log("get all getting data")
            //   _ => console.log(response.data[0].results[1])
              _ => console.log(this.state.gladiators)
            );
          }).catch(err => {
            console.error(err);
          });
        }
    render() {
        const gladiatorInfo = this.state.gladiators.map((info, index) => {
            return (
                <div key={index}>
                    <h2> {info.name}</h2>
                    <img src={info.image}></img>
                    <ul>
                        <li>gender: {info.gender}</li>
                        <li>Origin: {info.origin.name}</li>
                        <li>species: {info.species}</li>
                    </ul>
                    <p>SCORE: {info.score}</p>
                    <p>GAMES WON: {info.gameswon}</p>
                </div>
            )
        });
        return (
            <div className="baselayout">
                {gladiatorInfo}
            </div>
        );
    }
}

export default GladiatorListing;