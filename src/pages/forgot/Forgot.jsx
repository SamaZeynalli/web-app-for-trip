import React from "react";
import './forgot.css';
import logo from '../../components/IMG/Logotourist.png';
import Back from '../../components/IMG/loginimg.png';
import { useState } from 'react';


const FORGOT = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };
    return(
        <div>
            <div>
            <div className="signin">
                <div className="left"> <img src={Back} alt="" /></div>
                <div className="login">
                    <div className="logo_section">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="form">
                        <div className="travel_info">
                            <h2>Looking to change your password?</h2>
                                <p>Enter your email below and we'll send you instructions on how to reset your password.</p>
                            <div className="form_info">
                                <div className="inputs">
                                    <div className="input">
                                        <label htmlFor="email">Email</label>
                                        <div className="input_section">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                placeholder="someone@example.com"
                                                value={email} 
                                                onChange={handleInputChange}/>
                                            </div>
                                    </div>
                                </div>
                                <button>Reset my password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FORGOT;