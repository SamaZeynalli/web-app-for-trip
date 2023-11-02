import React from "react";
import './header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <header className="header">
           < nav>
            <ul className="links">
                <li><Link to="/about">About us</Link></li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
           </nav>
           <div className="currency">US$</div>
        </header>
    )
}

export default Header;