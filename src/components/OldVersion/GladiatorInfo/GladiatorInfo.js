import React, { Component } from 'react';

class GladiatorInfo extends Component {
    constructor(props){
        super(props){
            this.state = {
                GladiatorInfo: null,
                GladiatorId: this.props.match.params.gladiator
            }
        }
    }
componentWillMount(){
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
        _ => console.log(this.state.gladiatorInfo.name) //checking to see if information
      );
    }).catch(err => {
      console.error(err);
    });
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default GladiatorInfo;