import React, {Component} from 'react';
import GirlAndPet from '../girl-and-pet';
import VotingActive from '../voting-active';
import BreedsActive from '../breeds-active';
import './voting.css'
export default class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handle = () => {
            this.setState(state => ({
              isToggleOn: !state.isToggleOn
            }));
          }
      }
render() {
    
    return(
        <>
        <div className="MaskGroup0"> </div>
        <div className="Rectangle13"></div>
        <div className="Rectangle22"></div>
        <div className="vote-table"></div>
        <div className="Rectangle24VOTING"onClick={() => this.handle()}>{this.state.isToggleOn ? <GirlAndPet/> : <VotingActive/>}
        <div className="Rectangle24"></div>
        <div className="VOTING">VOTING</div>
        </div>
        </>
    );
}
   
}








    