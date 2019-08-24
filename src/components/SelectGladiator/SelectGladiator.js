import React, { Component } from 'react';
import axios from 'axios';
import './GladiatorSelector.css'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
class SelectGladiator extends Component {
    constructor(props){
        super(props);
        this.state = {
            gladiators: []
        }
    }
    componentDidMount(){
        const url = 'http://localhost:8080/api/gladiators';
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
                     <Card>
            <Card.Body>

                    <h2> {info.name}</h2>
                    <Link to={"/quickgame/" + info._id}><img src={info.image}></img></Link> 
                    
                    <ul>
                        <li>gender: {info.gender}</li>
                        <li>Origin: {info.origin.name}</li>
                        <li>species: {info.species}</li>
                    </ul>
                    <p>SCORE: {info.score}</p>
                    <p>GAMES WON: {info.gameswon}</p>
                    <Link to={"/quickgame/" + info._id}><button>Select Gladiator</button></Link> 
            </Card.Body>
        </Card>
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
export default SelectGladiator;