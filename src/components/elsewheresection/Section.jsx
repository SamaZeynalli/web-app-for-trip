import React from "react";
import './section.css';
import Right from '../../components/IMG/Chevron_Right.png';

const ElseSection = () => {
    return(
        <div className="section">
                <span>Looking to go elsewhere?</span>
                <button>
                    <p>Our destinations</p>
                    <img src={Right} alt="" />
                </button>
        </div>
    )
}

export default ElseSection;