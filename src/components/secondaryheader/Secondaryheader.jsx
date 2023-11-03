import React from "react";
import './secondaryheader.css';
import {Link} from 'react-router-dom';
import MyImage from '../IMG/Logotourist.png'



const Secondaryheader = () => {
    return(
        <div className="secondary">
            <div>
                <ul className="links">
                    <li><Link to="/Destinations">Destinations</Link></li>
                    <li><Link to="/Privatetrips">Private trips</Link></li>
                </ul>
            </div>
            <div>
                <img src={MyImage} alt="" />
            </div>
            <div className="btn">
                <button>I'm Feeling Lucky</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Secondaryheader;