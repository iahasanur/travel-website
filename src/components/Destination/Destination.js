import React from 'react';
import { useLocation } from "react-router-dom";
import DestinationForm from '../DestinationForm/DestinationForm';
import Home from '../Home/Home';

const Destination = () => {
    const location = useLocation();
    const myParams= location.state.params;
    return (
         
        
            <div className ="Home-component">
                <div className = "Places-info">
                    <h2>{myParams[0]}</h2>
                    <p>{myParams[1]}</p>

                </div>
                <div className = "Places">
                    <DestinationForm  place= {myParams[0]}></DestinationForm>
                </div>

            </div>
            
                     
        
    );
};

export default Destination;