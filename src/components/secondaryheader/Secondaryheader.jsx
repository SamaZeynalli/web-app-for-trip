import React from "react";
import './secondaryheader.css';
import {Link} from 'react-router-dom';
import MyImage from '../IMG/Logotourist.png'



const Secondaryheader = () => {
    return(
        <div className="secondary">
            <div className="container">
                <div className="menu">
                    <Link to="/Destinations" className="destination">Destinations</Link>
                    <Link to="/Privatetrips" className="destination">Private trips</Link>
                </div>
                <div className="myImage">
                    <img src={MyImage} alt="" />
                </div>
                <div className="loginBtn">
                        <button>I'm Feeling Lucky</button>
                        <button>Login</button>
                </div>
            </div>
            
        </div>
    )
}

export default Secondaryheader;