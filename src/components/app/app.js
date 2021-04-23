import React, {Component} from 'react';

import Logo from '../logo';
import Voting from '../voting';
import Breeds from '../breeds';
import Gallery from '../gallery';
import GirlAndPet from '../girl-and-pet';


import './app.css';
import './index.css';

export default class App extends Component {

    render() {

        return (
          
        <div className="app"> 
        <div className="group25"></div>
        <Voting/>
        <Breeds/>
        <Gallery/>
             
        <div className="HiIntern">Hi intern!</div>
        <div className="FrontTest">Welcome to MSI 2021 Front-end test</div>
        <div className="DogsAPI">Lets start using The Dogs API</div>
              
        <Logo/>
        <GirlAndPet/>
        

        </div>
        
        )
    } 
    
      
            
               
}