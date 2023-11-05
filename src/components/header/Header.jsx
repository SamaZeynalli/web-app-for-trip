import React from "react";
import './header.css';
import {Link} from 'react-router-dom';
import MyImage from '../IMG/Logotourist.png';


const Header = () => {
    return(
        <header className="header_menu">
            <div className="header">
                <div className="secondaryHeader">
                <div className="container">
                    <ul className="links">
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/FAQ">FAQ</Link></li>
                        <li><Link to="/Blog">Blog</Link></li>
                        <li><Link to="/Contactus">Contact us</Link></li>
                    </ul>
                    <button>
                        <select id="currency">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="azn">AZN</option>
                        </select>
                    </button>
                </div>
                </div>
                <div className="mainHeader">
                    <div className="container">
                        <div className="menu">
                            <div className="link"><Link to="/Destinations" className="destination">Destinations</Link></div>
                            <div className="link"><Link to="/Privatetrips" className="destination">Private trips</Link></div>
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
            </div>
        </header>
    )
}

export default Header;