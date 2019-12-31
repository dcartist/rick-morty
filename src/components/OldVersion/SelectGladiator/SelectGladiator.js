import React, { Component } from 'react';
import axios from 'axios';
import './GladiatorSelector.css'
import Card from 'react-bootstrap/Card';
import GladiatorList from '../../data/gladiators_new.json'
import {Link} from 'react-router-dom';
// import Images from '../Images/Gladiators'
class SelectGladiator extends Component {
    constructor(props){
        super(props);
        this.state = {
            gladiators: GladiatorList
            // gladiators: []

        }
    }
    componentDidMount(){
        // const url = 'http://localhost:8080/api/gladiators';
        // const url = 'https://quiet-inlet-51385.herokuapp.com/api/gladiators';
        // const url = GladiatorList;
        // axios
        //   .get(url)
        //   .then(response => {
        //     this.setState(
        //       prevState => ({
        //         gladiators: response.data
        //       }),
        //     //   _ => console.log("get all getting data")
        //       // _ => console.log(response.data)
        //       _ => console.log(this.state.gladiators)
        //     );
        //   }).catch(err => {
        //     console.error(err);
        //   });
        }
    render() {

        const gladiatorInfo = this.state.gladiators.map((info, index) => {
          let newImage = info.image.replace("https://rickandmortyapi.com/api/character/avatar/","")

            return (
                
                <div key={index}>
                     <Card>
            <Card.Body>

                    <h2> {info.name}</h2>

                    {/* <Link to={"/quickgame/" + info._id}><img src="{Image}/newImage"></img></Link>  */}
                    <Link to={"/quickgame/" + info._id}><img src={info.image}></img></Link> 
                    
                    <ul>
                        <li>gender: {info.gender}</li>
                        <li>Origin: {info.origin.name}</li>
                        <li>species: {info.species}</li>
                    </ul>
                    <p>SCORE: {info.score}</p>
                    <p>GAMES WON: {info.gameswon}</p>
                    {/* <Link to={"/quickgame/" + info._id}><button>Select Gladiator</button></Link>  */}
                    <Link to={"./" + info._id+"/battle/"}><button>Select Gladiator</button></Link> 
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