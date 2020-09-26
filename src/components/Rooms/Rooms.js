import React, { useEffect, useState } from 'react';
import "./Rooms.css"
import logo from "../../Logo.png";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import sreemangalFakeData from "../../fakeData/Sreemongol";
import sundarbanFakeData from "../../fakeData/Sundarban";
import sajekFakeData from "../../fakeData/Sajek";
import ShowData from '../ShowData/ShowData';

const Rooms = () => {
    const [hotelRooms, setHotelRooms] = useState([]);

    const location = useLocation();
    const history = useHistory();
    const myParams = location.state.params;
    const displayRooms = () => {
        if (myParams[0] === "Sundarban") {
            const newRoom = sundarbanFakeData;
            setHotelRooms(newRoom);
        }
        else if (myParams[0] === "Sajek Valley") {
            const newRoom = sajekFakeData;
            setHotelRooms(newRoom);

        }
        else if (myParams[0]==="Sreemangal"){

            const newRoom = sreemangalFakeData;
            setHotelRooms(newRoom);
        }
        // console.log(hotelRooms, myParams[0], 'go it');
        // history.push("/show", {params : hotelRooms});

    }
    return (
        <div className="Rooms-component">
            <nav className="Navs">
                <ul className=" Nav-one">
                    <li>
                        <img className="Logo" src={logo} alt="logo of travel website" />
                    </li>
                </ul>
                <ul className="Nav-sec">
                    <li>
                        <Link to="/home"> News </Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact</Link>
                    </li>
                </ul>

            </nav>
            {
                <Button variant="success" onClick={() => { displayRooms() }}>Display Available Rooms</Button>
            }
            <div className="Room-information">
                {
                    hotelRooms.map(rom => {
                        return <>
                            <ShowData room={rom}></ShowData>

                        </>
                    }
                    )
                }
            </div>



        </div>
    );
};

export default Rooms;