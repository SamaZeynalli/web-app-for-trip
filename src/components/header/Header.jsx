import React from "react";
import './header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
           < nav>
            <ul className="links">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Contactus">Contact us</Link></li>
            </ul>
           </nav>
           <div className="currency">
            <select id="currency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="azn">AZN</option>
            </select>
           </div>
        </header>
    )
}

export default Header;