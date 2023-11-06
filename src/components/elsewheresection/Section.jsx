import React from "react";
import './section.css';
import Right from '../../components/IMG/Chevron_Right.png';

const Section = () => {
    return(
        <div className="section">
            <div className="body">
                <p>Looking to go elsewhere?</p>
                <button>
                    <span>Our destinations</span>
                    <img src={Right} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Section;