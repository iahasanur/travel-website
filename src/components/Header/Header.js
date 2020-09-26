import React from 'react';
import {  Button } from 'react-bootstrap';
import './Header.css';
import logo from "../../Logo.png"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className = "Header-component">
            
            <nav className = "Nav">
                <ul>
                    <li>
                        <img className = "Logo" src ={logo} alt = "logo of travel website" /> 
                    </li>
                    <li>
                        <input type="text" placeholder="Search your destination"></input>
                    </li>
                    <li>
                        <Link to = "/home"> News </Link>
                    </li>
                    <li>
                        <Link to = "/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to = "/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to = "/contact"> Contact</Link>
                    </li>
                    <li>
                        <Link to ="/login"><Button variant = "warning"> Login</Button></Link>
                    </li>
                </ul>
           
            </nav>
            
        </div>
    );
};

export default Header;