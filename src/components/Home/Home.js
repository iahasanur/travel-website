import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import "./Home.css";

import sundarban from "../../Image/sundorbon.png";
import sajek from "../../Image/Sajek.png";
import sreemangal from "../../Image/Sreemongol.png";

import sundarbanFakeData from "../../fakeData/Sundarban";
import sajekFakeData from "../../fakeData/Sajek";
import sreemangalFakeData from "../../fakeData/Sreemongol";
import { Button } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import { useHistory } from 'react-router-dom';



const Home = () => {

    const [descriptionOfPlace, setdescriptionOfPlace] = useState("");
    const [place, setPlace] = useState("");
    const history = useHistory();
    const handleClick= ()=>{
        history.push("/destination",{params:[place, descriptionOfPlace]});
        
    }
    const handlePictureInfo = (props)=>{
        let fakeData = props;
        let place = props;

        if( fakeData=== "Sundarban"){
            fakeData = sundarbanFakeData[0].about;
        }
        else if(fakeData === "Sajek Valley"){
            fakeData = sajekFakeData[0].about;

        }
        else{
            fakeData = sreemangalFakeData[0].about ;
        }

        setdescriptionOfPlace(fakeData);
        setPlace(place);
        
    }

    return (
        
        <div className = "Home-component"> 
            <div className = "Places-info">
            {
                <h3>{place}</h3>
            }
            {
                <p>{descriptionOfPlace}</p>
            }
            {
            <Button onClick={()=>{handleClick()}} variant = "warning"> Booking</Button>
            }
           </div>
           <div className = "Places">
                <img className = "Places-pic" src = {sundarban} alt= "sundarban" onClick={()=>{handlePictureInfo("Sundarban")}}/>
                <img className = "Places-pic" src = {sajek} alt = "sreemangal" onClick={()=>{handlePictureInfo("Sreemangal")}} />
                <img className = "Places-pic" src = {sreemangal} alt = "sajek" onClick={()=>{handlePictureInfo("Sajek Valley")}} />
           </div>
        </div>
    );
};

export default Home;