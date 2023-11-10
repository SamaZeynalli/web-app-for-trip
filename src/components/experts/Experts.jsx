import React from "react";
import './experts.css';
import Callcenter from '../IMG/Callcenter.png';
import Callcenter1 from '../IMG/Callcenter1.png';


const Experts = () => {
    return(
        <div className="localExperts">
                <h2>Our Local Experts</h2>
                <div className="ourExperts">
                        <img src={Callcenter} alt="" className="callcenter"/>
                        <img src={Callcenter1} alt="" className="callcenter1" />
                        <div className="callback1">
                            <p className="text3">Why trust Gary in Florida to plan your trip to South Africa?</p>
                        </div>
                        <div className="callback2">
                            <p className="text4">When Angela in Johannesburg knows best.</p>
                        </div>
                </div>
        </div>
    )
}

export default Experts;