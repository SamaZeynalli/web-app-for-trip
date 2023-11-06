import React from "react";
import './joinus.css';

const JoinUs = () => { 
    return(
        <div className="joinUs">
            <div className="joinBody">
                <div className="joinText">
                    <span>Join our travel revolution</span>
                    <p>Sign up to stay in the know - hot new travel spots, how we strive to make the world a better place, and all sorts of surprises.</p>
                </div>
                <div className="inputButton">
                    <input type="text" placeholder="Email"/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;